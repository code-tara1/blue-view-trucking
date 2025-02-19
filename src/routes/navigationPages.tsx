import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
export const NAVIGATION_PAGES = {
  HOME: <Home />,
  ABOUT: <About />,
  SERVICES: <Services />,
};
