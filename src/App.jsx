import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Vision from "./Components/Vision";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <Services />
            <Vision />
            <Contact />
            <Footer />
        </React.Fragment>
    );
};