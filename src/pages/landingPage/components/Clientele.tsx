import { clients } from '../../../mockapi/clientele'

const Clientele = () => {
    return (
        <div className='py-[150px]'>
            <div className='w-[90%] md:w-[80%] mx-auto'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 md:gap-x-4'>
                    {
                        clients?.map((client) => (
                            <div key={client?.id} className='w-full flex justify-center items-center '>
                                <img src={client?.logo} alt="Client Logo" className='w-full max-w-[250px] ' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Clientele