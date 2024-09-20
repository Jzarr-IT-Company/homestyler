import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function CheckOut() {
    const [getdata, setData] = useState([])
    useEffect(() => {
        const getDataFromLocalStorage = JSON.parse(localStorage.getItem("addToCard"));
        setData(getDataFromLocalStorage)
    }, [])
    const navigate = useNavigate();
    const biling = () => {
        alert("HI")
        navigate('/billing')
    }
    return (
        <>
            <Navbar />
            <section>
                <div className="container my-5 pt-4 bilingData" id="bilingData">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-semibold fs-4">Product</p>
                        <p className="fw-semibold fs-5">
                            Total Price: <span id="totalPrice" />
                        </p>
                    </div>
                    <div className="row d-flex justify-conet">
                        <div
                            className="col-lg-12 col-md-12 col-12 border"
                            style={{ height: 360, overflowX: "auto" }}
                        >
                            <div className="d-flex justify-content-between py-3 px-3">
                                <p className="fw-bold">Product</p>
                                <div className="d-flex justify-content-between" style={{ gap: 60 }}>
                                    <p className="fw-bold">Price</p>
                                </div>
                            </div>
                            <div id="checkData">
                                {
                                    getdata.map((data) => {
                                        return (
                                            <>
                                                <div className="mt-4 d-flex align-items-center justify-content-between border-bottom">
                                                    <div className="d-flex" style={{ gap: 60 }}>
                                                        <img src={data.thumbnail} width={70} alt="" />
                                                        <p className="fw-semibold fs-6 flex-wrap" id="title">
                                                            {data.title}
                                                            {/* ${"{"}datas.title{"}"} X ${"{"}datas.quantity{"}"} */}
                                                        </p>
                                                    </div>
                                                    <p id="price">
                                                        {data.price}
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-4 d-flex justify-content-between align-items-center col-lg-12 col-md-12 col-sm-12">
                            <button
                                className="button fw-semibold text-capitalize mb-5"
                                onclick="back()"
                            >
                                Continue shoping{" "}
                            </button>
                            .
                            <button
                                className="button fw-semibold text-capitalize mb-5"
                                onClick={biling}
                            >
                                CheckOut
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CheckOut