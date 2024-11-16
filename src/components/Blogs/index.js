import React from 'react'
import { Link } from 'react-router-dom';

import b1 from '../../assets/web/blog-1.jpg';
import b2 from '../../assets/web/blog-2.jpg';
import b3 from '../../assets/web/blog-3.jpg';
const Blogs = () => {
    // const blogs = [
    //     {
    //         "id": "1",
    //         "label": "Web Design",
    //         "img": "",
    //         "name": "",
    //         "date": "",
    //         "heading": "",
    //         "text": ""
    //     },
    //     {
    //         "id": "2",
    //         "label": "",
    //         "img": "",
    //         "name": "",
    //         "date": "",
    //         "heading": "",
    //         "text": ""
    //     },
    //     {
    //         "id": "3",
    //         "label": "",
    //         "img": "",
    //         "name": "",
    //         "date": "",
    //         "heading": "",
    //         "text": ""
    //     }
    // ]
  return (
    <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{background: "aliceblue"}}>
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src={b1} alt="blog1" />
                            <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <Link className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src={b2} alt="blog2" />
                            <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <Link className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid" src={b3} alt="" />
                            <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                        </div>
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 className="mb-3">How to build a website</h4>
                            <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                            <Link className="text-uppercase" to="">Read More <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs;