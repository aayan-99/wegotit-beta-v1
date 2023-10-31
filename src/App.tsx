import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { Route, Routes } from "react-router";
import TypefacePage from "./pages/typefacePage/TypefacePage";
import LandingPage from "./pages/landingPage/LandingPage";
import Navbar from "./global-components/Navbar";
import GoodDesignPage from "./pages/goodDesignPage/GoodDesignPage";
import 'react-creative-cursor/dist/styles.css';
import CustomCursor from "./global-components/custom-cursor/CustomCursor";



function App() {

  return (
    <>
      <div className="w-full relative">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/typeface" element={<TypefacePage />} />
        <Route path="/gooddesign" element={<GoodDesignPage />} />
      </Routes>
      <CustomCursor />
    </>
  )
}

export default App
