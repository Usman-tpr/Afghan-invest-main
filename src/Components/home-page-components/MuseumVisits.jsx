import React from "react";
import { useTranslation } from "react-i18next";
import { stringConcat } from "../../helper-functions/formatText";

const MuseumVisits = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      image:
        "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-6/441157377_897935999044440_3846929826851875522_n.jpg?stp=c174.0.612.612a_cp6_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHE0HViZwYVNilY7l_Ga4vQJDSs8u-6Y5wkNKzy77pjnKKcT2AmHf4SDi-nSL2c1nv_UmOnmSsC8aNGpmy16Gc6&_nc_ohc=-wiuGFfG8n8Q7kNvgGKqMZR&_nc_ht=scontent.fpew3-1.fna&_nc_gid=AD7jItprp5M444VlhaPLIcN&oh=00_AYAWxTJDbWwNtKqtTKn5L-e95qAofLgn3XDDBOMmi8T4QA&oe=66F38CE6",
      title: t("museumVisits-1st-image-title"),
      desc: t("museumVisits-1st-image-desc"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-2nd-image-title"),
      desc: t("museumVisits-2nd-image-desc"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-3rd-image-title"),
      desc: t("museumVisits-3rd-image-desc"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("museumVisits-4th-image-title"),
      desc: t("museumVisits-4th-image-desc"),
    },
  ];
  return (
    <>
      <div className="w-full md:w-[1150px] m-auto ">
        <div className="py-20">
          <h1 className="pb-5 md:pl-0 pl-8 text-3xl md:text-4xl font-semibold">
            {t("museumVisits-main-title")}
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6 ">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="group border-l-2 border-mstheme shadow-2xl cursor-pointer p-2 w-[280px] h-[350px] flex flex-col"
              >
                <div className="flex-grow overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-40 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="px-5 py-3 flex-grow">
                  <h1 className="text-xl font-semibold hover:underline">
                    {stringConcat(item.title, 15)}
                  </h1>
                  <p className="pt-3 pb-6">{stringConcat(item.desc, 45)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-mstheme to-transparent"></div>
      </div>
    </>
  );
};

export default MuseumVisits;
