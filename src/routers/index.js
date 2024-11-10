import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Error from "../screens/Error";
import About from "../screens/About";
import Services from "../screens/Contact/Services";
import Blogs from "../components/Blogs";
import Contact from "../screens/Contact";


const Routers = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/about" element={<About />} errorElement={<Error />} />
            <Route path="/services" element={<Services />} errorElement={<Error />} />
            <Route path="/blogs" element={<Blogs />} errorElement={<Error />} />
            <Route path="/contact" element={<Contact />} errorElement={<Error />} />
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/error" element={<Error />} />

        </Routes>
    </>
  )
}

export default Routers;
