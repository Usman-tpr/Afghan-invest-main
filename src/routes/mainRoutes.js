import NotFound from "../Pages/NotFound";
import Root from "../Pages/Root";
import aboutusRoutes from "./aboutusRoutes";
import articlesRoutes from "./articlesRoutes";
import contactusRoutes from "./contactusRoutes";
import eventsRoutes from "./eventsRoutes";
import exhibitionRoutes from "./exhibitionRoutes";
import galleryRoutes from "./galleryRoutes";
import homeRoutes from "./homeRoutes";


const mainRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
        ...homeRoutes,
        ...aboutusRoutes,
        ...galleryRoutes,
        ...contactusRoutes,
        ...eventsRoutes,
        ...aboutusRoutes,
        ...exhibitionRoutes,
        ...articlesRoutes,
        {
          path: "*", // Catch all unmatched routes
          element: <NotFound />, // Render the NotFound component
        },
    ],
  },
];

export default mainRoutes;
