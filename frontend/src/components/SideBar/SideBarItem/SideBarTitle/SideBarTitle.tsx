type SideBarTitlePropsType = {
    title: string
}
const SideBarTitle = ({ props }: { props: SideBarTitlePropsType }) => {
    return (
        <h1 className='lg:text-2xl text-5xl text-center'>
            {props.title === null || props.title === '' ? 'Title' : props.title}
        </h1>
    )
}
export type { SideBarTitlePropsType }
export default SideBarTitle
