import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Service from "../parts/HomePage/Service";
import Tours from "../parts/HomePage/Tours";
import Review from "../parts/HomePage/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Staff from "../components/Staff";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Review />
      <Staff />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
