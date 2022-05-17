const HomeTextSectionContainer: React.FC = ({ children }) => {
    return (
        <section className='grid grid-cols-12 col-span-12 bg-white place-content-center border border-black'>
            <div className='grid grid-cols-12 col-span-12 border border-black'>
                {children}
            </div>
        </section>
    )
}
export default HomeTextSectionContainer
