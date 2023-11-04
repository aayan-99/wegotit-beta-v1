import { Link } from "react-router-dom";
import PageHeader from "../../../global-components/PageHeader"
import up from '../../../assets/icons/up.svg'

const ColorPsychologyPage = () => {

    const color_data = [
        {
            color_id: 0,
            color: 'red',
            color_code: '#E81A1A',
            emotions: [
                'love',
                'romance',
                'gentle',
                'warmth',
                'comfort',
                'energy',
                'excitement',
                'intensity',
                'life',
                'blood'
            ]
        },
        {
            color_id: 1,
            color: 'orange',
            color_code: '#FF7700',
            emotions: [
                'happy',
                'energetic',
                'excitement',
                'enthusiasm',
                'warmth',
                'wealth',
                'prosperity',
                'sophistication',
                'change',
                'stimulation'
            ]
        },
        {
            color_id: 2,
            color: 'yellow',
            color_code: '#FFBB00',
            emotions: [
                'happiness',
                'laughter',
                'cheery',
                'warmth',
                'optimism',
                'hunger',
                'intensity',
                'frustration',
                'anger',
                'attention-grabbing'
            ]
        },
        {
            color_id: 3,
            color: 'green',
            color_code: '#76C923',
            emotions: [
                'natural',
                'cool',
                'growth',
                'money',
                'health',
                'envy',
                'tranquility',
                'harmony',
                'calmness',
                'fertility'
            ]
        },
        {
            color_id: 4,
            color: 'blue',
            color_code: '#08ABF3',
            emotions: [
                'calmness',
                'serenity',
                'cold',
                'uncaring',
                'wisdom',
                'loyalty',
                'truth',
                'focused',
                'un-appetizing'
            ]
        },
        {
            color_id: 5,
            color: 'purple',
            color_code: '#9D42D1',
            emotions: [
                'royalty',
                'wealth',
                'sophistication',
                'wisdom',
                'exotic',
                'spiritual',
                'prosperity',
                'respect',
                'mystery'
            ]
        },
        {
            color_id: 6,
            color: 'pink',
            color_code: '#E3297A',
            emotions: ['romance', 'love', 'gentle', 'calming', 'agitation']
        },
        {
            color_id: 7,
            color: 'brown',
            color_code: '#C27A3C',
            emotions: [
                'reliability',
                'stability',
                'friendship',
                'sadness',
                'warmth',
                'comfort',
                'security',
                'natural',
                'organic'
            ]
        },
        {
            color_id: 8,
            color: 'black',
            color_code: '#090909',
            emotions: [
                'authority',
                'power',
                'strength',
                'evil',
                'intelligence',
                'thinning/slimming',
                'death or mourning'
            ]
        },
        {
            color_id: 9,
            color: 'white',
            color_code: '#FFFFFF',
            emotions: [
                'purity',
                'innocence',
                'cleanliness',
                'sense of space',
                'neutrality'
            ]
        }
    ];

    const handleScrollToTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='w-full pb-[200px] pt-10 relative'>
            <PageHeader title="colors and it's brilliance" text_color="black" />
            <div className="w-full md:w-[70%] xl:w-[75%] mx-auto grid grid-cols-2 xl:grid-cols-5">
                {
                    color_data?.map((color) => (
                        <div key={color?.color_id} style={{ backgroundColor: color?.color_code }} className={`w-full h-[230px] p-4 flex flex-col ${color?.color === 'white' ? 'border-r border-b' : ''}`}>
                            <h1 className={`text-[45px] font-clashdisplaybold font-[700] mb-2 leading-none text-${color?.color === 'yellow' || color?.color === 'green' || color?.color === 'white' ? 'black' : 'white'}`}>{color?.color}</h1>
                            {
                                color?.emotions?.map((emotion, i) => (
                                    <p key={i} className={`text-[15px] font-clashdisplay leading-none text-${color?.color === 'yellow' || color?.color === 'green' || color?.color === 'white' ? 'black' : 'white'}`}>{emotion}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <Link to={``} className='absolute bottom-0 right-0 flex justify-end items-center px-10 pb-8'>
                <div onClick={handleScrollToTopClick} className='w-full max-w-[65px]'>
                    <img src={up} className='w-full' alt="" />
                </div>
            </Link>
        </div>
    )
}

export default ColorPsychologyPage