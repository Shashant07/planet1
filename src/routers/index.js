import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import AboutPage from "../screens/AboutPage";
import ServicesPage from "../screens/ServicesPage";
import BlogsPage from "../screens/BlogsPage";
import ContactPage from "../screens/Contact";
import Error from "../screens/Error";
import Pages from "../screens/Pages";


const Routers = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/about" element={<AboutPage />} errorElement={<Error />} />
            <Route path="/services" element={<ServicesPage />} errorElement={<Error />} />
            <Route path="/blogs" element={<BlogsPage />} errorElement={<Error />} />
            <Route path="/pages" element={<Pages />} errorElement={<Error />} />
            <Route path="/contact" element={<ContactPage />} errorElement={<Error />} />
            <Route path="/error" element={<Error />} />

        </Routes>
    </>
  )
}

export default Routers;
