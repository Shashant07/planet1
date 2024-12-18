import React from 'react'
import { Link } from 'react-router-dom';

import logop1 from "../../assets/web/p1-logo.png";
const Footer = () => {
  return (
    <>
         <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-dark p-4" style={{border: '2px solid cyan'}}>
                        {/* <Link to="index.html" className="navbar-brand">
                            <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Planet1</h1>
                        </Link> */}
                        <Link to={'/'} className="navbar-brand p-0">
                            <h1 className="m-0 underline text-white"> <img src={logop1} alt='logo' width={"50px"} />lanet1</h1>
                        </Link>
                        <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">T-Point, Manish Nagar, Nagpur</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i>
                                <p className="mb-0">planet1@outlook.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">+91 9637744229</p>
                            </div>
                            <div className="d-flex mt-4">
                                <Link className="btn btn-primary btn-square me-2" to="https://api.whatsapp.com/send?phone=9637744229"><i className="fab fa-whatsapp fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square me-2" to="https://www.instagram.com/planet1/"><i className="fab fa-instagram fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square me-2" to=""><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square" to="https://www.facebook.com/planet1"><i className="fab fa-facebook fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                                <Link className="text-light" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link>
                                <Link className="text-light mb-2" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                                <Link className="text-light" to="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: "#061429"}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "75px"}}>
                        <p className="mb-0">&copy; <Link className="text-white border-bottom" to="#"><strong>Planet1</strong></Link>. All Rights Reserved. 
						
						Designed by <strong>Planet1</strong> Team.</p>
                        {/* <br />Distributed By: <Link className="border-bottom" to="https://themewagon.com" target="_blank">ThemeWagon</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;