import React from "react";
import AboutHistory from "../../Components/about-us-page-components/AboutHistory";
import Pagination from "../../Components/Pagination";

const AboutUs = () => {
  return (
    <>
    <AboutHistory/>
    <div className="my-20">
     <Pagination
        totalItems={3} // Total number of items
        itemsPerPage={3} // Number of items per page
        // currentPage={currentPage} // Current active page
        // onPageChange={handlePageChange} // Callback to handle page changes
      />
     </div>
    </>
  );
};

export default AboutUs;
