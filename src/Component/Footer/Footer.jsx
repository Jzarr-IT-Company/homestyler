import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid border mt-5 py-5" style={{backgroundColor:"#152934"}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className='font_1 text-center text-white'>LuxeHomery</h3>
                        <p className='text-center px-5 text-white'>Lorem ipsum dolor sit amet consecte adipiscing elit pellentesque</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="text-center">
                            <p className='text-white'>Home</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>About</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>Contact Us</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>FAQs</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="text-center">
                            <p className='text-white'>Furniture</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>Lighting</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>Decor</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>Kitchen</p>
                        </div>
                        <div className="text-center">
                            <p className='text-white'>Bathroom</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <h3 className='mb-3 text-white'>Contact Us</h3>
                        <div className="text-start">
                            <p className='text-white'>
                                <span>
                                    <i class="fa-solid fa-phone fs-5 me-3"></i>
                                </span>
                                +92 000000000
                            </p>
                        </div>
                        <div className="text-start">
                            <p className='text-white'>
                                <span>
                                    <i class="fa-regular fa-envelope fs-5 me-3"></i>
                                </span>
                                example@gmail.com
                            </p>
                        </div>
                        <div className="text-start">
                            <p className='text-white'>
                                <span>
                                    <i class="fa-solid fa-location-dot fs-5 me-3"></i>
                                </span>
                                example@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer