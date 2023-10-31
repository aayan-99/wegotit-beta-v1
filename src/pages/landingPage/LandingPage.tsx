import HeroSection from './components/HeroSection'
import Expertise from './components/Expertise'
import GoodDesign from './components/GoodDesign'
import TypeFacePage from './components/TypeFacePage'
import ColorPsychologyPage from './components/ColorPsychologyPage'
import ContactPage from './components/ContactPage'
import logo from '../../assets/images/logo_main.svg'
import { useEffect, useState } from 'react'

const LandingPage = () => {

    const [landingPageLoading, setLandingPageLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLandingPageLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {
                landingPageLoading ? (
                    <div className='h-screen bg-primary flex flex-col justify-center items-center'>
                        <div className='w-full max-w-[200px] mb-[200px]'>
                            <img src={logo} className='w-full' alt="" />
                        </div>
                        <span className='landingPageLoader'></span>
                    </div>
                ) : (
                    <>
                        <HeroSection />
                        <Expertise />
                        <GoodDesign />
                        <TypeFacePage />
                        <ColorPsychologyPage />
                        <ContactPage />
                    </>
                )
            }
        </>
    )
}

export default LandingPage