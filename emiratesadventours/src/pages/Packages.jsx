import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import PackagesHeader from "../components/PackagesHeader";
import package1 from "../assets/images/package1.jpg";
import package2 from "../assets/images/surfing.jpg";
import package3 from "../assets/images/luxury.jpg";
import package4 from "../assets/images/parachute.jpg";
import { Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
export default function Packages() {
  return (
    <>
      <PackagesHeader className="" id="packagesHeader" />
      <section
        id="packages "
        className="px-5 pt-32 transition-all duration-400 dark:bg-gray-900 "
      >
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
                <div class="item-center flex justify-between gap-1 text-sm md:gap-3">
                  <p class=" flex items-center  font-medium text-gray-500 dark:text-gray-200 md:block">
                    Sightseeing & Chill
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-3 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="  text-blue-400" /> Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Chill and Cheerful Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  Immerse yourself in Dubai's scorching coastal paradise, where
                  the sun-drenched beaches ignite a passion for adventure and
                  relaxation. Feel the golden sands between your toes, as the
                  shimmering waves embrace your senses. Dive into a world of
                  beach bliss, where dreams are made and memories are forever
                  etched in sun-kissed perfection.
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
                <img src={package2} alt="" />
              </div>
              <div class="flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between gap-1 text-sm md:gap-3">
                  <p class=" flex items-center font-medium text-gray-500 dark:text-gray-200 md:block">
                    Fun Activites & Adventures
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-3 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Excursion Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  Dive in exhilarating Dubai excursions and unleash your inner
                  adventurer amidst a playground of thrills and wonders. From
                  heart-stopping desert safaris and campfire parties to diving
                  into an underwater world at Atlantis, every moment is an
                  adrenaline-fueled journey. Experience the epitome of fun and
                  excitement, where Dubai sets the stage for unforgettable
                  escapades.
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
                <img src={package3} alt="" />
              </div>
              <div class="flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between gap-1 text-sm md:gap-3">
                  <p class=" flex items-center font-medium  text-gray-500 dark:text-gray-200 md:block">
                    Luxury & Chill
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-3 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Super Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Luxury Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  Indulge in the pinnacle of opulence on a Dubai luxury tour,
                  where extravagance knows no bounds. Experience a realm of
                  breathtaking architecture, lavish resorts, and world-class
                  cuisine. From private yacht cruises to VIP desert safaris,
                  every moment is an immersive escape into the lap of luxury.
                  Welcome to a world beyond your wildest dreams.
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
                <img src={package4} alt="" />
              </div>
              <div class=" flex w-full flex-col gap-3 space-y-2 bg-white p-2 text-lg dark:bg-gray-800 md:w-2/3">
                <div class="item-center flex justify-between gap-1 text-sm  md:gap-3">
                  <p class=" flex items-center font-medium text-gray-500 dark:text-gray-200 md:block">
                    Luxury & Adventures
                  </p>
                  <div class="flex items-center"></div>
                  <div class=""></div>
                  <div class=" felx-row flex items-center justify-center gap-1 rounded-full bg-gray-200 px-3 py-1   font-medium text-gray-800 ">
                    <IoDiamond className="text-blue-400" /> Super Delux
                  </div>
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-gray-200 md:text-3xl">
                  Luxury Package
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                  Experience the epitome of luxury in Dubai with exhilarating
                  excursions and unforgettable fun activities. Take to the skies
                  with a breathtaking parachute jump, where adrenaline and awe
                  collide. Then, venture into the mesmerizing desert on a
                  safari, where you'll witness the magic of golden dunes and
                  create memories that will last a lifetime. Dubai, where luxury
                  meets adventure.
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
