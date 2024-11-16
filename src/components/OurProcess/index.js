import React from 'react';

import OurProcessImg from "../../assets/web/OurProcessImg.jpg";

const Features = () => {
  return (
    <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Approach</h5>
                {/* <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1> */}
                We follow a proven process that ensures every project is delivered on time, on budget, and exceeds expectations.
                {/* Here’s how we turn your vision into reality: */}
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Discovery: </h4>
                            <p className="mb-0">We start by getting to know your business, your goals, and your audience. This phase is all about gathering insights that will guide the entire project.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4>Design</h4>
                            <p className="mb-0">Next, we create a design that reflects your brand and resonates with your audience. We focus on aesthetics, usability, and functionality to ensure your website looks great and performs even better.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={OurProcessImg} style={{objectFit: "cover"}} alt='features'/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Development</h4>
                            <p className="mb-0">Once the design is approved, our developers get to work building a robust, scalable website that meets your needs. We use the latest technologies to ensure your site is fast, secure, and easy to manage.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>Launch</h4>
                            <p className="mb-0">After rigorous testing, we launch your website and ensure everything is working perfectly. But our job doesn’t end there – we provide ongoing support to keep your site running smoothly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features;