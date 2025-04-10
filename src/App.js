
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import mainRoutes from "./routes/mainRoutes";

// const router = createBrowserRouter(mainRoutes, { basename: process.env.PUBLIC_URL });
const router = createBrowserRouter(mainRoutes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/home-page/Home';
// import Navbar from './Components/Navbar';
// import AboutUs from './Pages/about-page/AboutUs';
// import Footer from './Components/Footer';

// const App = () => {
//   return (
//     // <BrowserRouter basename="/Afghan-invest">
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;
