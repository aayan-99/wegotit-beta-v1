import logo from '../../../assets/icons/behance.svg'
import up from '../../../assets/icons/up.svg'

const ContactPage = () => {

    const handleEmailClick = () => {
        window.location.href = `mailto:pallav@wegotit.co.in`;
    };

    const handleScrollToTopClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top
            behavior: 'smooth', // Smooth scrolling animation
        });
    };


    return (
        <div className='w-full flex flex-col relative'>
            <div className='w-full h-[47vh] md:h-[50vh] bg-black flex flex-col justify-center gap-8 items-center'>
                <h1 className='font-clashdisplaysemibold text-[40px] md:text-[60px] lg:text-[80px] text-white leading-none'>portfolio!</h1>
                <div className='w-[200px] cursor-pointer'>
                    <img src={logo} className='w-full' alt="" />
                </div>
            </div>
            <div className='w-full h-[47vh] md:h-[50vh] flex flex-col justify-center gap-4 items-center text-black'>
                <h1 className='font-clashdisplaysemibold text-[40px] text-center lg:text-[40px] xl:text-[70px] leading-none'>get in touch!</h1>
                <h1 onClick={handleEmailClick} className='font-clashdisplaylight text-[25px] sm:text-[30px] md:text-[45px] text-center lg:text-[60px] xl:text-[85px] leading-none'>pallav@wegotit.co.in</h1>
            </div>
            <div className='absolute bottom-0 right-0 flex justify-end items-center px-10 pb-8'>
                <div onClick={handleScrollToTopClick} className='w-full max-w-[65px]'>
                    <img src={up} className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactPage