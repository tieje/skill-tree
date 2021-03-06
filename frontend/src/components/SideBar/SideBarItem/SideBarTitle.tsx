const SideBarTitle = ({ title }: { title?: string }) => {
    return (
        <h1 className='lg:text-2xl text-5xl text-center'>
            {!title ? 'Title' : title}
        </h1>
    )
}
export default SideBarTitle
