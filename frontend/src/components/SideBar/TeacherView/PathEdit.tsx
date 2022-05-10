import { useDeletePathMutation } from "../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { changePathEditModeToOff, changePathEditModeToOn, clearPathFocused, clearStartingHexagon, pathDeleteDisableSwitch, pathDeselectDisableSwitch } from "../../PanZoomHexGrid/PanModeSlices"

const PathEdit = () => {
    const pathDeselectDisable = useReduxSelector(state => state.panMode.pathDeselectDisable)
    const pathDeleteDisable = useReduxSelector(state => state.panMode.pathDeleteDisable)
    const pathFocused = useReduxSelector(state => state.panMode.pathFocused)
    const [deletePath] = useDeletePathMutation()
    const dispatch = useReduxDispatch()
    return (
        <section id='pathedit' className='grid place-content-center gap-4 md:fixed md:w-1/6 md:left-10 md:top-40 md:h-1/3 z-10 bg-paper-yellow top-3/4 absolute w-full rounded-lg opacity-95 h-1/3 p-2'>
            <h1
                className='text-2xl text-center'
            >
                Path Edit Mode
            </h1>
            <button
                className='bg-orange rounded-full p-1 px-2 shadow-lg hover:bg-dark-orange'
                onClick={() => {
                    dispatch(changePathEditModeToOff())
                    dispatch(clearStartingHexagon())
                    dispatch(clearPathFocused())
                    dispatch(pathDeselectDisableSwitch(true))
                    dispatch(pathDeleteDisableSwitch(true))
                }}
            >
                QUIT
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: q key
                </span>
            </button>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-50 shadow-lg hover:bg-dark-orange'
                disabled={pathDeleteDisable}
                onClick={() => {
                    dispatch(pathDeleteDisableSwitch(true))
                    dispatch(clearPathFocused())
                    deletePath({ path_id: pathFocused.path_id })
                }}
            >
                DELETE
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: a key
                </span>
            </button>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-50 shadow-lg hover:bg-dark-orange'
                disabled={pathDeselectDisable}
                onClick={() => {
                    dispatch(clearStartingHexagon())
                    dispatch(pathDeselectDisableSwitch(true))
                    dispatch(changePathEditModeToOn())
                }}
            >
                DESELECT
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: z key
                </span>
            </button>
        </section>
    )
}

export default PathEdit
