import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { LEARN, TEACH } from "../../Variables/StaticVariables"
import { TreeFilterToLearn, TreeFilterToTeach } from "./TreePickerSlice"

const TreeFilter = ({ label }: { label: string }) => {
    const treeFilter = useReduxSelector(state => state.treePicker.treeFilter)
    const dispatch = useReduxDispatch()
    const styling: string = 'grid place-content-center text-2xl hover:underline hover:underline-offset-8'
    const underline = ' underline underline-offset-8'
    const coloring = ' text-russian-blue'
    const handleClick = () => {
        switch (label) {
            case LEARN:
                dispatch(TreeFilterToLearn())
                break
            case TEACH:
                dispatch(TreeFilterToTeach())
                break
        }
    }
    if (treeFilter === label) {
        return (
            <li className={styling + underline + coloring}>
                <button onClick={handleClick}>
                    {label}
                </button>
            </li>
        )
    }
    return (
        <li className={styling}>
            <button onClick={handleClick}>
                {label}
            </button>
        </li>
    )
}
export default TreeFilter
