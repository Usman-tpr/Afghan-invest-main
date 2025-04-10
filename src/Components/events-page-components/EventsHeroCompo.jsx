import React from "react";
import { stringConcat } from "../../helper-functions/formatText";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination";

export default function EventsHeroCompo({ events }) {
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
          {t("eventsPage-main-title")}
          </h1>
          <p className="text-xl mb-6">
          {t("eventsPage-main-desc")}
          </p>
        </div>
      </div>

        {/* Section 2: Upcoming Events */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("eventsPage-up-com-events-main-title")}
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents?.length > 0 ? (
              upcomingEvents?.map((event) => (
                <div key={event.id} className="px-4 my-4">
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900">
                        {stringConcat(event.title, 22)}
                      </h5>
                      <p className="text-base font-light leading-relaxed text-gray-600">
                        {stringConcat(event.description, 50)}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        className="w-full font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                        type="button"
                      >
                        {t("eventsPage-up-com-events-btn")}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No upcoming events
              </p>
            )}
          </div>
        </div>

        {/* Section 3: Past Events */}
        {/* <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h2 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("eventsPage-past-events-main-title")}
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents?.length > 0 ? (
              pastEvents?.map((event) => (
                <div key={event.id} className="px-4 my-4">
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900">
                        {stringConcat(event.title, 22)}
                      </h5>
                      <p className="text-base font-light leading-relaxed text-gray-600">
                        {stringConcat(event.description, 60)}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        className="w-full font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-mstheme text-white hover:bg-mstheme_hover"
                        type="button"
                      >
                        {t("eventsPage-past-events-btn")}
                      </button>
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
        </div> */}
     <div className="mb-10">
     <Pagination
        totalItems={3} // Total number of items
        itemsPerPage={3} // Number of items per page
        // currentPage={currentPage} // Current active page
        // onPageChange={handlePageChange} // Callback to handle page changes
      />
     </div>

        {/* Section 4: Newsletter Signup */}
        {/* <div className="w-full bg-mstheme px-4 md:px-0 md:w-[1100px] mx-auto py-16 rounded-lg text-white my-6">
          <h2 className="text-center text-4xl font-bold my-8">{t("eventsPage-update-main-title")}</h2>
          <p className="text-center text-lg mb-8">
            {t("eventsPage-update-desc")}
          </p>

          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder={t("eventspage-input-placeholder")}
              className="w-full md:w-2/3 p-4 rounded-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto p-4 bg-white text-mstheme rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
            >
              {t("eventspage-update-btn")}
            </button>
          </form>
        </div> */}
      </div>
    </>
  );
}
