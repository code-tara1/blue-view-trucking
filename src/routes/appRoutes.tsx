import LayoutWrapper from "@trucking/layouts";
import { NAVIGATION_PAGES } from "./navigationPages";
import { NAVIGATION_ROUTES } from "./navigationRoutes";

const appRoutes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: NAVIGATION_PAGES.HOME,
      },
      {
        path: NAVIGATION_ROUTES.ABOUT,
        element: NAVIGATION_PAGES.ABOUT,
      },
      {
        path: NAVIGATION_ROUTES.SERVICES,
        element: NAVIGATION_PAGES.SERVICES,
      },
      {
        path: NAVIGATION_ROUTES.REVIEWS,
        element: NAVIGATION_PAGES.REVIEWS,
      },
      {
        path: NAVIGATION_ROUTES.CONTACT,
        element: NAVIGATION_PAGES.CONTACT,
      },
    ],
  },
];

export default appRoutes;
