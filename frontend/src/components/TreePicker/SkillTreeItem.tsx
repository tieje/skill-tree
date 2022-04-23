import { SkillTreePickerTreeType } from "../../types/Types"
import ReactTimeago from "react-timeago"

const SkillTreeItem = ({ props }: { props: SkillTreePickerTreeType }) => {
    return (
        <div className='relative rounded-lg grid border-2 border-gray h-72 hover:border-russian-blue hover:bg-gray'>
            <div className='grid justify-center'>
                <img
                    src={props.image_address}
                    alt={props.name}
                    className='rounded-t-lg object-cover md:h-52'
                />
            </div>
            <div className='absolute bottom-5 left-5 grid gap-1 pr-2'>
                <h1 className='text-lg truncate'>
                    {props.name}
                </h1>
                <h2 className='text-xs opacity-50 truncate'>
                    Viewed <ReactTimeago date={props.last_edit_timestamp} />
                </h2>
            </div>
        </div >
    )
}
export default SkillTreeItem
