import React, {useState} from 'react'

import carouselImg1 from "../../assets/web/carousel-1.jpg";
// import carouselImg2 from "../../assets/web/carousel-2.jpg";
import { Link } from 'react-router-dom';

const HeaderCarousel = () => {
    const carousels = [
        {
            "id": "0",
            "bg-img": "carousel-1.jpg",
            "h5Heading": "Your Business, Our Design, Everyone’s Orbit",
            "h1Heading": "Welcome to Planet1",
            "btn1": "",
            "btn2": "Contact us",
            "btn1-link": "",
            "btn2-link": "/contact"
        },
        {
            "id": "1",
            "bg-img": "carousel-2.jpg",
            "h5Heading": "Stand Out with Our Expertise",
            "h1Heading": "Core Offerings",
            "btn1": "Btn1-2",
            "btn2": "Btn2-2",
            "btn1-link": "/home",
            "btn2-link": "/pages"
        }
    ]
    const [activeCarousel, setActiveCarousel] = useState(0);

    const nextCarousel = () => {
        if(activeCarousel < carousels.length-1 ){
            setActiveCarousel(activeCarousel+1);
        }else{
            setActiveCarousel(0)
        }
    }

    const previousCarousel = () => {
        if(activeCarousel > 0){
            setActiveCarousel(activeCarousel-1);
        }else{
            setActiveCarousel(carousels.length-1)
        }
    }

    return (
        <>
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {carousels.map(
                        (carousel)=>
                            <div className={(Number(carousel.id) === Number(activeCarousel)) ? 'carousel-item active' : 'carousel-item'} key={carousel.id}>
                                <img className="w-100" src={carouselImg1} alt="carousel1" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: '900px' }}>
                                        <h5 className="text-white mb-3 animated slideInDown">{carousel.h5Heading}</h5>
                                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">{carousel.h1Heading}</h1>
                                        {carousel.btn1 ? <Link to={carousel['btn1-link']} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">{carousel.btn1}</Link> : "" }
                                        {carousel.btn2 ? <Link to={carousel['btn2-link']}  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">{carousel.btn2}</Link> : ""}
                                    </div>
                                </div>
                            </div>
                    )}
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev" onClick={previousCarousel}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next" onClick={nextCarousel}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default HeaderCarousel;