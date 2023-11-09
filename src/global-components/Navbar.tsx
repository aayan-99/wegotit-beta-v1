import lockWhite from '../assets/icons/wegotit-icons-lock(white)-04.svg'
import logoYellow from '../assets/icons/wegotit-icons-home(yellow)-02.svg'
import logoWhite from '../assets/icons/wegotit-icons-home(white)-05.svg'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import websiteLoaderAtom from '../recoil/atoms/websiteLoaderAtom'
import { useRecoilState } from 'recoil'

const Navbar = () => {

    const location = useLocation();

    const [landingPageLoading, _setLandingPageLoading] = useRecoilState(websiteLoaderAtom);

    const [hover, setHover] = useState(false);

    const [_showBackground, setShowBackground] = useState(false);
    let scrollTimeout: any;

    const handleScroll = () => {
        setShowBackground(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setShowBackground(false);
        }, 1400);
    };

    const handleLinkButtonClick = () => {
        window.open('https://www.behance.net/pallavsinha', '_blank');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div
            // onMouseEnter={() => setShowBackground(true)} onMouseLeave={() => setShowBackground(false)}
            // className={`cursor-pointer fixed font-clashdisplaysemibold top-0 flex justify-evenly transition-all duration-300 ease-in-out ${showBackground ? 'glass-morphism shadow-none' : '-translate-y-[45px] opacity-0 shadow-none'} sm:justify-between items-center w-full pr-6 sm:pr-0 p-5 z-[10]`}>
            className={`${landingPageLoading ? 'hidden' : ''} cursor-pointer text-white fixed font-clashdisplaysemibold top-0 flex justify-between transition-all duration-300 ease-in-out bg-black shadow-none sm:justify-between items-center w-full p-5 z-[10]`}>
            <div className='w-[40%] lg:w-[15%] flex flex-row-reverse md:flex-row justify-end md:justify-start gap-1 md:gap-3 items-center'>
                <Link to={``} className={`${location?.pathname == '/typeface' ? '' : ''} opacity-60 `}>case studies</Link>
                <img src={lockWhite} className='w-full max-w-[12px] md:max-w-[15px]' alt="" />
            </div>
            <Link className='' to={`/`}>
                <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? logoYellow : logoWhite} className='w-[23px]' alt="" />
            </Link>
            <div className='w-[40%] lg:w-[15%] flex justify-end'>
                <Link to={``} onClick={handleLinkButtonClick} className={`${location?.pathname == '/typeface' ? '' : ''} hover:text-primary`}>portfolio</Link>
            </div>
        </div>
    )
}

export default Navbar