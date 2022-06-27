import { nanoid } from "nanoid"
import { useGetSkillTreePickerDataByUserIdQuery } from "../../redux/api"
import { useReduxSelector } from "../../redux/hooks"
import { SkillTreePickerTreeType } from "../../types/Types"
import { OrderByTimeStamp } from "../../utils/utils"
import { LEARN, TEACH } from "../../Variables/StaticVariables"
import SkillTreeItem from "./SkillTreeItem"
import CreateButton, { CreateButtonPropsType } from "./CreateButton"
import TreeFilter from "./TreeFilter"
import TreePickerSideBar from "./TreePickerSideBar"

const TreePicker = () => {
    const user_id = useReduxSelector(state => state.auth.user_id)
    const { data, isLoading, error } = useGetSkillTreePickerDataByUserIdQuery(user_id)
    const treeFilter = useReduxSelector(state => state.treePicker.treeFilter)
    const labels = [LEARN, TEACH]
    const CreateButtonProps: CreateButtonPropsType = {
        symbolLeft: '&#9998;',
        buttonText: ' New Skill Tree ',
        symbolRight: '+',
        createMethod: 'createTree',
    }
    if (isLoading || error) {
        return (
            <section>
                <div className='md:pr-40'>
                    <ul className='md:py-5 grid grid-flow-col gap-10 justify-start'>
                        {labels.map((label) => {
                            return (
                                <TreeFilter key={nanoid()} label={label} />
                            )
                        })}
                    </ul>
                    <h1 className='text-sm opacity-60'>
                        Recently Viewed
                    </h1>
                    <CreateButton props={CreateButtonProps} />
                    <div className='grid grid-cols-5 gap-5'>
                    </div>
                </div>
            </section>
        )
    }
    const learningTreesOrderedByTimeStamp: SkillTreePickerTreeType[] = OrderByTimeStamp(data.learning)
    const teachingTreesOrderedByTimeStamp: SkillTreePickerTreeType[] = OrderByTimeStamp(data.teaching)
    return (
        <>
            <TreePickerSideBar />
            <section className='grid grid-cols-6 gap-4'>
                <div className='w-full col-span-2 h-screen grid'>

                </div>
                <div className='md:pr-40 col-span-4'>
                    <ul className='md:py-5 grid grid-flow-col gap-10 justify-start'>
                        {labels.map((label) => {
                            return (
                                <TreeFilter key={nanoid()} label={label} />
                            )
                        })}
                    </ul>
                    <h1 className='text-sm opacity-60'>
                        Recently Viewed
                    </h1>
                    <CreateButton props={CreateButtonProps} />
                    <div className='grid grid-cols-4 gap-5'>
                        {treeFilter === LEARN ? learningTreesOrderedByTimeStamp.map((item: SkillTreePickerTreeType) => {
                            return (
                                <SkillTreeItem key={nanoid()} props={item} />
                            )
                        }) : treeFilter === TEACH ? teachingTreesOrderedByTimeStamp.map((item: SkillTreePickerTreeType) => {
                            return (
                                <SkillTreeItem key={nanoid()} props={item} />
                            )
                        })
                            : null}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TreePicker
