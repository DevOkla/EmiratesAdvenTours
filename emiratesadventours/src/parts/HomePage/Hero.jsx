import React from "react";
import { Link } from "react-router-dom";

// import images
import HeroImg from "../../assets/images/hero-img.jpg";

export default function Hero() {
  return (
    <section className="hero pb-16 transition-all duration-400 dark:bg-gray-900">
      <div className="hero__wrapper relative flex h-[90vh] items-center bg-blue-100 brightness-110">
        {/* hero img */}
        <img
          src={HeroImg}
          alt="hero img"
          className="hero__img absolute left-0 top-0 h-full w-full object-cover object-[60%]"
        />

        {/* hero overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-gray-900/30" />

        <div className="hero__container container relative">
          {/* hero data */}
          <div className="hero__data flex items-center justify-center xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl">
            <h1 className="hero__title section-title items-center justify-center text-Gold xs:text-[42px] sm:text-[48px] 2xl:text-[64px]">
              Travel To Explore <br />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
