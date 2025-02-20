import { Clock, Envelope, MapPin, Phone, Truck3 } from "@trucking/assets/icons";
import { imageAssets } from "@trucking/assets/images";
import { NAVIGATION_ROUTES } from "@trucking/routes/navigationRoutes";

export const contactData = [
  {
    label: "Phone",
    id: "phone",
    value: "(618) 567-2106",
    link: "tel:(618) 567-2106",
    icon: Phone,
  },
  {
    label: "Email",
    id: "email",
    value: "brenda3712000@yahoo.com",
    link: "mailto:brenda3712000@yahoo.com",
    icon: Envelope,
  },
  {
    label: "Working Hours",
    id: "working-hours",
    value: "Mon - Sat : 9 AM - 5 PM",
    icon: Clock,
    link: "",
  },
  {
    label: "Address",
    id: "address",
    value: "1234 Street Name, City Name",
    icon: MapPin,
    link: "",
  },
];

export const navLinks = [
  {
    label: "Home",
    link: NAVIGATION_ROUTES.HOME,
  },
  {
    label: "About Us",
    link: NAVIGATION_ROUTES.ABOUT,
  },
  {
    label: "Our Services",
    link: NAVIGATION_ROUTES.SERVICES,
  },
  {
    label: "Reviews",
    link: NAVIGATION_ROUTES.REVIEWS,
  },
  {
    label: "Contact Us",
    link: NAVIGATION_ROUTES.CONTACT,
  },
];

export const serviceData = [
  {
    label: "Hot Shot Trucking",
    icon: <Truck3 />,
    image: imageAssets.Service1,
  },
  {
    label: "Full Truck Load",
    icon: <Truck3 />,
    image: imageAssets.Service2,
  },
  {
    label: "Logistics",
    icon: <Truck3 />,
    image: imageAssets.Service3,
  },
];

export const testimonialData = [
  {
    name: "Mark R.",
    position: "Logistics Manager",
    rating: 5,
    review:
      "Blue View Trucking has been our go-to carrier for oversized shipments. Their team is knowledgeable, and they always provide competitive rates with excellent customer service. We've never had to worry about delays or last-minute issues—highly recommended!",
  },
  {
    name: "Susan T.",
    position: "Construction Supply Manager",
    rating: 5,
    review:
      "We had a complex shipment that required extra attention due to its size, and Blue View Trucking handled it flawlessly. Their expertise in managing wide and overweight loads made the process smooth and hassle-free. We will definitely use them again!",
  },
  {
    name: "David L.",
    position: "Manufacturing Operations",
    rating: 5,
    review:
      "The team at Blue View Trucking made the entire process stress-free. They provided us with a great rate, kept us updated at every step, and delivered our shipment on time. Their customer service truly sets them apart.",
  },
  {
    name: "Lisa M.",
    position: "Supply Chain Coordinator",
    rating: 5,
    review:
      "We've used Blue View Trucking multiple times, and they have never let us down. Whether it's an overlength or overweight load, they handle it professionally and efficiently. They are the first company we call when we need reliable transportation.",
  },
];
