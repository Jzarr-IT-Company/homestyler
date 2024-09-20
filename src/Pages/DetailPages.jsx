import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import SecondRatingStart from '../Component/SecondRatingStart/SecondRatingStart';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

function DetailPages() {
    const { id } = useParams();
    const [detailProducts, setDetailProducts] = useState([])
    useEffect(() => {
        const getAllProductsData = async () => {
            try {
                const response = await axios('/Json/allproducts.json');
                const filteredProducts = response.data.allproducts.filter(
                    (product) => product.id == id // Ensure `id` in your JSON is of type string
                );
                setDetailProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        getAllProductsData();
    }, [id])
    console.log(id)
    const navigate = useNavigate()
    const buy = async (data) => {
        localStorage.setItem("buy", JSON.stringify(data))
        navigate('/billing')
    }
    const addtocard = async (data) => {
       
    // Retrieve existing products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("addToCard")) || [];

    // Add new product to the existing products array
    storedProducts.push(data);

    // Save updated product list back to localStorage
    localStorage.setItem("addToCard", JSON.stringify(storedProducts));
    }
    return (
        <>
            <Navbar />
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-4 border col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="">
                            {
                                detailProducts.map((data) => {
                                    return (
                                        <>
                                            <img src={data.thumbnail} className="img-fluid rounded-3" alt="" />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-5 col-sm-12 py-5 px-3 border">
                        {
                            detailProducts.map((data) => {
                                console.log(data)
                                const descriptionSnippet = data.description
                                    .split(' ')
                                    .slice(0, 10)
                                    .join(' ') + (data.description.split(' ').length > 10 ? '...' : '');
                                return (
                                    <>
                                        <h4 className="fs-3">
                                            {data.title}
                                        </h4>
                                        <p className="">
                                            {data.category}
                                        </p>
                                        <p>
                                            {descriptionSnippet}
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <p className="fw-semibold fs-5" style={{ color: "#00191c" }}>
                                                Price: {data.price}
                                            </p>
                                            <SecondRatingStart rating={data.rating} />
                                        </div>
                                        <div className="d-flex flex-column mt-5" style={{ gap: "10px 0" }}>
                                            <button className='button' onClick={() => { addtocard(data) }}>Add To Card
                                            </button>
                                            <button className='button' onClick={() => { buy(data) }}>Buy
                                            </button>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailPages