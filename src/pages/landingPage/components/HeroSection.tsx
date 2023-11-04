import image from '../../../assets/images/logo_main.svg'
import scroll from '../../../assets/icons/scroll_icon.svg'
import { motion } from 'framer-motion'

const HeroSection = () => {

    const handleScrollClick = () => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight, // Scroll down by 100vh
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    const handleScrollClickMobile = () => {
        window.scrollTo({
            top: window.scrollY + (window.innerHeight * 0.3), // Scroll down by 50vh
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
        <div className='relative w-full flex justify-center items-center max-h-screen overflow-hidden'>
            <div className='w-full flex justify-center items-center'>
                <div className='w-[50%]'>
                    <img src={image} className='w-full' alt="" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='w-[50%] flex justify-center items-center'>
                    <div className='w-fit text-black text-center'>
                        <p className='text-[45px] leading-none font-clashdisplaylight tracking-[-1px]'>crafting</p>
                        <h1 className='text-[58px] leading-none font-clashdisplaybold tracking-[-1px]'>brillance</h1>
                    </div>
                </motion.div>
            </div>
            <div className='hidden md:flex absolute bottom-3 justify-center items-center w-full'>
                <div onClick={handleScrollClick} className='w-full max-w-[25px] mt-20 animate-bounce cursor-pointer'>
                    <img src={scroll} className='w-full' alt="" />
                </div>
            </div>
            <div className='flex md:hidden absolute bottom-3  justify-center items-center w-full'>
                <div onClick={handleScrollClickMobile} className='w-full max-w-[25px] mt-20 animate-bounce cursor-pointer'>
                    <img src={scroll} className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection