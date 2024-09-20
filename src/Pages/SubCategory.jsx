import React, { useEffect, useState } from 'react';
import Categoryes from '../Component/Categoryes/Categoryes';
import Navbar from '../Component/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Component/Footer/Footer';
import { useGlobalState } from '../Context/Context';

function SubCategory() {
    const { subCategoryname, setSubCategoryName } = useGlobalState()
    const [subcategoryname, setSubcategoryname] = useState('');
    const [subCateg, setSubCatego] = useState([]);
    const { name: subCategoryName } = useParams();

    useEffect(() => {
        setSubcategoryname(subCategoryName);
        const getSubCategoryData = async () => {
            try {
                const response = await axios('/Json/subcategoryofcategory.json');

                const filteredSubCategories = response.data.subcategoryes.filter(
                    (subcategory) => subcategory.categoryname === subCategoryName
                );
                setSubCatego(filteredSubCategories);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        getSubCategoryData();
    }, [subCategoryName]);
    const navigate = useNavigate()
    const handle = (name) => {
        setSubCategoryName(name)
        navigate(`/show/${name}`)
    }
    return (
        <>
            <Navbar />
            <Categoryes />
            <div className="container py-5 my-5">
                <h3 className="text-center fw-semibold">{subcategoryname}</h3>
                <p className="text-center">Category of {subcategoryname}</p>
                <div className="row mt-5" style={{ gap: "20px 0px" }}>
                    {subCateg.map((subcategory, index) => (
                        subcategory.subcategorye.map((data) => (
                            <div key={data.title + index} className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} onClick={() => { handle(data.title) }}>
                                <div className="card h-100 " style={{ height: "400px", display: "flex", flexDirection: "column" }}>
                                    <img
                                        src={data.image}
                                        className="card-img-top"
                                        alt={data.title}
                                        style={{
                                            height: "250px",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <div className="card-body" style={{ flexGrow: 1 }}>
                                        <h4 className="card-title text-capitalize fw-semibold text-center">{data.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <Footer />

        </>
    );
}

export default SubCategory;
