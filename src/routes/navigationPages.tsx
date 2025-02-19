import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
export const NAVIGATION_PAGES = {
  HOME: <Home />,
  ABOUT: <About />,
};
