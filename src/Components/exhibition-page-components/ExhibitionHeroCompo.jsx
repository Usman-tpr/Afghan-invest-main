import React from "react";
import { stringConcat } from "../../helper-functions/formatText";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";

export default function ExhibitionHeroCompo({ events }) {
  const { t } = useTranslation();
  // Split events into upcoming and past
  const upcomingEvents = events.filter(
    (event) => new Date(event?.date) > new Date()
  );
  const pastEvents = events.filter(
    (event) => new Date(event?.date) <= new Date()
  );

  return (
    <>
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div
          className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2V1bSUyMGV2ZW50c3xlbnwwfDB8MHx8fDI%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              {t("exhibition-title")}
            </h1>
            <p className="text-xl mb-6">{t("exhibition-description")}</p>
          </div>
        </div>

        {/* Section: Upcoming and Related Exhibitions */}
        {/* <h2 className="text-center text-4xl font-bold my-8 text-mstheme mt-10">
            {t("upcoming-exhibitions")}
          </h2> */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>


        <div className="w-full px-4 md:px-0 md:w-full  mt-24 flex ">

          {/* Upcoming Event (Large Card) */}
          {upcomingEvents?.length > 0 ? (
            <div className="mb-12 w-1/3 mx-20">
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform p-4">
              <h5 className="mb-4 text-2xl font-bold text-blue-gray-900">
                    {stringConcat(upcomingEvents[0]?.title)}
                  </h5>
                <div className="relative h-48 w-72 rounded-md overflow-hidden ">
                  <img
                    src={upcomingEvents[0]?.image}
                    alt={upcomingEvents[0]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  
                  <p className="text-lg font-light text-gray-600 mb-6">
                    {stringConcat(upcomingEvents[0]?.description)}
                  </p>
                  <button
                    className="w-full md:w-auto font-bold text-center uppercase transition-all text-sm py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                    type="button"
                  >
                    {t("eventsPage-up-com-events-btn")}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No upcoming events</p>
          )}

          {/* Past Events (Small Cards) */}
          <div className="flex flex-wrap w-3/4 items-end">
            {pastEvents?.length > 0 ? (
              pastEvents.map((event) => (
                <div key={event.id} className="px-4">
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                    <div className="relative h-44 w-44 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
                        {stringConcat(event.title, 15)}
                      </h5>
                        <p className="text-sm font-light text-gray-600">
                          {stringConcat(event.description, 10)}
                        </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No past events
              </p>
            )}
          </div>
        </div>
      </div>

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
}
