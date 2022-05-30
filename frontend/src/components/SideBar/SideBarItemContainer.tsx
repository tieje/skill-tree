
const SideBarItemContainer: React.FC = ({ children }) => {
    return (
        <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98 text-xl md:text-3xl lg:text-base'>
            {children}
        </div>
    )
}

export default SideBarItemContainer
