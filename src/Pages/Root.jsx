import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Root() {
  return (
    <>
      <main>
        <div className="">
          <Navbar />
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
