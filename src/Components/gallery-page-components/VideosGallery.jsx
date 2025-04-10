import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";

const VideosGallery = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const videos = [
    "https://www.youtube.com/embed/QaEZVrI2DF8?si=r8URkQN9SCzFLfH5",
    "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
    "https://www.youtube.com/embed/QaEZVrI2DF8?si=r8URkQN9SCzFLfH5",
    "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
    "https://www.youtube.com/embed/VU9q3nSYidc?si=0jhKv_EyTYo8fZBc",
    "https://www.youtube.com/embed/QVRiLZ-PUsk?si=KWWhsxIHS3VApEyv",
    "https://www.youtube.com/embed/MOKjj_MMUi4?si=k62tu44gtJ_qTE58",
    "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
    "https://www.youtube.com/embed/7_cDDUbb8e0?si=ho0R1GGARNR-XBSK",
    "https://www.youtube.com/embed/VU9q3nSYidc?si=0jhKv_EyTYo8fZBc",
    "https://www.youtube.com/embed/QVRiLZ-PUsk?si=KWWhsxIHS3VApEyv",
  ];

  // Determine videos to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="min-h-screen w-full">
        {/* Other sections remain unchanged */}
        
        {/* More Videos Section */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("gallerryVideos-more-videos-main-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {currentVideos.map((videoSrc, i) => (
              <div
                key={startIndex + i} // Adjusted key
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <iframe
                  className="w-full h-[200px] rounded-t-lg"
                  src={videoSrc}
                  title={`Museum Video ${startIndex + i + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h1 className="text-lg font-semibold mb-2">
                    {t("gallerryVideos-more-video-title")} {startIndex + i + 1}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {t("gallerryVideos-more-video-desc")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Component */}
        <div className="my-10">
          <Pagination
            totalItems={videos.length} // Total number of videos
            itemsPerPage={itemsPerPage} // Number of videos per page
            currentPage={currentPage} // Current active page
            onPageChange={handlePageChange} // Callback for page change
          />
        </div>
      </div>
    </>
  );
};

export default VideosGallery;
