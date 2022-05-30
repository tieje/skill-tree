// import { useReduxDispatch } from "../../redux/hooks"
import SideBarTitle, { SideBarTitlePropsType } from "./SideBarTitle"

type ComponentTypes = 'Title' | 'Note' | 'Image Address'
type SideBarItemPropsType = {
    componentType: ComponentTypes
}
const SideBarItem = ({ props }: { props: SideBarItemPropsType }) => {
    // const dispatch = useReduxDispatch()
    if (props.componentType === 'Title') {
        const TitleProps: SideBarTitlePropsType = {
            title: props.componentType,
            //updateMethod: dispatch(createHex())
        }
        return (
            <SideBarTitle props={TitleProps} />
        )
    }
}
export type {
    SideBarItemPropsType
}
export default SideBarItem