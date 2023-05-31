import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import AboutImg from "../../assets/images/about-img.png";

export default function About() {
  return (
    <section
      id="about"
      className="about section   transition-all duration-400 dark:bg-gray-900"
    >
      <div className="about__container container grid gap-12  xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl">
        <div className="about__data">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title  section-title">
            Explore the UAE with us
          </h1>
          <p className="about__text section-text pb-8 2xl:max-w-md">
            Discover the enchantment of Dubai & the UAE with our exclusive
            tours. Immerse yourself in stunning architecture, bustling souks,
            and exhilarating desert safaris. Let our expert guides unveil the
            city's hidden gems and create unforgettable memories. Book your
            adventure now!
          </p>
          <Link
            to="/pages/packages"
            className="about__button button inline-flex"
          >
            Get Started
            <RiArrowRightLine className="text-[1.3rem]" />
          </Link>
        </div>

        <img src={AboutImg} alt="about img" className="about__img" />
      </div>
    </section>
  );
}
