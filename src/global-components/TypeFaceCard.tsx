import PrimaryButton from './PrimaryButton'

interface TypeFaceCardProps {
    content: {
        id: number;
        title: string;
        desc: string;
        button_text: string;
    }[];
}

const TypeFaceCard: React.FC<TypeFaceCardProps> = ({ content }) => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-[30px] lg:gap-[100px] xl:gap-[200px] px-5'>
    {
      content?.map((data) => (
        <div key={data?.id} className={`${data?.id === 1 ? 'font-montserrat' : 'font-garamond font-serif'} flex flex-col justify-center items-center text-white`}>
          <h1 className={`text-[70px] md:text-[98px] lg:text-[120px] xl:text-[142px] tracking-none ${data?.id === 1 ? 'font-[200]' : ''}`}>{data?.title}</h1>
          <p className="max-w-[550px] px-2 text-center text-[14px] xl:text-[17px] mb-5 md:mb-10">{data?.desc}</p>
          <PrimaryButton button_text={data?.button_text} border_color="#fff" text_color="#fff" font={data?.id === 1 ? 'font-montserrat' : 'font-garamond font-serif'} />
        </div>
      ))
    }
  </div>
  )
}

export default TypeFaceCard