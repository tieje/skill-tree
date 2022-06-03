import { ComponentTypes } from "../../../../types/Types"
import DefaultSideBarItemContainer from "../DefaultSideBarItemContainer"

const SideBarItemError = ({ componentType }: { componentType: ComponentTypes }) => {
    return (
        <DefaultSideBarItemContainer>
            <h1 className='text-2xl text-left'>
                {componentType}
            </h1>
        </DefaultSideBarItemContainer>
    )
}
export default SideBarItemError