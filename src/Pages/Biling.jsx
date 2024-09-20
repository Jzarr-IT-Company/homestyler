import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'

function Biling() {
    const [buyProductsData, setBuyProductData] = useState([]);
    const [addtocard, setAddToCard] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        city: '',
        phone: '',
        altPhone: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem('buy'));
        const adtocard = JSON.parse(localStorage.getItem('addToCard'));
        setBuyProductData(response);
        setAddToCard(adtocard)
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.country) {
            newErrors.country = 'Country is required';
        }
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        if (!formData.city) {
            newErrors.city = 'City is required';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        if (validateForm()) {
            // Place order logic here
            alert('Order placed successfully!');
            localStorage.removeItem("buy")
        } else {
            alert('Please fill out all required fields.');
        }
    };
    return (
        <>
            <Navbar />
            <section>
                <div className="container my-5 py-5">
                    <div className="row">
                        {/* <div className="col-lg-7 col-md-6 col-sm-12">
                            <h3>BILLING &amp; SHIPPING</h3>
                            <div className="">
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control py-3 fs-6 fw-semibold"
                                        placeholder="Email address"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="First name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Last name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <p className="fw-semibold fs-5">
                                    Country / Region <span className="text-danger">*</span>
                                </p>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="country"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Country"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="address"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="House number and street name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="city"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Town/City"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="phone"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            id="altPhone"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Alternative Phone"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-12">
                                    <p className="fw-semibold fs-5">
                                        ADDITIONAL INFORMATION{" "}
                                        <span className="fw-bold" style={{ fontSize: 15 }}>
                                            (Optional)
                                        </span>
                                    </p>
                                    <div className="mb-3">
                                        <textarea
                                            id="notes"
                                            className="form-control fs-6 fw-semibold"
                                            cols={10}
                                            rows={5}
                                            placeholder="Notes about your order, e.g. Special notes for delivery"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h3>BILLING &amp; SHIPPING</h3>
                            <div>
                                <div className="">
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control py-3 fs-6 fw-semibold"
                                            placeholder="Email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="text-danger">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="First name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="Last name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="fw-semibold fs-5">
                                        Country / Region <span className="text-danger">*</span>
                                    </p>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="country"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="Country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                            {errors.country && <p className="text-danger">{errors.country}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="House number and street name"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                            {errors.address && <p className="text-danger">{errors.address}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="Town/City"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                            {errors.city && <p className="text-danger">{errors.city}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="phone"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                id="altPhone"
                                                className="form-control py-3 fs-6 fw-semibold"
                                                placeholder="Alternative Phone"
                                                value={formData.altPhone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        <p className="fw-semibold fs-5">
                                            ADDITIONAL INFORMATION{" "}
                                            <span className="fw-bold" style={{ fontSize: 15 }}>
                                                (Optional)
                                            </span>
                                        </p>
                                        <div className="mb-3">
                                            <textarea
                                                id="notes"
                                                className="form-control fs-6 fw-semibold"
                                                cols={10}
                                                rows={5}
                                                placeholder="Notes about your order, e.g. Special notes for delivery"
                                                value={formData.notes}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 border py-4 px-3">
                            <p className="fw-bold mt-4 mb-3 fs-4">YOUR ORDER</p>
                            <div className="order-summary">
                                <div className="" style={{ height: 380, overflow: "auto" }}>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="fw-semibold">PRODUCT</p>
                                        <p className="fw-semibold">SubTotal</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom mt-2"> 
                                        <p
                                            className="text-secondary fw-semibold"
                                            id="title"
                                            style={{ fontSize: 14 }}
                                        >
                                            {buyProductsData? buyProductsData.title:''}
                                        </p>
                                        <p className="fw-semibold" id="price" >${buyProductsData.price}</p>
                                    </div>
                                </div>
                                <div className="d-flex pt-2 justify-content-between border-bottom border-top">
                                    <p className="fw-semibold">Total Amount:</p>
                                    <p className="fw-semibold" id="totalPrice" >${buyProductsData.price}</p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="bank"
                                            defaultValue="bank"
                                        />
                                        <label
                                            htmlFor="bank"
                                            className="fw-bold"
                                            style={{ fontSize: "13.3px" }}
                                        >
                                            Bank Transfer
                                        </label>
                                    </div>
                                    <img src="../images/bank-2.png" width={60} alt="" />
                                </div>
                                <div className="details" id="bank-details">
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Bank Al Habib
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Account Title : Shaheen Skyline Trading Company
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Account # : 1118 0981 0056 4401 5
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        IBAN: PK64BAHL1118098100564401
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Please Share payment receipt on whatsapp
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Number: 0308-0122278
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <input type="radio" name="payment" id="cod" defaultValue="cod" />
                                        <label
                                            htmlFor="cod"
                                            className="fw-bold"
                                            style={{ fontSize: "13.3px" }}
                                        >
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <img src="../images/cod.png" width={60} alt="" />
                                </div>
                                <div className="details" id="cod-details">
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Full Cash on Delivery (COD) is applicable for orders below 25000/-
                                        PKR.
                                    </p>
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        10% advance mandatory for order above 25000 PKR.
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="card"
                                            defaultValue="card"
                                        />
                                        <label
                                            htmlFor="card"
                                            className="fw-bold"
                                            style={{ fontSize: "13.3px" }}
                                        >
                                            Credit/Debit Card
                                        </label>
                                    </div>
                                    <img src="../images/visa-mastercard-logo.jpg" width={60} alt="" />
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div>
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="switch"
                                            defaultValue="switch"
                                        />
                                        <label
                                            htmlFor="switch"
                                            className="fw-bold"
                                            style={{ fontSize: "13.3px" }}
                                        >
                                            Switch (Cards, Accounts, Wallets)
                                        </label>
                                    </div>
                                    <img src="../images/pay-icons.jpg" width={160} alt="" />
                                </div>
                                <div className="details" id="switch-details">
                                    <p className="fw-bold" style={{ fontSize: "13.3px" }}>
                                        Pay via Debit/Credit Cards, Easypaisa, Jazzcash, Bank Accounts,
                                        Wallets and 1Bill.
                                    </p>
                                </div>
                            </div>
                            <div className="w-100 mt-5">
                                <button className="button w-100" type="submit" onClick={handleSubmit}>
                                    PLACE ORDER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Biling