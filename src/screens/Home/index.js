import React from 'react'
import NavbarComp from '../../components/NavbarComp';
import HeaderCarousel from '../../components/HeaderCarousel';
import FactNumbers from '../../components/FactNumbers';
import SearchModal from '../../components/SearchModal';
// import TopbarStart from '../../components/TopbarStart';
import AboutUs from '../../components/AboutUS';
import Features from '../../components/Features/Features';
import PricingPlan from '../../components/PricingPlan';
import Team from '../../components/Team';
import Testimonial from '../../components/Testimonial';
import Blogs from '../../components/Blogs';
import Vendors from '../../components/Vendors';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="container-fluid position-relative p-0">
      {/* <TopbarStart /> */}
      <NavbarComp />
      <HeaderCarousel />
      <FactNumbers />
      <SearchModal />
      <AboutUs />
      <Features />
      <PricingPlan />
      <Blogs />
      <Team />
      <Testimonial />

      <Vendors />
      <Footer />
    </div>
  )
}

export default Home;