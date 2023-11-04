import React from 'react'

const FontSection = () => {

    const typedata = [
        {
            id: 0,
            title: 'Serif',
            desc: 'In typography, a serif is a small line or stroke regularly attached to the end of a larger stroke in a letter or symbol within a particular font or family of fonts. A typeface or "font family" making use of serifs is called a serif typeface (or serifed typeface). Serifed fonts are widely used for body text because they are considered easier to read than sans-serif fonts in print.',
            fontText: ['Novel', 'Newspaper', 'Magazine'],
        },
        {
            id: 1,
            title: 'San-Serif',
            desc: 'In typography and lettering, a sans-serif, sans serif, gothic, or simply sans letterform is one that does not have extending features called "serifs" at the end of strokes. They are often used to convey simplicity and modernity or minimalism. Sans-serif typefaces have become the most prevalent for display of text on computer screens.',
            fontText: ['Read me', 'Widened', 'numeric', 'SPORTS', 'Marker'],
        },
    ];

    return (
        <div className="w-full bg-black pb-[100px]">
            <h1 className={`text-center text-white text-[35px] md:text-[60px] pt-[120px] pb-[90px]`}><span className="text-primary font-clashdisplaysemibold ">typograhy</span> <span className="font-300">x</span> <span className="text-primary font-clashdisplaysemibold ">fonts</span></h1>
            <div className="w-[85%] md:w-[80%] xl:w-[60%] mx-auto my-10 flex lg:flex-row flex-col gap-6">
                <div className="w-full lg:w-[50%] gap-2 md:gap-5 p-8 md:p-14 md:pb-16 md:px-20 border-2 border-white rounded-[25px] flex flex-col justify-start">
                    <h1 className="text-[45px] text-white pb-5 leading-none font-[300]"><span className="text-primary">two</span> fonts</h1>
                    <div>
                        <h1 className="text-white font-[700] text-[26px] font-clashdisplay">Subheading</h1>
                        <p className="text-white font-[400] text-[15px] opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="text-white font-[700] text-[26px] font-clashdisplay">Another Subheading</h1>
                        <p className="text-white font-[400] text-[15px] opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] gap-2 md:gap-5 p-8 md:p-14 md:pb-16 md:px-20 border-2 border-white rounded-[25px] flex flex-col justify-start">
                    <h1 className="text-[45px] text-white pb-5 leading-none font-[300]"><span className="text-primary">too many</span> fonts</h1>
                    <div>
                        <h1 className="text-white font-[700] text-[26px] font-clashdisplaybold">Subheading</h1>
                        <p className="text-white font-[400] text-[17px] garamond opacity-90">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="text-white font-[700] text-[26px] garamond italic">Another Subheading</h1>
                        <p className="text-white font-[400] text-[15px] opacity-90">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto pt-14">
                <div className="w-[85%] md:w-[80%] xl:w-[65%] mx-auto flex flex-col lg:flex-row gap-6 px-10">
                    <div className="w-full lg:w-[50%] gap-2 md:gap-5 p-8 md:p-14 md:px-20 border-2 border-white rounded-[25px] flex flex-col justify-start">
                        <h1 className="text-[45px] text-white font-[300] font-clashdisplay tracking-[-0.5px]">I want your eye here</h1>
                        <div>
                            <h1 className="text-white font-[600] text-[23px] opacity-80 pb-5">THEN IT CAN GO HERE</h1>
                            <p className="text-white font-[300] text-[18px] opacity-70">And now it can (attempt) to read this paragraph of filler text, if that's your thing.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] gap-2 md:gap-5 p-8 md:p-14 md:px-20 border-2 border-white rounded-[25px] flex flex-col justify-center">
                        <div>
                            <p className="text-white font-[300] text-[18px] opacity-95">I want your eye here</p>
                            <p className="text-white font-[300] text-[18px] opacity-95">Then it can go here</p>
                            <p className="text-white font-[300] text-[18px] opacity-95">And now it can (attempt) to read this paragraph of filler text, if that's your thing.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[85%] mx-auto flex flex-col text-white mt-24 px-10">
                    <p className="text-[28px]">Typography</p>
                    <p className="text-[14px]">is the art and technique of arranging type to make written language legible, readable, and visually appealing. It involves selecting typefaces, point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), as well as adjusting the space between pairs of letters (kerning).</p>
                    <p className="text-[14px]">Typography plays a crucial role in <span className="text-[28px]">design</span>,</p>
                    <p className="text-[14px]">influencing how users perceive and interact with written content.</p>
                </div>
                <div className="w-[85%] mx-auto h-0.5 bg-white bg-opacity-30 my-20"></div>
                <div className='w-[85%] mx-auto'>
                {
                    typedata?.map((data) => (
                        <React.Fragment key={data?.id}>
                            <div className="w-full text-white px-10">
                                <h1 className={`${data?.title == 'Serif' ? 'text-[75px] garamond font-[500]' : 'montserrat font-[300] text-[66px]'}`}>{data?.title}</h1>
                                <p className={`text-[14px] ${data?.title == 'Serif' ? 'garamond opacity-90' : 'montserrat opacity-75'}`}>{data?.desc}</p>
                                <div className="flex flex-wrap w-full gap-10">
                                    {
                                        data?.fontText?.map((text, i) => (
                                            <p className="text-[35px]" key={i}>{text}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-white bg-opacity-30 my-20"></div>
                        </React.Fragment>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default FontSection