import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SecondRatingStart from '../Component/SecondRatingStart/SecondRatingStart';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Categoryes from '../Component/Categoryes/Categoryes';
import Footer from '../Component/Footer/Footer';
import { useGlobalState } from '../Context/Context';

function ShowAllProducts() {
    const { subCategoryname } = useGlobalState();
    const [showProduct, setShowProduct] = useState([]);
    const [name, setName] = useState('')
    // const { name: subCategoryName } = useParams();  
    useEffect(() => {
        setName(subCategoryname)
        const getSubCategoryData = async () => {
            try {
                const response = await axios('/Json/allproducts.json');
                const filteredSubCategories = response.data.allproducts.filter(
                    (subcategory) => subcategory.category === subCategoryname
                );
                setShowProduct(filteredSubCategories);
                console.log(filteredSubCategories)
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        getSubCategoryData();
    }, [subCategoryname]);
    return (
        <>
            <Navbar />
            <Categoryes />
            <div className="container py-5 my-4">
                <h3 className='mb-4'>{subCategoryname}</h3>
                <div className="row" style={{ gap: "10px 0px" }}>
                    {
                        showProduct.map((data) => {
                            console.log(data.id)
                            const descriptionSnippet = data.description
                                .split(' ')
                                .slice(0, 10)
                                .join(' ') + (data.description.split(' ').length > 10 ? '...' : '');
                            return (
                                <>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="card">
                                            <img src={data.thumbnail} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text">
                                                    {descriptionSnippet}
                                                </p>
                                                <div className="d-flex align-item-center justify-content-between">
                                                    <p className="card-text">Price : ${data.price}</p>
                                                    <SecondRatingStart rating={data.rating} />
                                                </div>
                                                <Link to={`/dp/${data.id}`}>View Detail</Link>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShowAllProducts