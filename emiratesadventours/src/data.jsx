// import images
import DestinationImg1 from "./assets/images/eye.jpg";
import DestinationImg2 from "./assets/images/burjalarab.jpg";
import DestinationImg3 from "./assets/images/mosque.jpg";

// import icons
import { BsFillSignpost2Fill as ServiceIcon1 } from "react-icons/bs";
import { GiBus as ServiceIcon2 } from "react-icons/gi";
import { AiFillCreditCard as ServiceIcon3 } from "react-icons/ai";
import { FaHotel as ServiceIcon5 } from "react-icons/fa";

import { GiCampfire as ServiceIcon4 } from "react-icons/gi";

export const serviceData = [
  {
    icons: (
      <ServiceIcon1
        size="3.2rem"
        className=" font-serif text-xl  text-Gold dark:text-blue-500"
      />
    ),
    title: "Full Guide",
    text: "Expertly curated tours, unique itineraries and insider knowledge.Unlock the wonders of Dubai with our tour guide specialists. ",
  },
  {
    icons: (
      <ServiceIcon2
        size="3.2rem"
        className=" font-serif text-xl  text-Gold dark:text-blue-500"
      />
    ),
    title: "Transport",
    text: "Join us in our Luxury Buses throughout the enite tour with our friendly drivers and guides.",
  },
  {
    icons: (
      <ServiceIcon3
        size="3.2rem"
        className=" font-serif text-xl  text-Gold dark:text-blue-500"
      />
    ),
    title: "Easy Book",
    text: "Enjoy the flexible payment through our app and get rewards on every payment.",
  },
  {
    icons: (
      <ServiceIcon4
        size="3.2rem"
        className=" font-serif text-xl  text-Gold dark:text-blue-500"
      />
    ),
    title: "Camp Fire",
    text: "Experience the magic of a desert campfire party under the starlit sky. Enjoy music, dancing, and savor delicious BBQ in an unforgettable desert adventure.",
  },
  {
    icons: (
      <ServiceIcon5
        size="3.2rem"
        className=" font-serif text-xl  text-Gold dark:text-blue-500"
      />
    ),
    title: "Luxury Hotels",
    text: "Indulge in luxury at our exquisite 5-star hotels. Impeccable service, lavish amenities, and unrivaled comfort await your arrival.",
  },
];

export const destinationData = [
  {
    image: DestinationImg1,
    title: "Dubai Eye, Dubai",
    text: " ",
  },
  {
    image: DestinationImg2,
    title: "Burj Al Arab, Dubai",
    text: " ",
  },
  {
    image: DestinationImg3,
    title: "Grand Mosque, Abu Dhabi",
    text: " ",
  },
];
