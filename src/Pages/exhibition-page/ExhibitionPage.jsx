import React from 'react'
import { useTranslation } from "react-i18next";
import ExhibitionHeroCompo from '../../Components/exhibition-page-components/ExhibitionHeroCompo';

export default function ExhibitionPage() {
  const { t } = useTranslation();
    const events = [
        {
          id: 1,
          title: t("eventsPage-up-com-events-1st-title"),
          description: t("eventsPage-up-com-events-1st-desc"),
          date: "2024-10-15", // upcoming event
          image: "https://cdn.pixabay.com/photo/2022/02/08/17/00/nefertiti-statue-7001723_960_720.jpg",
        },
        {
          id: 2,
          title: t("eventsPage-past-events-1st-title"),
          description: t("eventsPage-past-events-1st-desc"),
          date: "2024-08-10", // past event
          image: "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 3,
          title: t("eventsPage-up-com-events-2nd-title"),
          description: t("eventsPage-up-com-events-2nd-desc"),
          date: "2024-12-20", // upcoming event
          image: "https://cdn.pixabay.com/photo/2012/11/28/11/06/girl-67694_1280.jpg",
        },
        {
          id: 4,
          title: t("eventsPage-past-events-2nd-title"),
          description: t("eventsPage-past-events-2nd-desc"),
          date: "2024-06-25", // past event
          image: "https://media.istockphoto.com/id/1399195000/photo/mother-and-daughter-in-art-gallery.webp?a=1&b=1&s=612x612&w=0&k=20&c=iJHjsZgKKxxecSe_fyjOdw6ML3DZB2FEZHUStIXLpBk=",
        },
        {
            id: 5,
            title: t("eventsPage-past-events-3rd-title"),
            description: t("eventsPage-past-events-3rd-title"),
            date: "2024-08-10", // past event
            image: "https://cdn.pixabay.com/photo/2019/11/12/23/00/artist-4622221_1280.jpg",
          },
          {
            id: 6,
            title: t("eventsPage-up-com-events-3rd-title"),
            description: t("eventsPage-up-com-events-3rd-desc"),
            date: "2024-12-20", // upcoming event
            image: "https://cdn.pixabay.com/photo/2012/10/10/15/49/woman-60639_1280.jpg",
          },
          {
            id: 7,
            title: t("eventsPage-up-com-events-4th-title"),
            description: t("eventsPage-up-com-events-4th-desc"),
            date: "2024-12-20", // upcoming event
            image: "https://cdn.pixabay.com/photo/2016/01/13/22/48/pottery-1139047_1280.jpg",
          },
      ];
  return (
    <>
    <ExhibitionHeroCompo events={events} />
    </>
  )
}
