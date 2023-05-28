import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

// import icons
import { RiArrowRightLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

// import images
import contact from "../assets/images/contact.jpg";

export default function Contact() {
  return (
    <section className="callback pt-24 transition-all duration-400 dark:bg-gray-900">
      <div className="callback__wrapper relative flex h-[640px] flex-col items-center justify-center gap-10">
        <img
          src={contact}
          alt="callback img"
          className="callback__img absolute left-0 top-0 h-full w-full object-cover object-center brightness-110"
        />
        {/* overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-blue-300/10" />
        <div className="callback__container container">
          <div className="callback__data relative text-center xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <p className="callback__subtitle section-subtitle text-white">
              Let's talk
            </p>
            <h1 className="callback__title section-title text-white">
              Contact us if you're ready
            </h1>

            <Link to="/contact" className="callback__button button inline-flex">
              Contact us
              <RiArrowRightLine className="text-[1.3rem] text-white" />
            </Link>
          </div>
        </div>{" "}
        <div class="mx-auto max-w-xs -translate-y-20 transform rounded-md bg-white px-10 py-8 text-center shadow-lg sm:-translate-y-24">
          <h2 class="mb-6 text-2xl font-semibold">Start chatting</h2>
          <img
            class="mx-auto mt-4 h-20 w-20 rounded-full object-cover shadow-lg"
            src={logo}
            alt="User avatar"
          />

          <button class="my-5  flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 px-8 pb-4 pt-3 text-xl text-white">
            Send a message <BsWhatsapp />
          </button>
        </div>
      </div>
    </section>
  );
}
