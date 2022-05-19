
export type HomeInfoSectionPropsType = {
    header: string
    subheader: string
    image: string,
    width: number,
    height: number
}

const HomeInfoSection = ({ props }: { props: HomeInfoSectionPropsType }) => {
    return (
        <section className='grid grid-cols-12 col-span-12 h-screen'>
            <div className='col-span-3 bg-white'></div>
            <div className='grid grid-cols-12 col-span-6 place-content-center bg-white text-center mb-5'>
                <h1 className='col-span-12 text-5xl font-bold pb-5'>
                    {props.header}
                </h1>
                <div className='col-span-2'></div>
                <div className='col-span-8'>
                    {props.subheader}
                </div>
                <div className='col-span-2'></div>
            </div>
            <div className='col-span-3 bg-white'></div>
            <div className='md:col-span-3'></div>
            <div className='grid md:col-span-6 col-span-full place-content-center md:relative h-96'>
                <img
                    src={props.image}
                    alt="skilltree-example"
                    className='md:absolute md:-top-10 rounded-lg'
                    width={props.width}
                    height={props.height}
                />
            </div>
            <div className='md:col-span-3'></div>
            <div className='col-span-12 bg-white flex-grow'></div>
        </section >
    )
}
export default HomeInfoSection