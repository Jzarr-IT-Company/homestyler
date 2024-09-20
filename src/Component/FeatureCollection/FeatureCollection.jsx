import React from 'react'
import Card from 'react-bootstrap/Card';
import collection1 from "../../assets/collection1.webp"
import collection2 from "../../assets/collection2.webp"
import collection3 from "../../assets/collection3.webp"
import collection4 from "../../assets/collection4.webp"
import collection5 from "../../assets/collection5.webp"
import "./FeatureCollection.css"
// import FeatureCollectionCards from '../FeatureCollectionCards/FeatureCollectionCards';
function FeatureCollection() {
    return (
        <>
            <div className="container py-5 my-5">
                <h3 className='text-center text-capitalize mb-3'>Featured Collections</h3>
                <p className='text-center mb-5'>Shop our best selling collections for a range of styles loved by you</p>
                <di className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card border-none" style={{ border: "none" }}>
                            <img src={collection1} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Lamp Decor</h5>
                                <p className="card-text text-center text-capitalize" style={{ fontSize: "15px" }}>
                                    Nullam molestie auctor volutpat Nullam quis dui varius.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card border-none" style={{ border: "none" }}>
                            <img src={collection2} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Decorative cabinet</h5>
                                <p className="card-text text-center text-capitalize" style={{ fontSize: "15px" }}>
                                    Nullam molestie auctor volutpat Nullam quis dui varius.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card border-none" style={{ border: "none" }}>
                            <img src={collection3} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Plant & Flower</h5>
                                <p className="card-text text-center text-capitalize" style={{ fontSize: "15px" }}>
                                    Nullam molestie auctor volutpat Nullam quis dui varius.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card border-none" style={{ border: "none" }}>
                            <img src={collection4} className="card-img-top rounded-4" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Wooden Chairs</h5>
                                <p className="card-text text-center text-capitalize" style={{ fontSize: "15px" }}>
                                    Nullam molestie auctor volutpat Nullam quis dui varius.
                                </p>
                            </div>
                        </div>
                    </div>
                </di>
            </div>
        </>
    )
}

export default FeatureCollection