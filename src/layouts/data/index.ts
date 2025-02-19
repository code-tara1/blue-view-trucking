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
    icon: Truck3,
    image: imageAssets.Service1,
  },
  {
    label: "Full Truck Load",
    icon: Truck3,
    image: imageAssets.Service2,
  },
  {
    label: "Logistics",
    icon: Truck3,
    image: imageAssets.Service3,
  },
];
