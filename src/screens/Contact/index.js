import React from 'react'
import NavbarComp from '../../components/NavbarComp';
import HeaderHeading from '../../components/HeaderHeading';
// import HeaderCarousel from '../../components/HeaderCarousel';
// import FactNumbers from '../../components/FactNumbers';
import SearchModal from '../../components/SearchModal';
// import TopbarStart from '../../components/TopbarStart';
// import AboutUs from '../../components/AboutUS';
// import Features from '../../components/Features/Features';
// import PricingPlan from '../../components/PricingPlan';
// import Team from '../../components/Team';
// import Testimonial from '../../components/Testimonial';
// import Blogs from '../../components/Blogs';
// import Vendors from '../../components/Vendors';
import Footer from '../../components/Footer';
import ContactPage from '../../components/ContactPage';

const Contact = () => {
  return (
    <div className="container-fluid position-relative p-0">
      {/* <TopbarStart /> */}
      <NavbarComp />
      <HeaderHeading />
      {/* <HeaderCarousel /> */}
      {/* <FactNumbers /> */}
      <SearchModal />
      {/* <AboutUs />
      <Features />
      <PricingPlan />
      <Blogs />
      <Team />
      <Testimonial />

      <Vendors /> */}
      <ContactPage />
      <Footer />
    </div>
  )
}

export default Contact;