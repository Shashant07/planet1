import React from 'react';
// import './style.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import aboutImg from '../../assets/web/about.jpg';
import { Link, useLocation } from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation()
    const pathName = (location.pathname === '/about');
    // const pathName = location.pathname;
    console.log(location, pathName)
    return (
        <>
            {/* <ScrollAnimation animateIn="fadeIn"> */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">Who We Are</h5>
                                <h1 className="mb-0">The Best IT Solution for your Business :)</h1>
                            </div>
                            <p className="mb-4">Founded in 2024, <strong>Planet1</strong> began with a simple mission: to empower businesses of all sizes by creating impactful online experiences. Over the years, we've grown from a small team of passionate web developers into a full-service digital agency that helps businesses thrive in the digital world.</p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-12 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-0"><i className="fa fa-check text-primary me-3"></i>Innovation: </h5><span>We stay ahead of the curve by embracing the latest technologies and creative solutions.</span>
                                    <h5 className="mb-0"><br/><i className="fa fa-check text-primary me-3"></i>Integrity: </h5><span>We build trust through transparency, honesty, and a commitment to our clients' success.</span>
                                    <h5 className="mb-0"><br/><i className="fa fa-check text-primary me-3"></i>Excellence: </h5><span>We strive for excellence in everything we do, from the initial consultation to the final product.</span>
                                </div>
                                {/* <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                </div> */}
                            </div>
                            {/* <> */}
                            {/* </> */}
                                <div className="row g-0 mb-3">
                                    <div className="col-sm-12 wow zoomIn" data-wow-delay="0.2s">
                                        <i className="fa fa-star text-primary me-3"></i>
                                        <span>Our mission is to deliver high-quality, customized web solutions that drive growth and success for our clients. We believe in the power of the internet to transform businesses, and we're committed to helping our clients harness that power to achieve their goals.</span>
                                    </div>
                                </div>
                            
                            
                            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+91 9637744229</h4>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Know more about us..</Link>
                            
                        </div>
                        <div className="col-lg-5" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" alt='about us' data-wow-delay="0.9s" src={aboutImg} style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </ScrollAnimation> */}
            
        </>
    )
}

export default AboutUs;
