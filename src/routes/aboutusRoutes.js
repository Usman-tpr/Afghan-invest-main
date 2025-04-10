import AboutPageDirec from "../Pages/about-page/AboutPageDirec";
import AboutPageReg from "../Pages/about-page/AboutPageReg";
import AboutPageTechnical from "../Pages/about-page/AboutPageTechnical";
import AboutUs from "../Pages/about-page/AboutUs";

const aboutusRoutes = [
  {
    path: "/about/history",
    element: <AboutUs />
  },
  {
    path: "/about/directorates",
    element: <AboutPageDirec/>
  },
  {
    path: "/about/technical-staff",
    element: <AboutPageTechnical/>
  },
  {
    path: "/about/regulations&policies",
    element: <AboutPageReg/>
  },
];

export default aboutusRoutes;
