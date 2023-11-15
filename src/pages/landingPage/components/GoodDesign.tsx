import { design } from "../../../mockapi/goodDesign"
import { Link } from 'react-router-dom'
import lockBlack from '../../../assets/icons/wegotit-icons-lock(black)-03.svg'

const GoodDesign = () => {
    return (
        <div className='w-full py-[150px] bg-primary sm:px-14'>
            <h1 className='font-clashdisplaylight pb-[30px] sm:pb-[10px] text-center text-[45px] md:text-[65px] text-black tracking-[-2px] leading-none'>a good <span className="font-clashdisplaysemibold">design</span>?</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='font-clashdisplaylight text-[50px] md:text-[80px] text-center tracking-[-2px] leading-none mb-12'>an <span>impeccable</span> <span className="font-clashdisplaysemibold text-[80px] md:text-[130px]">solution</span></h1>
                <Link to={`/`} className="relative flex flex-col justify-center items-center gap-2">
                    <button disabled className={`opacity-70 text-[] rounded-[30px] border  border-white bg-white tracking-none active:scale-95 transition-all duration-300 ease-out py-2 px-14 text-[18px] md:text-[22px] font-clashdisplaysemibold`}>{design?.button_text}</button>
                    <img src={lockBlack} alt="" className="w-[24px] md:w-[30px] absolute -bottom-[40px] md:top-[8px] md:-right-[50px]" />
                </Link>
            </div>
        </div>
    )
}

export default GoodDesign