import { useState } from 'react'
import { expertise } from '../../../mockapi/expertise';
import { Link } from 'react-router-dom';

const Expertise = () => {

    const [activeExpertise, setActiveExpertise] = useState<string | null>(null);

    const dropdownToggle = (title: string) => {
        if (activeExpertise == title) {
            setActiveExpertise(null);
        } else if (activeExpertise == null) {
            setActiveExpertise(title);
        } else {
            setActiveExpertise(title);
        }
    };


    return (
        <div className='w-full bg-black pb-[130px]'>
            <h1 className='font-clashdisplaysemibold tracking-none text-[40px] md:text-[60px] text-white text-center pt-[140px] pb-[50px]'><span className='text-primary'>services</span></h1>
            <div className='w-full flex flex-col justify-center items-center'>
                {/* dropdowns */}
                {
                    expertise.content.map((data) => (
                        <div className='w-full flex flex-col items-center mb-[60px]' key={data?.id}>
                            <h1 className='font-clashdisplaylight text-[30px] lg:text-[44px] active:scale-95 transition-all duration-300 ease-out text-white leading-none' onClick={() => dropdownToggle(data?.title)}>{activeExpertise !== data?.title ? <span>+</span> : <span>-</span>} {data?.title} {activeExpertise !== data?.title ? <span>+</span> : <span>-</span>}</h1>
                            <div className={`w-full ${activeExpertise == data?.title ? 'pt-10 max-h-[300px]' : 'max-h-0 opacity-30'} grid grid-cols-1 justify-items-center md:flex justify-center items-center md:gap-10 transition-all duration-500 ease-in-out overflow-hidden`}>
                                {
                                    data?.options?.map((sub_data) => (
                                        <div className={`w-full max-w-fit md:max-w-[100px] lg:max-w-fit flex justify-center items-center mb-6 ${sub_data?.id === 2 ? ' max-w-fit md:max-w-[180px] lg:max-w-fit' : ''}`} key={sub_data?.id}>
                                            <Link to={``} className='font-clashdisplaylight text-[20px] lg:text-[28px] hover:text-primary hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out text-white opacity-60 text-center leading-none'>{sub_data?.title}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Expertise