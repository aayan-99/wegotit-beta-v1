import img1 from '../../../assets/images/design_img_1.jpg'
import img2 from '../../../assets/images/design_img_2.jpg'

const HeroSection = () => {
    return (
        <div>
            <h1 className='font-clashdisplaysemibold pt-[120px] py-[30px] text-center text-[55px] tracking-[-2px] leading-none'>good vs bad design</h1>
            <div className="w-full justify-center items-center flex flex-col">
                <p className="">"Good design is a lot harder to notice than poor design".</p>
                <p> - Don Norman, The Design of Everyday Things.</p>
            </div>
            <div className='w-[75%] mx-auto mt-20'>
                <div className="w-full">
                    <div className="w-full">
                        <img src={img2} className="w-full" alt="" />
                    </div>
                    <p className='text-center text-[18px] mt-5'>source : https://www.fluidesigns.in/blog/how-to-differentiate-between-good-design-vs-bad-design</p>
                    <div className="w-full max-w-[700px] mx-auto flex justify-between items-center mt-10">
                        <p className='text-[34px] font-clashdisplay'>a bad design</p>
                        <p className='text-[34px] font-clashdisplaysemibold'>a good design</p>
                    </div>
                </div>
                <div className="w-full mt-[170px]">
                    <div className="w-full">
                        <img src={img1} className="w-full" alt="" />
                    </div>
                    <p className='text-center text-[18px] mt-5'>source : https://www.fluidesigns.in/blog/how-to-differentiate-between-good-design-vs-bad-design</p>
                    <div className="w-full max-w-[700px] mx-auto flex justify-between items-center mt-10">
                        <p className='text-[34px] font-clashdisplaysemibold'>a good design</p>
                        <p className='text-[34px] font-clashdisplay'>a bad design</p>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#E30000] flex justify-center items-center  mt-[120px]'>
                <div className='w-fit text-center leading-none text-white py-[120px] tracking-[-1px]'>
                    <h1 className='text-[38px] font-clashdisplaylight'>Products having a <span className='text-[58px] font-clashdisplay'>bad design</span></h1>
                    <h1 className='text-[38px] font-clashdisplaylight'> will impact the user experience <span className='text-[58px] font-clashdisplay'>negatively</span></h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection