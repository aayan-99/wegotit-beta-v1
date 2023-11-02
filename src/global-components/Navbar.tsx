import logoYellow from '../assets/icons/home-yellow.svg'
import logoWhite from '../assets/icons/home-white.svg'
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
            className={`${landingPageLoading ? 'hidden' : ''} cursor-pointer text-white fixed font-clashdisplaysemibold top-0 flex justify-evenly transition-all duration-300 ease-in-out bg-black shadow-none sm:justify-between items-center w-full pr-6 sm:pr-0 p-5 z-[10]`}>
            <p className={`${location?.pathname == '/typeface' ? '' : ''} hover:text-primary`}>case studies</p>
            <Link className='' to={`/`}>
                <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? logoYellow : logoWhite} className='w-[23px]' alt="" />
            </Link>
            <p onClick={handleLinkButtonClick} className={`${location?.pathname == '/typeface' ? '' : ''} hover:text-primary mr-5`}>portfolio</p>
        </div>
    )
}

export default Navbar