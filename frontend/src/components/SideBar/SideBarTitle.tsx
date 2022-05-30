import SideBarItemContainer from "./SideBarItemContainer"

type SideBarTitlePropsType = {
    title?: string
    editable?: boolean
    updateMethod?(): void
}
const SideBarTitle = ({ props }: { props: SideBarTitlePropsType }) => {
    if (props.editable) {
        return (
            <SideBarItemContainer>

            </SideBarItemContainer>
        )
    }
    return (
        <SideBarItemContainer>
            <h1 className='lg:text-2xl text-5xl text-center'>
                {props.title === null || props.title === '' ? 'Title' : props.title}
            </h1>
        </SideBarItemContainer>
    )
}
export type {
    SideBarTitlePropsType
}
export default SideBarTitle
