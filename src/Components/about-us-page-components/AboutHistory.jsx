import React from "react";
import { useTranslation } from "react-i18next";

const AboutHistory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen w-full">
        {/* start of Background Image */}
        <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/03/05/09/12/afghanistan-1237421_960_720.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
          {t("aboutHistory-main-title")}
          </h1>
          <p className="text-xl mb-6">
          {t("aboutHistory-main-desc")}
          </p>
        </div>
      </div>
        {/* ends of Background Image */}
        {/* heading with description start here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
          {t("titleWithDesc-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <p className="text-xl my-8">
            {t("titleWithDesc-desc")}
          </p>
        </div>
        {/* heading with description ends here */}
        {/* Historical topics starts here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("historicalTopics-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
  {[
    {
      img: "https://images.pexels.com/photos/4162723/pexels-photo-4162723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: t("historicalTopics-1st-img-title"),
    },
    {
      img: "https://images.pexels.com/photos/6942814/pexels-photo-6942814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: t("historicalTopics-2nd-img-title"),
    },
    {
      img: "https://images.pexels.com/photos/4162723/pexels-photo-4162723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: t("historicalTopics-3rd-img-title"),
    },
    {
      img: "https://images.pexels.com/photos/5327973/pexels-photo-5327973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: t("historicalTopics-4th-img-title"),
    },
  ].map((item, index) => (
    <div
      key={index}
      className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300"
    >
      {/* Image section */}
      <img
        className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105"
        src={item.img}
        alt={item.title}
      />

      {/* Content overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 p-4 flex items-end">
        <h1 className="text-white text-lg font-bold">{item.title}</h1>
      </div>
    </div>
  ))}
</div>

        </div>
        {/* Historical topics ends here */}
        {/* gallery collection starts here */}
        <div className="w-full px-4 md:px-0 md:w-[1100px] mx-auto my-24">
          <h1 className="text-center text-4xl font-bold my-8 text-mstheme">
            {t("historicalTime-title")}
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-center gap-12 my-16">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2012/10/10/15/46/girl-60636_1280.jpg"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{t("historicalTime-1st-img-title")}</h1>
                <p className="text-sm text-gray-600">
                {t("historicalTime-1st-img-desc")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2012/10/10/17/53/men-60744_960_720.jpg"
                alt="Afghanistan National Flag"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{t("historicalTime-2nd-img-title")}</h1>
                <p className="text-sm text-gray-600">
                {t("historicalTime-2nd-img-desc")}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://cdn.pixabay.com/photo/2013/02/20/00/52/afghanistan-83496_1280.jpg"
                alt="Intricately carved stone deity"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{t("historicalTime-3rd-img-title")}</h1>
                <p className="text-sm text-gray-600">
                {t("historicalTime-3rd-img-desc")}
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[320px]">
              <img
                className="w-full h-[250px] object-cover"
                src="https://media.istockphoto.com/id/1256983065/photo/jewellery-of-afganistan.jpg?s=1024x1024&w=is&k=20&c=lPp75xQXluwSo6VIPOUwLkRKzeNCVb1cfKvp8UyWF80="
                alt="Intricately carved stone deity"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{t("historicalTime-4th-img-title")}</h1>
                <p className="text-sm text-gray-600">
                {t("historicalTime-4th-img-desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* gallery collection ends here */}
      </div>
    </>
  );
};

export default AboutHistory;
