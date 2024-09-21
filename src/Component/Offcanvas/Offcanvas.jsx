import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
function OffcanvasBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [localSTorageData, setLocalStorageData] = useState([])

    const response = JSON.parse(localStorage.getItem("addToCard"));
    useEffect(() => {
        setLocalStorageData(response)
    }, [])


    return (
        <>
            <Button className='d-lg-none d-xl-none d-xxl-none border-none' style={{ backgroundColor: "transparent", border: "none" }} onClick={handleShow}>
                <i class="fa-solid fa-bars-staggered fs-4"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} width={160} alt="" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="">
                        <div className="py-3 px-3 w-100">
                            <Link to={'/'} className='btn py-3 text-start fw-semibold w-100'>Home</Link>
                        </div>
                        <div className="py-3 px-3 w-100">
                            <Link to={'/contactus'} className='btn py-3 text-start fw-semibold w-100'>Contact us</Link>
                        </div>
                        <div className="py-3 px-3 w-100">
                            <Link to={'/faqs'} className='btn py-3 text-start fw-semibold w-100'>Faqs</Link>
                        </div>
                        <div className="py-3 px-3 w-100">
                            <Link to={'/'} className='btn py-3 text-start fw-semibold w-100'>Categorys</Link>
                        </div>
                        <div className="py-3 px-3 w-100">
                            <Badge badgeContent={localSTorageData && localSTorageData.length} color="primary">
                                <Link to={'/checkout'} className='btn py-3 text-start fw-semibold w-100'>
                                    <i className="fa-solid fa-cart-shopping fs-6"></i>
                                </Link>
                            </Badge>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffcanvasBtn