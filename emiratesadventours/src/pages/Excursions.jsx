

import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import PackagesHeader from "../components/PackagesHeader";
export default function Chill() {
  const days = [
    {
      day: 1,
      activities: [
        "Visit Burj Khalifa",
        "Explore Dubai Mall",
        "Enjoy the Dubai Fountain Show",
      ],
    },
    {
      day: 2,
      activities: [
        "Take a desert safari",
        "Ride a camel",
        "Experience dune bashing",
      ],
    },
    {
      day: 3,
      activities: [
        "Visit Palm Jumeirah",
        "Relax on Jumeirah Beach",
        "Explore Atlantis, The Palm",
      ],
    },
    {
      day: 4,
      activities: [
        "Discover Dubai Marina",
        "Go on a dhow cruise",
        "Enjoy dinner at a waterfront restaurant",
      ],
    },
    {
      day: 5,
      activities: [
        "Visit Dubai Miracle Garden",
        "Explore Dubai Butterfly Garden",
        "Enjoy the floral displays",
      ],
    },
    {
      day: 6,
      activities: [
        "Explore Old Dubai",
        "Visit Dubai Museum",
        "Take an abra ride in Dubai Creek",
      ],
    },
    {
      day: 7,
      activities: [
        "Shop at the Gold Souk",
        "Explore the Spice Souk",
        "Experience traditional markets",
      ],
    },
    {
      day: 8,
      activities: [
        "Visit Dubai Aquarium and Underwater Zoo",
        "Enjoy the underwater tunnel",
        "Interact with marine life",
      ],
    },
    {
      day: 9,
      activities: [
        "Go on a helicopter tour of Dubai",
        "Admire the city from above",
        "Capture stunning aerial views",
      ],
    },
    {
      day: 10,
      activities: [
        "Relax at JBR Walk",
        "Enjoy beachfront dining",
        "Experience vibrant nightlife",
      ],
    },
  ];

  return (
    <>
      <PackagesHeader className="" id="packagesHeader" />
      <section className="chill_container mx-auto pt-40 transition-all duration-400 dark:bg-gray-900 md:px-10 ">
        <h1 className="mb-4 text-4xl font-bold dark:text-gray-200">
          Chill & Cheerful 10-Day Dubai Itinerary
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {days.map((day) => (
            <div
              key={day.day}
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:bg-gray-700"
            >
              <h2 className="mb-2 text-2xl font-bold">Day {day.day}</h2>
              <ul>
                {day.activities.map((activity) => (
                  <li className="list-disc dark:text-gray-300" key={activity}>
                    {" "}
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
