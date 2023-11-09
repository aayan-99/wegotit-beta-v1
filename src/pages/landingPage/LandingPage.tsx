import HeroSection from './components/HeroSection'
import Expertise from './components/Expertise'
import GoodDesign from './components/GoodDesign'
import ContactPage from './components/ContactPage'
import logo from '../../assets/images/logo_main.svg'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import websiteLoaderAtom from '../../recoil/atoms/websiteLoaderAtom'
import { motion } from 'framer-motion'
import Clientele from './components/Clientele'

const LandingPage = () => {

    const [landingPageLoading, setLandingPageLoading] = useRecoilState(websiteLoaderAtom);

    useEffect(() => {
        setTimeout(() => {
            setLandingPageLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {
                landingPageLoading ? (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className='h-screen bg-primary flex flex-col justify-center items-center'>
                        <div className='w-full max-w-[200px] mb-[200px]'>
                            <img src={logo} className='w-full' alt="" />
                        </div>
                        <span className='landingPageLoader'></span>
                    </motion.div>
                ) : (
                    <>
                        <HeroSection />
                        <Expertise />
                        <GoodDesign />
                        <Clientele />
                        <ContactPage />
                    </>
                )
            }
        </>
    )
}

export default LandingPage