import React from 'react'

const ContactPage = () => {
    const handleContactForm = () => {
        alert("Sorry for inconvenience, This form submition feature under development, unable to send your message! Please try to connect on email or mobile :)")
    }
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                    <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                </div>
                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+91 9637744229</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Email to get free quote</h5>
                                <h4 className="text-primary mb-0">planet1@outlook.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Visit our office</h5>
                                <h4 className="text-primary mb-0">T-point, Manish Nagar, Nagpur</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: "55px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={handleContactForm}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                        <iframe className="position-relative rounded w-100 h-100" title='location'
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=T-point%20manish%20nagar%20nagpur&zoom=11&maptype=roadmap"
                            frameborder="0" style={{minHeight: "350px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;