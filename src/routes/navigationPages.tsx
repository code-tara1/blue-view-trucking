import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Reviews = lazy(() => import("../pages/Reviews"));
const Contact = lazy(() => import("../pages/Contact"));
export const NAVIGATION_PAGES = {
  HOME: <Home />,
  ABOUT: <About />,
  SERVICES: <Services />,
  REVIEWS: <Reviews />,
  CONTACT: <Contact />,
};
