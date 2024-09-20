import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import BackBttn from '../Component/BackBttn/BackBttn'
function Login() {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid py-5 px-5 h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
           <BackBttn/>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="images/loginimage.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div id="loginitem" className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form action="login.php" method="post">
                <div
                  id="loginicon"
                  className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                >
                  <h2 id="loginh2" className="lead fw-normal mb-0 text-center">
                    Login
                  </h2>
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
                    pattern="^[a-zA-Z0-9._%+-]{3,}+@[a-zA-Z]{5}+\.[a-zA-Z]{3}$"
                    placeholder="Enter a valid email address"
                    required=""
                    name="email"
                  />
                  <div id="error-email" className="text-danger" />
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
                  <div id="error-password" className="text-danger" />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    id="loginbtn"
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link className='link-danger' to={'/signup'}>Sign up</Link>
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

export default Login