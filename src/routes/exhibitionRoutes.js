import ExhibitionPage from "../Pages/exhibition-page/ExhibitionPage";
import ExhibitionBronzeAge from "../Pages/exhibition-page/ExhibitionBronzeAge"
import ExhibitionAynakCopper from "../Pages/exhibition-page/ExhibitionAynakCopper"
import ExhibitionAiKhanum from "../Pages/exhibition-page/ExhibitionAiKhanum"
import ExhibitionThousandCities from "../Pages/exhibition-page/ExhibitionThousandCities"
import ExhibitionCar from "../Pages/exhibition-page/ExhibitionCar"

const exhibitionRoutes = [
    {
        path: "/exhibitions",
        element: <ExhibitionPage/>
    },
    // {
    //     path: "/exhibition/bronze-age-exhibition",
    //     element: <ExhibitionBronzeAge/>
    // },
    // {
    //     path: "/exhibition/aynak-copper-exhibition",
    //     element: <ExhibitionAynakCopper/>
    // },
    // {
    //     path: "/exhibition/ai-khanum",
    //     element: <ExhibitionAiKhanum/>
    // },
    // {
    //     path: "/exhibition/thousand-cities-exhibition",
    //     element: <ExhibitionThousandCities/>
    // },
    // {
    //     path: "/exhibition/car-exhibition",
    //     element: <ExhibitionCar/>
    // },
]

export default exhibitionRoutes;