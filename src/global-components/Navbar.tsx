import logo from '../assets/icons/home.svg'
import logoWhite from '../assets/icons/home-white.svg'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const location = useLocation();

    const [showBackground, setShowBackground] = useState(false);
    let scrollTimeout: any;

    const handleScroll = () => {
        setShowBackground(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setShowBackground(false);
        }, 1400);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div onMouseEnter={() => setShowBackground(true)} onMouseLeave={() => setShowBackground(false)} className={`cursor-pointer fixed font-clashdisplaysemibold top-0 flex justify-evenly transition-all duration-300 ease-in-out ${showBackground ? 'glass-morphism shadow-none' : '-translate-y-[45px] opacity-0 shadow-none'} sm:justify-between items-center w-full pr-6 sm:pr-0 p-5 z-[10]`}>
            <p className={`${location?.pathname == '/typeface' ? '' : ''}`}>case studies</p>
            <Link className='' to={`/`}>
                <img src={location?.pathname == '/typeface' ? logo : logo} className='w-[23px]' alt="" />
            </Link>
            <p className={`${location?.pathname == '/typeface' ? '' : ''} mr-5`}>portfolio</p>
        </div>
    )
}

export default Navbar