import logo from '../../../assets/icons/behance.svg'

const ContactPage = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full h-[47vh] md:h-[50vh] bg-[#181818] flex flex-col justify-center gap-8 items-center'>
                <h1 className='font-clashdisplaysemibold text-[40px] md:text-[60px] lg:text-[80px] text-white leading-none'>check out my works!</h1>
                <div className='w-[200px] cursor-pointer'>
                    <img src={logo} className='w-full' alt="" />
                </div>
            </div>
            <div className='w-full h-[47vh] md:h-[50vh] flex flex-col justify-center gap-4 items-center'>
                <h1 className='font-clashdisplaysemibold text-[40px] text-center lg:text-[40px] xl:text-[70px] leading-none'>get in touch!</h1>
                <h1 className='font-clashdisplaylight text-[25px] sm:text-[30px] md:text-[45px] text-center lg:text-[60px] xl:text-[85px] leading-none'>creativitycube92@gmail.com</h1>
            </div>
        </div>
    )
}

export default ContactPage