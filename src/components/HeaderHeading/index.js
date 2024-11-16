import React from 'react'
import { useLocation } from 'react-router-dom';

const HeaderHeading = () => {
  const headerHeadings = [ 
    {
      "id": "1",
      "heading": "Home",
      "sub-heading": "",
      "background": "",
      "path": "/home"
    },
    {
      "id": "2",
      "heading": "About Us",
      "sub-heading": "",
      "background": "",
      "path": "/about"
    },
    {
      "id": "3",
      "heading": "Services",
      "sub-heading": "",
      "background": "",
      "path": "/services"
    },
    {
      "id": "4",
      "heading": "Blogs",
      "sub-heading": "",
      "background": "",
      "path": "/blogs"
    },
    {
      "id": "5",
      "heading": "Pages",
      "sub-heading": "",
      "background": "",
      "path": "/pages"
    },
    {
      "id": "6",
      "heading": "Contact Us",
      "sub-heading": "",
      "background": "",
      "path": "/contact"
    },
    {
      "id": "6",
      "heading": "Error",
      "sub-heading": "",
      "background": "",
      "path": "/error"
    }
  ]

  const location = useLocation();
  const pathName = location.pathname;


  
  return (
    <>
        <div id="header-page" className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                  {headerHeadings.map(
                    (hHeading) =>
                    {
                      if (pathName === hHeading.path) {
                        return (
                          <>
                            <h1 key={hHeading.id} className="display-4 text-white animated zoomIn">
                              {hHeading.heading}
                            </h1>

                            <h5 key={hHeading.id} className='text-white'>
                              {hHeading['sub-heading']}
                            </h5>
                          </>
                          
                        )
                      }else{
                        return false;
                      }
                    }              
                  )}
                    {/* {(pathName===headerHeadings[i].pathName : } */}
                    
                    {/* <a href="" className="h5 text-white">Home</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a href="" className="h5 text-white">About</a> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderHeading;