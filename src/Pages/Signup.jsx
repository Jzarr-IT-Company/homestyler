import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import BackBttn from '../Component/BackBttn/BackBttn'
function Signup() {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom py-5 px-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
          <BackBttn/>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="images/signupimage.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div id="signupitem" className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form action="signup.php" method="post">
                <div
                  id="loginicon"
                  className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                >
                  <h2 id="register" className="lead fw-normal mb-0 text-center">
                    Register Account
                  </h2>
                </div>
                {/* Name input */}
                <div data-mdb-input-init="" className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control form-control-lg"
                    pattern="[a-zA-Z]{2,}"
                    placeholder="Enter your name"
                    required=""
                    name="name"
                  />
                </div>
                {/* Email input */}
                <div data-mdb-input-init="" className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    placeholder="Enter a valid email address"
                    required=""
                    name="email"
                  />
                </div>
                {/* Password input */}
                <div data-mdb-input-init="" className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    pattern="^([A-Za-z\d@$!%*?&]{8,}$)"
                    placeholder="Enter password"
                    required=""
                    name="password"
                  />
                </div>
                {/* Confirm Password input */}
                <div data-mdb-input-init="" className="form-outline mb-2">
                  <label className="form-label" htmlFor="form3Example5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="form3Example5"
                    className="form-control form-control-lg"
                    pattern="^([A-Za-z\d@$!%*?&]{8,}$)"
                    placeholder="Confirm password"
                    required=""
                    name="confirm_password"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className=" me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                      name="terms"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    id="signupbtn"
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Sign up
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to={'/login'} className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Signup