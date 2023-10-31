import Slider from "react-slick";

interface DesignTextCarouselProps {
    content: {
        id: number
        title: string;
    }[];
};

const DesignTextCarousel: React.FC<DesignTextCarouselProps> = ({ content }) => {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,

    };

    return (
        <div className='w-[85%] md:w-[97%] mx-auto mb-16'>
            <Slider {...settings}>
                {
                    content?.map((data) => (
                        <h1 key={data?.id} className="font-clashdisplaysemibold text-[48px] md:text-[58px] lg:text-[68px] text-center">{data?.title}</h1>
                    ))
                }
            </Slider>
        </div>
    )
}

export default DesignTextCarousel