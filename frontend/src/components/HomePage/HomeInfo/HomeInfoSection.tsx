
export type HomeInfoSectionPropsType = {
    header: string
    subheader: string
    image: string,
    width: number,
    height: number
}

const HomeInfoSection = ({ props }: { props: HomeInfoSectionPropsType }) => {
    return (
        <>
            <section className='grid grid-cols-12 col-span-12 h-screen'>
                <div className='lg:col-span-3 col-span-1 bg-white'></div>
                <div className='grid grid-cols-12 lg:col-span-6 col-span-10 place-content-center bg-white text-center lg:pb-20'>
                    <h1 className='col-span-12 text-5xl font-bold pb-5'>
                        {props.header}
                    </h1>
                    <div className='lg:col-span-2 col-span-1'></div>
                    <div className='lg:col-span-8 col-span-10 lg:text-base text-3xl'>
                        {props.subheader}
                    </div>
                    <div className='lg:col-span-2 col-span-1'></div>
                </div>
                <div className='lg:col-span-3 col-span-1 bg-white'></div>
                <div className='lg:col-span-3'></div>
                <div className='grid lg:col-span-6 col-span-full place-content-center lg:relative lg:h-64'>
                    <img
                        src={props.image}
                        alt="skilltree-example"
                        className='lg:absolute lg:-top-10 rounded-lg'
                        width={props.width}
                        height={props.height}
                    />
                </div>
                <div className='lg:col-span-3'></div>
            </section >
            <div className='col-span-full h-52 bg-white'></div>
        </>
    )
}
export default HomeInfoSection