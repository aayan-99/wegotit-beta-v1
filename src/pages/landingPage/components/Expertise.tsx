import { useState } from 'react'
import { expertise } from '../../../mockapi/expertise';
import PrimaryButton from '../../../global-components/PrimaryButton';

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
        <div className='w-full bg-[#181818] pb-[200px]'>
            <h1 className='font-clashdisplaysemibold tracking-none text-[40px] md:text-[60px] text-white text-center pt-[140px] pb-[70px]'><span className='text-primary'>services</span></h1>
            <div className='w-full flex flex-col justify-center items-center'>
                {/* dropdowns */}
                {
                    expertise.content.map((data) => (
                        <div className='w-full flex flex-col items-center mb-[60px]' key={data?.id}>
                            <h1 className='font-clashdisplaylight text-[44px] active:scale-95 transition-all duration-300 ease-out text-white leading-none cursor-pointer' onClick={() => dropdownToggle(data?.title)}>{activeExpertise !== data?.title ? <span>+</span> : <span>-</span>} {data?.title} {activeExpertise !== data?.title ? <span>+</span> : <span>-</span>}</h1>
                            <div className={`mt-3 w-[80%] ${activeExpertise == data?.title ? 'max-h-[300px]' : 'max-h-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                                {
                                    data?.options?.map((sub_data) => (
                                        <div className='w-full flex justify-center items-center mb-2' key={sub_data?.id}>
                                            <h1 className='font-clashdisplaylight text-[30px] text-white leading-none'>{sub_data?.title}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center'>
                <PrimaryButton border_color="white" text_color="white" button_text='about other services' font='clashdisplaysemibold' />
            </div>
        </div>
    )
}

export default Expertise