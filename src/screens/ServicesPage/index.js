import React from 'react';
import Services from '../../components/Services';
import NavbarComp from '../../components/NavbarComp';
import HeaderHeading from '../../components/HeaderHeading';
import Footer from '../../components/Footer';

const ServicesPage = () => {
  return (
    <>
        <div className="container-fluid position-relative p-0">
          {/* <TopbarStart /> */}
          <NavbarComp />
          <HeaderHeading />
        </div>
        <Services />
        <Footer />
    </>
  )
}

export default ServicesPage;