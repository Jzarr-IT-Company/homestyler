import React from 'react'
import banner1 from "../../assets/banner1.webp"
import banner2 from "../../assets/banner2.webp"
function HomeBanner1() {
    return (
        <>
            <div className="container py-5 my-5 border rounded-4" style={{backgroundColor:"#f5f5f5"}}>
                <div className="row d-flex justify-conetnt-center align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-12 px-5">
                        <h3 className='fw-bold mb-3'>Futher Categories</h3>
                        <p className='text-secondary fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie, ligula et rutrum blandit, ex erat suscipit diam, quis placerat odio nulla et libero. Vestibulum id enim ac est feugiat laoreet
                        </p>
                        <button id="button">
                            View All Categories
                        </button>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12 ">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 py-4 d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-couch fs-1"></i>
                                Furniture
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 py-4 d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-regular fa-lightbulb fs-1"></i>
                                Lighting
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 py-4 d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-snowman fs-1"></i>
                                Decor
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 py-4 d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-kitchen-set fs-1"></i>
                                Kitchen
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 py-4 d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-sink fs-1"></i>
                                Bathroom
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner1