import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Category.css'
import Rating from '../Rating/Rating';

function Category() {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        const getAllShowProducts = async () => {
            const fetchData = await fetch('/Json/allcategorysproducts.json')
            const response = await fetchData.json();
            setAllProducts(response.products)
        }
        getAllShowProducts()
    }, [])
    return (
        <>
            <div className="container pb-5 my-5">
                <div className="row" style={{ gap: "30px 0px" }}>
                    <div className="col-lg-3 col-md-4 col-sm-12 border rounded-4" id='bg-image'>
                        <h3 className='text-center mt-4 mb-3 text-white'>Home Decor</h3>
                        <div className="border bg-light px-3 my-3 d-flex justify-content-center align-items-center rounded-5 py-3">
                            <Link to={`/subcategory/${'Furniture'}`} className="text-center m-0 px-5 py-0 fw-semibold text-decoration-none text-dark">
                                Furniture
                            </Link>
                        </div>
                        <div className="border bg-light px-3 my-3 d-flex justify-content-center align-items-center rounded-5 py-3">
                            <Link to={`/subcategory/${'Lighting'}`} className="text-center m-0 px-5 py-0 fw-semibold text-decoration-none text-dark">
                                Lighting
                            </Link>
                        </div>
                        <div className="border bg-light px-3 my-3 d-flex justify-content-center align-items-center rounded-5 py-3">
                            <Link to={`/subcategory/${'Decor'}`} className="text-center m-0 px-5 py-0 fw-semibold text-decoration-none text-dark">
                                Decor
                            </Link>
                        </div>
                        <div className="border bg-light px-3 my-3 d-flex justify-content-center align-items-center rounded-5 py-3">
                            <Link to={`/subcategory/${'Kitchen'}`} className="text-center m-0 px-5 py-0 fw-semibold text-decoration-none text-dark">
                                Kitchen
                            </Link>
                        </div>
                        <div className="border bg-light px-3 my-3 d-flex justify-content-center align-items-center rounded-5 py-3">
                            <Link to={`/subcategory/${'Bathroom'}`} className="text-center m-0 px-5 py-0 fw-semibold text-decoration-none text-dark">
                                Bathroom
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12" >
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            slidesPerView={3}
                            spaceBetween={10}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                380: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                allProducts.map((data, index) => {
                                    const descriptionSnippet = data.description
                                        .split(' ')
                                        .slice(0, 10)
                                        .join(' ') + (data.description.split(' ').length > 10 ? '...' : '');

                                    return (
                                        <>
                                            <SwiperSlide key={index} className="abc">
                                                <div className="card" style={{ height: "500px" }}>
                                                    <img src={data.thumbnail} height={250} width={100} style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{data.category}</h5>
                                                        <p className="card-text">
                                                            {descriptionSnippet}
                                                        </p>
                                                        <p className='card-text'>Price: {data.price}</p>
                                                        <Rating rating={data.rating} />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category