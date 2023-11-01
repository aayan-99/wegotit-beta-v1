import { design } from "../../../mockapi/goodDesign"
import { Link } from 'react-router-dom'

const GoodDesign = () => {
    return (
        <div className='w-full pb-[80px] md:pb-[200px] bg-primary'>
            <h1 className='font-clashdisplay pt-[50px] md:pt-[160px] pb-[10px] text-center text-[65px] text-black tracking-[-2px] leading-none'>a good <span className="font-clashdisplaysemibold">design</span>?</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='font-clashdisplaylight text-[50px] md:text-[80px] text-center tracking-[-2px] leading-none mb-12'>an <span>impeccable</span> <span className="font-clashdisplaysemibold text-[80px] md:text-[130px]">solution</span></h1>
                <Link to={`/gooddesign`}>
                    <button className={` text-[] rounded-[30px] border hover:bg-black hover:border-none hover:text-white border-white bg-white tracking-none active:scale-95 transition-all duration-300 ease-out py-2 px-14 text-[18px] md:text-[22px] font-clashdisplaysemibold`}>{design?.button_text}</button>
                </Link>
            </div>
        </div>
    )
}

export default GoodDesign