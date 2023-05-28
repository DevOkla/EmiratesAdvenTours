import React from "react";
import { Link } from "react-router-dom";

// import images
import ReviewImg from "../assets/images/review-img.png";

export default function Staff() {
  return (
    <section className="staff section flex flex-col items-center justify-center transition-all duration-400 dark:bg-gray-900">
      <p className="destinations__subtitle section-subtitle">Who are we</p>
      <h1 className="destinations__title section-title py-3">
        Words From Our Founders
      </h1>

      <div className="cards flex  items-center justify-center gap-10">
        <div class="staff-card w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex justify-center px-4 pt-4"></div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="faisal image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Faisal Okla
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Founder & CEO
            </span>

            <p className="   px-6 py-5 leading-8">
              " Customer satisfaction is our top priority, and we go the extra
              mile to ensure that every aspect of your journey exceeds your
              expectations. We partner with carefully selected hotels and
              accommodations to provide you with comfortable and luxurious
              stays. Additionally, our customer support team is available round
              the clock to address any queries or concerns you may have,
              ensuring a smooth and stress-free experience. With our attention
              to detail, personalized services, and commitment to delivering
              unforgettable moments, Emirates Adventours is your ideal choice
              for an exceptional tour and adventure in Dubai."
            </p>
          </div>
        </div>
        <div class="staff-card w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex justify-center px-4 pt-4"></div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Eddie Doyle
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Founder & CEO
            </span>

            <p className="   px-6 py-5 leading-8">
              "At Emirates Adventours, we pride ourselves on providing
              exceptional services to make your Dubai experience truly
              unforgettable. Our expert team of travel professionals
              meticulously curates diverse itineraries that showcase the best of
              Dubai's iconic landmarks and hidden gems. Whether you're seeking
              adventure in the desert, indulgence in luxury shopping, or
              cultural immersion in traditional souks, we have tailored packages
              to suit every traveler's interests and preferences. "
            </p>
          </div>
        </div>
        <div class="staff-card w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex justify-center px-4 pt-4"></div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Maamoun Okla
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Founder & CEO
            </span>

            <p className=" px-6 py-5 leading-8">
              " Our services extend beyond just itinerary planning. We offer
              seamless transportation solutions to ensure hassle-free journeys
              throughout your trip. From airport transfers to comfortable and
              air-conditioned vehicles for city tours, our fleet of modern
              vehicles and professional drivers ensure your safety and comfort.
              Our knowledgeable and friendly guides are passionate about Dubai
              and are dedicated to providing insightful commentary, enriching
              your experience with intriguing facts and stories about the city's
              history, culture, and architectural wonders. "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
