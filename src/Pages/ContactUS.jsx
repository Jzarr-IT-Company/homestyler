import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'

function ContactUS() {
  return (
    <>
    <Navbar/>
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <h4 className="fw-bolder">SEND US EMAIL</h4>
              <hr />
              <form id="contactForm">
                <div className="mb-3">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control py-2"
                    style={{ boxShadow: "none", outline: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control py-2"
                    style={{ boxShadow: "none", outline: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control py-2"
                    style={{ boxShadow: "none", outline: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    style={{ boxShadow: "none", outline: "none" }}
                    cols={10}
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="">
                  <button type="submit" className="button">
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-12">
              <h4 className="fw-bolder">Contact</h4>
              <hr />
              <div className="">
                <p className="fw-semibold">Mobile: 03080122278</p>
                <p className="fw-semibold">Email: info@royalwrist.pk</p>
                <p className="fw-semibold">
                  Address: Office 4B- 4th Floor, Building 38-C, Lane 8, Main
                  Khayaban-e-Muslim, D.H.A Phase 6, karachi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ContactUS