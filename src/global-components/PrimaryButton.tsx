interface PrimaryButtonProps {
    button_text: string;
    border_color: string;
    text_color: string;
    font?: string;
    bg_color?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ button_text, border_color, text_color, font, bg_color }) => {
  return (
    <button className={`border border-${border_color} text-${text_color} rounded-[30px] bg-${bg_color} tracking-none active:scale-95 transition-all duration-300 ease-out py-2 px-14 text-[18px] md:text-[22px] font-${font ? font : 'font-clashdisplaysemibold'}`}>{button_text}</button>
  )
}

export default PrimaryButton