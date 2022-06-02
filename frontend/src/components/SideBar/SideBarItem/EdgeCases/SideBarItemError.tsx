import { ComponentTypes } from "../../../../types/Types"
import SideBarContainer from "../../SideBarContainer"
import SideBarItemContainer from "../SideBarItemContainer"

const SideBarItemError = ({ componentType }: { componentType: ComponentTypes }) => {
    return (
        <SideBarContainer>
            <SideBarItemContainer>
                <h1 className='text-2xl text-left'>
                    {componentType}
                </h1>
            </SideBarItemContainer>
        </SideBarContainer>
    )
}
export default SideBarItemError