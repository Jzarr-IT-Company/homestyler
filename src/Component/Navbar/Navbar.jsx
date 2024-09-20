import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import OffcanvasBtn from '../Offcanvas/Offcanvas';
import logo from '../../assets/logo.png'
import { Badge } from '@mui/material';

function Navbar() {
    const [activeLink, setActiveLink] = useState("Home");
    const [localSTorageData, setLocalStorageData] = useState([])
    const handleActiveLink = (linkName) => {
        setActiveLink(linkName);
    };

    const response = JSON.parse(localStorage.getItem("addToCard"));
    useEffect(() => {
        setLocalStorageData(response)
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg px-5" style={{ backgroundColor: "#152934" }}>
                <div className="container-fluid">
                    <Link className='navbar-brand'>
                        <img className=" img-fluid" src={logo} width={120} alt="" />
                    </Link>
                    <OffcanvasBtn />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0" style={{ gap: "0px 20px" }}>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white fw-semibold ${activeLink === "Home" ? "active" : ""}`}
                                    aria-current="page"
                                    onClick={() => handleActiveLink("Home")}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white fw-semibold ${activeLink === "Categorys" ? "active" : ""}`}
                                    onClick={() => handleActiveLink("Categorys")}
                                    to="/categories"
                                >
                                    Faqs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white fw-semibold ${activeLink === "contactus" ? "active" : ""}`}
                                    onClick={() => handleActiveLink("contactus")}
                                    to="/contactus"
                                >
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" style={{ gap: "0px 20px" }}>
                            <div className="">
                                <Badge badgeContent={localSTorageData && localSTorageData.length} color="primary">
                                    <Link className='text-white' to={'/checkout'}>
                                        <i className="fa-solid fa-cart-shopping fs-6"></i>
                                    </Link>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
