import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import PackagesHeader from "../components/PackagesHeader";
import package1 from "../assets/images/package1.jpg";
import { Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
export default function Packages() {
  return (
    <>
      <PackagesHeader className="" id="packagesHeader" />
      <section id="packages " className="px-5 pt-32 dark:bg-gray-900 ">
        <h1 className=" py-10 text-5xl font-bold dark:text-gray-200">
          Our Packages
        </h1>
        <div className="packages_container mx-auto flex w-full flex-col gap-10 px-0 md:px-5 2xl:grid 2xl:grid-cols-2 ">
          <div class="card  flex flex-row flex-wrap justify-center  py-2">
            <div class="relative flex flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg dark:border-gray-300 dark:bg-gray-800 md:max-w-3xl     md:flex-row    md:space-x-5 md:space-y-0">
              <div class=" w-full place-items-center  bg-white  object-center dark:bg-gray-800 md:w-1/3 md:object-fill">
                <img src={package1} alt="" />
              </div>
              <div class="flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between">
                  <p class="hidden font-medium text-gray-500 dark:text-gray-200 md:block">
                    Chill
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-2 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Super Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Chill and Cheerful Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  "Immerse yourself in Dubai's scorching coastal paradise, where
                  the sun-drenched beaches ignite a passion for adventure and
                  relaxation. Feel the golden sands between your toes, as the
                  shimmering waves embrace your senses. Dive into a world of
                  beach bliss, where dreams are made and memories are forever
                  etched in sun-kissed perfection."{" "}
                </p>
                <div className="flex flex-row items-end justify-between">
                  <p className="text-xl font-black text-gray-800">
                    <span class="text-base font-normal text-gray-600 dark:text-gray-200">
                      10 nights
                    </span>
                  </p>
                  <div>
                    <Link
                      to="../../pages/chill"
                      className="rounded bg-blue-500  px-4 py-2 font-bold text-white hover:bg-blue-700 "
                    >
                      itinerary & Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card  flex flex-row flex-wrap justify-center  py-2">
            <div class="relative flex flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg dark:border-gray-300 dark:bg-gray-800 md:max-w-3xl     md:flex-row    md:space-x-5 md:space-y-0">
              <div class=" w-full place-items-center  bg-white  object-center dark:bg-gray-800 md:w-1/3 md:object-fill">
                <img src={package1} alt="" />
              </div>
              <div class="flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between">
                  <p class="hidden font-medium text-gray-500 dark:text-gray-200 md:block">
                    Chill
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-2 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Super Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Chill and Cheerful Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  "Immerse yourself in Dubai's scorching coastal paradise, where
                  the sun-drenched beaches ignite a passion for adventure and
                  relaxation. Feel the golden sands between your toes, as the
                  shimmering waves embrace your senses. Dive into a world of
                  beach bliss, where dreams are made and memories are forever
                  etched in sun-kissed perfection."{" "}
                </p>
                <div className="flex flex-row items-end justify-between">
                  <p className="text-xl font-black text-gray-800">
                    <span class="text-base font-normal text-gray-600 dark:text-gray-200">
                      10 nights
                    </span>
                  </p>
                  <div>
                    <Link
                      to="../../pages/chill"
                      className="rounded bg-blue-500  px-4 py-2 font-bold text-white hover:bg-blue-700 "
                    >
                      itinerary & Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card  flex flex-row flex-wrap justify-center  py-2">
            <div class="relative flex flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg dark:border-gray-300 dark:bg-gray-800 md:max-w-3xl     md:flex-row    md:space-x-5 md:space-y-0">
              <div class=" w-full place-items-center  bg-white  object-center dark:bg-gray-800 md:w-1/3 md:object-fill">
                <img src={package1} alt="" />
              </div>
              <div class="flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between">
                  <p class="hidden font-medium text-gray-500 dark:text-gray-200 md:block">
                    Chill
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-2 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Super Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Chill and Cheerful Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  "Immerse yourself in Dubai's scorching coastal paradise, where
                  the sun-drenched beaches ignite a passion for adventure and
                  relaxation. Feel the golden sands between your toes, as the
                  shimmering waves embrace your senses. Dive into a world of
                  beach bliss, where dreams are made and memories are forever
                  etched in sun-kissed perfection."{" "}
                </p>
                <div className="flex flex-row items-end justify-between">
                  <p className="text-xl font-black text-gray-800">
                    <span class="text-base font-normal text-gray-600 dark:text-gray-200">
                      10 nights
                    </span>
                  </p>
                  <div>
                    <Link
                      to="../../pages/chill"
                      className="rounded bg-blue-500  px-4 py-2 font-bold text-white hover:bg-blue-700 "
                    >
                      itinerary & Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="Back flex items-center justify-center py-16">
          <Link to="/" className="hero__button button  ">
            Back to Home
          </Link>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
}
