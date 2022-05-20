import { nanoid } from "nanoid"
import { HOME_INFO_SECTION_STATE } from "../../../Variables/HomePageState"
import HomeInfoSection, { HomeInfoSectionPropsType } from "./HomeInfoSection"

const HomeInfo = () => {
    return (
        <div className='grid grid-cols-12 w-screen'>
            <div className='col-span-full h-20 bg-white'></div>
            {HOME_INFO_SECTION_STATE.map((val: HomeInfoSectionPropsType) => {
                return (
                    <HomeInfoSection key={nanoid()} props={val} />
                )
            })}
        </div >
    )
}

export default HomeInfo
