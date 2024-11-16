import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import logop1 from "../../assets/web/p1-logo.png";

import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

import "./style.css";

const NavbarComp = () => {

    const location = useLocation();
    const pathName = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const [scrolling, setScrolling] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrolling(position);
    }

    const handleSearch = () => {
        alert("Search functionality is under developemnt, we will update this soon!")
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);


    return (
        <>
            <nav className={scrolling ? "navbar navbar-expand-sm navbar-dark px-5 py-0 py-lg-0 sticky-top shadow-sm" : "navbar navbar-expand-lg navbar-dark px-5 py-0 py-lg-0"}>
                <span className="p-0" onClick={()=>setIsMenuOpen(true)}>
                    <h1 className="m-0"><i className="fa fa-bars sidebar-bars" style={{ padding: "0 10px 0 0 ", color: scrolling ? "#000" : "#fff" }}></i> </h1>
                </span>
                <Link to={'/'} className="navbar-brand p-0">
                    <h1 className="m-0 underline"> <img src={logop1} alt='logo' width={"50px"} />lanet1</h1>
                </Link>

                <div className="navbar-nav ms-auto py-0" style={{ flexDirection: "row" }}>
                    <Link to={'/search'} type="button" className="nav-item nav-link btn" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleSearch}>
                        <i className="fa fa-search"></i>
                    </Link>
                    <Link to={'/'} className="nav-item nav-link"><i className="fa fa-user-tie" style={{ fontSize: "xx-large" }} ></i></Link>
                </div>
            </nav>

            <ReactSlidingPane isOpen={isMenuOpen} onRequestClose={()=>setIsMenuOpen(false)} hideHeader from='left' width='20rem'>
                
            <div className='sidebar-div'>
                <div className='sidebar-header'>
                    <Link to={'/'} onClick={()=>setIsMenuOpen(false)} className="navbar-brand p-0 sidebar-logo">
                        <h1 className="m-0"> <img src={logop1} alt='logo' width={"50px"} />lanet1</h1>
                    </Link>
                    <div onClick={()=>setIsMenuOpen(false)} className='sidebar-close'>
                        {/* <CloseIcon className='w-[100%] h-[100%] object-contain text-[#072556]' /> */}
                        <i className='fa fa-window-close sidebar-close-icon'></i>
                    </div>
                </div>
                <Link to={"/"} onClick={()=>setIsMenuOpen(false)} className={`${(pathName==='/') ? "sidebar-link-select" : "sidebar-link"} `}>
                <i className='fa fa-window-close sidebar-link-icon'></i> Home
                </Link>
                <Link to={"/about"} onClick={()=>setIsMenuOpen(false)} className={`${pathName.includes("/about") ? "sidebar-link-select" : "sidebar-link"} `}>
                   <i className='fa fa-window-close sidebar-link-icon'></i>  About
                </Link>
                <Link to={"/services"} onClick={()=>setIsMenuOpen(false)} className={`${pathName.includes("/services") ? "sidebar-link-select" : "sidebar-link"} `}>
                   <i className='fa fa-window-close sidebar-link-icon'></i>  Services
                </Link>
                <Link to={"/blogs"} onClick={()=>setIsMenuOpen(false)} className={`${pathName.includes("/blogs") ? "sidebar-link-select" : "sidebar-link"} `}>
                   <i className='fa fa-window-close sidebar-link-icon'></i>  Blogs
                </Link>
                <Link to={"/pages"} onClick={()=>setIsMenuOpen(false)} className={`${pathName.includes("/pages") ? "sidebar-link-select" : "sidebar-link"} `}>
                   <i className='fa fa-window-close sidebar-link-icon'></i>  Pages
                </Link>
                <Link to={"/contact"} onClick={()=>setIsMenuOpen(false)} className={`${pathName.includes("/contact") ? "sidebar-link-select" : "sidebar-link"} `}>
                   <i className='fa fa-window-close sidebar-link-icon'></i>  Contact
                </Link>
            </div>
        </ReactSlidingPane>

        </>
    )
}

export default NavbarComp;