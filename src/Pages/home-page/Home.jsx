import React from "react";
import Banner from "../../Components/home-page-components/Banner";
import Service from "../../Components/home-page-components/Service";
import NewsAndMedia from "../../Components/home-page-components/NewsAndMedia";
import Founders from "../../Components/home-page-components/Founders";
import Address from "../../Components/home-page-components/Address";
import Gallery from "../../Components/home-page-components/Gallery";
import About from "../../Components/home-page-components/About";
import Hero from "../../Components/home-page-components/Hero";
import MuseumInfoBar from "../../Components/home-page-components/MuseumInfoBar";
import EventSection from "../../Components/home-page-components/EventSection";
import MuseumVisits from "../../Components/home-page-components/MuseumVisits";
import AboutMuseum from "../../Components/home-page-components/AboutMuseum";
import DirectorateSection from "../../Components/home-page-components/DirectorateSection";
import VisitorInfo from "../../Components/home-page-components/VisitorInfo";
import NotificationCard from "../../Components/notification-components/NotificationCard";
import Introduction from "../../Components/home-page-components/Introduction";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Hero />
      <Introduction />
      <EventSection />
      <NewsAndMedia />
      <Gallery />
      {/* <MuseumInfoBar /> */}
      {/* <MuseumVisits /> */}
      <AboutMuseum />
      <NotificationCard />
      {/* <DirectorateSection /> */}
      <VisitorInfo />
      {/* <About /> */}
      {/* <Service /> */}
      {/* <Founders /> */}
      <Address />
    </>
  );
};

export default Home;
