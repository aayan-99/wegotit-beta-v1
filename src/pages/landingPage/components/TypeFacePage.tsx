import PrimaryButton from "../../../global-components/PrimaryButton"
import { Link } from 'react-router-dom'

const TypeFacePage = () => {

  return (
    <div className='w-full bg-[#181818] pb-[100px]'>
      <h1 className={`font-clashdisplaysemibold text-center text-white text-[35px] md:text-[60px] pt-[30px] md:pt-[120px] pb-[40px]`}>what is <span className="text-primary">typograhy</span> ?</h1>
      <div className="w-[75%] mx-auto flex lg:flex-row flex-col gap-20">
        <div className="w-full lg:w-[50%] gap-5 p-14 border-2 border-white rounded-[25px] flex flex-col justify-start">
          <h1 className="text-[45px] text-white font-[300]"><span className="text-primary">two</span> fonts</h1>
          <div>
            <h1 className="text-white font-[700] text-[26px] font-clashdisplay">Subheading</h1>
            <p className="text-white font-[400] text-[15px] opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
          </div>
          <div className="pt-8">
            <h1 className="text-white font-[700] text-[26px] font-clashdisplay">Another Subheading</h1>
            <p className="text-white font-[400] text-[15px] opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde in nulla sapiente aliquam non dolorum deleniti quia quas corporis rem?</p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] gap-5 p-14 border-2 border-white rounded-[25px] flex flex-col justify-start">
          <h1 className="text-[45px] text-white font-[300]"><span className="text-primary">two many</span> fonts</h1>
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
      <div className="w-full flex justify-center items-center mt-16">
        <Link to={`/typeface`}>
          <PrimaryButton border_color="white" text_color="white" button_text='know more about them' font='clashdisplaysemibold' />
        </Link>
      </div>
    </div>
  )
}

export default TypeFacePage