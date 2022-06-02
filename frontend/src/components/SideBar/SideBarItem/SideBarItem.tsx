import { ComponentTypes, ReduxMethod, UpdateMethodType } from "../../../types/Types"
import SideBarImgAddress from "./SideBarImgAddress"
import SideBarItemEditable from "./SideBarItemEditable/SideBarItemEditable"
import SideBarItemEditStateTrue from "./SideBarItemEditStateTrue/SideBarItemEditStateTrue"
import SideBarTitle from "./SideBarTitle"

interface SideBarItemPropsType {
    componentType: ComponentTypes
    editable?: boolean
    skill_tree_id?: number
    hex_id?: number
    EditState?: boolean
    updateMethod?: UpdateMethodType
    shortcutKey?: string
    toggleEditFalseMethod?(): ReduxMethod
    toggleEditTrueMethod?(): ReduxMethod
    changeTextMethod?(payload: any): ReduxMethod
    title?: string
    imageAddress?: string
}
const SideBarItem = ({ props }: { props: SideBarItemPropsType }) => {
    if (props.EditState) {
        return (
            <>
                <SideBarItemEditStateTrue props={props} />
            </>
        )
    }
    if (props.editable) {
        switch (props.componentType) {
            case 'Image Address':
                return (
                    <>
                        <SideBarItemEditable props={props} />
                        <SideBarImgAddress imageAddress={props.imageAddress} />
                    </>
                )
            case 'Title':
                return (
                    <>
                        <SideBarItemEditable props={props} />
                        <SideBarTitle title={props.title} />
                    </>
                )
        }
    }
    switch (props.componentType) {
        case 'Image Address':
            return (
                <>
                    <SideBarImgAddress imageAddress={props.imageAddress} />
                </>
            )
        case 'Title':
            return (
                <>
                    <SideBarTitle title={props.title} />
                </>
            )
    }
}
export type {
    SideBarItemPropsType,
}
export default SideBarItem