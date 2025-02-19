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
    ],
  },
];

export default appRoutes;
