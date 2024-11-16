import React from 'react'
import { Link } from 'react-router-dom';
import p1 from '../../assets/web/team-1.jpg'
import p2 from '../../assets/web/team-2.jpg'
import p3 from '../../assets/web/team-3.jpg'
const Team = () => {
    const teamMembers = [
        {
            "id": "1",
            "name": "Prashant Pandit",
            "desig": "Business Operation Analyst",
            "facebook": "https://www.facebook.com/",
            "insta": "",
            "linkedin": ""
        },
        {
            "id": "2",
            "name": "Shashant Pandit",
            "desig": "Developer",
            "facebook": "https://www.facebook.com/shashant.pandit",
            "insta": "https://www.instagram.com/shashant07",
            "linkedin": ""
        }

    ]
  return (
    <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Meet the Team</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                Our team is made up of talented professionals who are passionate about web development, design, and digital marketing. We bring a diverse set of skills and experiences to the table, allowing us to tackle any challenge with creativity and expertise.
            </div>
            <div className="row g-5">

                <div className="col-lg-2 wow slideInUp" data-wow-delay="0.3s">
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={p1} alt="" />
                            <div className="team-social">
                                {/* <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-twitter fw-normal"></i></Link> */}
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-facebook-f fw-normal" to={teamMembers[0].facebook}></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-instagram fw-normal" to={teamMembers[0].insta}></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-linkedin-in fw-normal" to={teamMembers[0].linkedin}></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">{teamMembers[0].name}</h4>
                            <p className="text-uppercase m-0">{teamMembers[0].desig}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={p3} alt="" />
                            <div className="team-social">
                                {/* <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-twitter fw-normal" to={teamMembers[0].facebook}></i></Link> */}
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-facebook-f fw-normal" to={teamMembers[0].facebook}></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-instagram fw-normal" to={teamMembers[0].insta}></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-linkedin-in fw-normal" to={teamMembers[0].linkedin}></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">{teamMembers[1].name}</h4>
                            <p className="text-uppercase m-0">{teamMembers[1].desig}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 wow slideInUp" data-wow-delay="0.3s">
                </div>
                {/* <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={p3} alt="" />
                            <div className="team-social">
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-instagram fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-linkedin-in fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Team;
