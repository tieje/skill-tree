import { nanoid } from "nanoid"
import { SAMPLE_TREES } from "../../StaticVariables"
import { SkillTreeItemPropsType } from "../../types/Types"

const TreePicker = () => {
    const labels = ['Learn', 'Teach']
    return (
        <section>
            <div className='md:px-40'>
                <ul className='md:py-5 grid grid-flow-col gap-10 justify-start'>
                    {labels.map((label) => {
                        return (
                            <TreeFilter label={label} />
                        )
                    })}
                </ul>
                <h1 className='text-sm opacity-60'>
                    Recently Viewed
                </h1>
                <CreateSkillTree />
                <div className='grid grid-cols-5 gap-5'>
                    {SAMPLE_TREES.map((item) => {
                        return (
                            <SkillTreeItem key={nanoid()} props={item} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const TreeFilter = ({ label }: { label: string }) => {
    return (
        <li className='grid place-content-center text-2xl underline underline-offset-8'>
            <button>
                {label}
            </button>
        </li>
    )
}

const CreateSkillTree = () => {
    return (
        <button className='border my-5 p-2 rounded-lg shadow-lg hover:border-russian-blue'>
            <span className='text-2xl'>&#9998;</span> New Skill Tree <span className='text-2xl'>+</span>
        </button>
    )
}

const SkillTreeItem = ({ props }: { props: SkillTreeItemPropsType }) => {
    return (
        <div className='relative rounded-lg grid border-2 border-gray h-72 '>
            <div className='grid justify-center'>
                <img
                    src={props.url}
                    alt={props.title}
                    className='rounded-t-lg object-cover md:h-52'
                />
            </div>
            <div className='absolute bottom-5 left-5 grid gap-1 pr-2'>
                <h1 className='text-lg truncate'>
                    {props.title}
                </h1>
                <h2 className='text-xs opacity-50 truncate'>
                    Viewed/Edited {props.recency}
                </h2>
            </div>
        </div >
    )
}

export default TreePicker
