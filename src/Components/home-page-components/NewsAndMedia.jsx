import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NewsAndMedia() {
  const { t } = useTranslation();
  const articlesData = [
    {
      id: 1,
      title: t("articlesPage-1st-card-title"),
      description:
      t("articlesPage-1st-card-desc"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqbF6sCWakwCCttrtqyC_6fzxiqGzGjxLXA&s",
    },
    {
      id: 2,
      title: t("articlesPage-2nd-card-title"),
      description:t("articlesPage-2nd-card-desc"),
      image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
    },
    {
      id: 3,
      title: t("articlesPage-3rd-card-title"),
      description:t("articlesPage-3rd-card-desc"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqbF6sCWakwCCttrtqyC_6fzxiqGzGjxLXA&s",
    },
    {
      id: 4,
      title: t("articlesPage-4th-card-title"),
      description:t("articlesPage-4th-card-desc"),
      image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
    },
    // {
    //   id: 5,
    //   title: t("articlesPage-5th-card-title"),
    //   description:t("articlesPage-5th-card-desc"),
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqbF6sCWakwCCttrtqyC_6fzxiqGzGjxLXA&s",
    // },
    // {
    //   id: 6,
    //   title: t("articlesPage-6th-card-title"),
    //   description:t("articlesPage-6th-card-desc"),
    //   image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
    // },
    // Add more articles if needed
  ];
  return (
    <>
     <h2 className="text-4xl font-bold text-center ">
            {t("articlesPage-title")}
          </h2>
          <div className="h-1 w-[10%] bg-mstheme mt-1 mb-10 mx-auto "></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-1 sm:mx-36 ">
            {articlesData.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <Link to={`/article/${article.id}`}>
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover"
                      src={article.image}
                      alt={article.title}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-3 flex flex-col justify-between h-40">
                    <h3 className="text-base font-semibold text-gray-800 truncate">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-3">
                      <button className="bg-usetheme text-white px-3 py-1.5 rounded-md text-sm hover:bg-usetheme transition-colors duration-200">
                        {t("articlesPage-card-btn")}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full mt-14 h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>

    </>
  );
}
