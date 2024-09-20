import React from 'react'

function HomeBanner3() {
    return (
        <>
            <div className="container border rounded-3" style={{backgroundColor:"#f5f5f5"}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 py-5 px-5">
                        <span className='d-flex justify-content-center mb-3 align-items-center'>
                            <i class="fa-solid fa-rocket fs-1"></i>
                        </span>
                        <div className="">
                            <h4 className='text-center'>Express Shipping</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consecte adipiscing elit pellentesque</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 py-5 px-5">
                        <span className='d-flex justify-content-center mb-3 align-items-center'>
                            <i class="fa-solid fa-credit-card fs-1"></i>
                        </span>
                        <div className="">
                            <h4 className='text-center'>PAYMENT SECURED</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consecte adipiscing elit pellentesque</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 py-5 px-5">
                        <span className='d-flex justify-content-center mb-3 align-items-center'>
                            <i class="fa-solid fa-wallet fs-1"></i>
                        </span>
                        <div className="">
                            <h4 className='text-center'>Money Back Guarantee</h4>
                            <p className='text-center'>Lorem ipsum dolor sit amet consecte adipiscing elit pellentesque</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner3