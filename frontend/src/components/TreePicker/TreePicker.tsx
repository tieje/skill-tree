import { nanoid } from "nanoid"
import { useGetSkillTreePickerDataByUserIdQuery } from "../../redux/api"
import { useReduxSelector } from "../../redux/hooks"
import { LEARN, TEACH } from "../../Variables/StaticVariables"
import SkillTreeItem from "./SkillTreeItem"
import CreateSkillTree from "./SkillTreeOptions"
import TreeFilter from "./TreeFilter"

const TreePicker = () => {
    const user_id = useReduxSelector(state => state.auth.user_id)
    const { data, isLoading, error } = useGetSkillTreePickerDataByUserIdQuery(user_id)
    const treeFilter = useReduxSelector(state => state.treePicker.treeFilter)
    const treeFocused = useReduxSelector(state => state.treePicker.treeFocused)
    const labels = [LEARN, TEACH]
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
                    <CreateSkillTree />
                    <div className='grid grid-cols-5 gap-5'>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className='grid grid-cols-6 gap-4'>
            <div className='w-full border border-l-white border-t-white border-b-white border-r-gray col-span-1 h-screen grid'>
                
            </div>
            <div className='md:pr-40 col-span-5'>
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
                <CreateSkillTree />
                <div className='grid grid-cols-5 gap-5'>
                    {treeFilter === LEARN ? data.learning.map((item) => {
                        return (
                            <SkillTreeItem key={nanoid()} props={item} />
                        )
                    }) : treeFilter === TEACH ? data.teaching.map((item) => {
                        return (
                            <SkillTreeItem key={nanoid()} props={item} />
                        )
                    })
                        : null}
                </div>
            </div>
        </section>
    )
}

export default TreePicker
