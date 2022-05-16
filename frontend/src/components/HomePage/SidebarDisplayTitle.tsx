const SidebarDisplayTitle = ({ title }: { title: string }) => {
    return (
        <h1 className='text-2xl text-center'>
            {title === null || title === '' ? 'Title' : title}
        </h1>
    )
}
export default SidebarDisplayTitle
