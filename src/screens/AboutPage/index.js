import React from 'react'
import NavbarComp from '../../components/NavbarComp';
import HeaderHeading from '../../components/HeaderHeading';
import SearchModal from '../../components/SearchModal';
// import TopbarStart from '../../components/TopbarStart';
import AboutUs from '../../components/AboutUS';
import Team from '../../components/Team';
import OurProcess from '../../components/OurProcess';
import Vendors from '../../components/Vendors';
import Footer from '../../components/Footer';

const AboutPage = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        {/* <TopbarStart /> */}
        <NavbarComp />
        <HeaderHeading />
        </div>
        <SearchModal />
      <AboutUs />
      <Team />
      <OurProcess />
      {/* <Testimonial /> */}

      {/* <Vendors /> */}
      <Footer />
    </>
    
  )
}

export default AboutPage;