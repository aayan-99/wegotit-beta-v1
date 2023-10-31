import { design } from "../../../mockapi/goodDesign"
import { Link } from 'react-router-dom'

const GoodDesign = () => {
    return (
        <div className='w-full pb-[200px]'>
            <h1 className='font-clashdisplaylight pt-[50px] md:pt-[160px] py-[30px] text-center text-[65px]  tracking-[-2px] leading-none'>a good design?</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='font-clashdisplaylight text-[50px] md:text-[80px] tracking-[-2px] leading-none mb-16'>an <span className="font-clashdisplaysemibold">impeccable</span> solution</h1>
                <Link to={`/gooddesign`}>
                    <button className={` text-[] rounded-[30px] bg-primary tracking-none active:scale-95 transition-all duration-300 ease-out py-2 px-14 text-[18px] md:text-[22px] font-clashdisplaysemibold`}>{design?.button_text}</button>
                </Link>
            </div>
        </div>
    )
}

export default GoodDesign