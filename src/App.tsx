import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage/LandingPage";
import Navbar from "./global-components/Navbar";
import GoodDesignPage from "./pages/goodDesignPage/GoodDesignPage";
import 'react-creative-cursor/dist/styles.css';
import AnimatedCursor from "react-animated-cursor";



function App() {

  return (
    <>
      <div className="w-full relative">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gooddesign" element={<GoodDesignPage />} />
      </Routes>
      <div className="hidden lg:block">
        <AnimatedCursor
          innerSize={14}
          outerSize={30}
          outerScale={2}
          trailingSpeed={7}
          color='253, 187, 17'
        />
      </div>
    </>
  )
}

export default App
