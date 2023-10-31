interface PageHeaderProps {
    title: string;
    text_color: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, text_color }) => {
  return (
    <h1 className={`font-clashdisplaysemibold text-center text-${text_color} text-[60px]  pt-[30px] md:pt-[70px] pb-[30px]`}>{title}</h1>
  )
}

export default PageHeader