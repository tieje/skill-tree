import skilltree_example from '../../../assets/images/skilltree_example.png'
const HomeInfo = () => {
    return (
        <div className='grid grid-cols-12 w-screen'>
            <section className='grid grid-cols-12 col-span-12 h-screen'>
                <div className='col-span-3 bg-white'></div>
                <div className='grid grid-cols-12 col-span-6 place-content-center bg-white text-center'>
                    <h1 className='col-span-12 text-5xl font-bold pb-5'>
                        There's a lot to learn out there.
                    </h1>
                    <div className='col-span-2'></div>
                    <div className='col-span-8'>
                        Learning is often an overwhelming process for everyone.
                        A skill tree can help by providing a visualization of the bigger picture.
                    </div>
                    <div className='col-span-2'></div>
                </div>
                <div className='col-span-3 bg-white'></div>
                <div className='md:col-span-3'></div>
                <div className='grid md:col-span-6 col-span-full place-content-center md:relative h-96'>
                    <img
                        src={skilltree_example}
                        alt="skilltree-example"
                        className='md:absolute md:-top-10 rounded-lg'
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className='md:col-span-3'></div>
                <div className='col-span-12 bg-white flex-grow'></div>
            </section >
        </div >
    )
}

export default HomeInfo
