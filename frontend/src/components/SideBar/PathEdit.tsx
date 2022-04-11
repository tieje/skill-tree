import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { changePathEditModeToOff } from "../PanZoomHexGrid/PanModeSlices"

const PathEdit = () => {
    const pathDeselectDisable = useReduxSelector(state => state.panMode.pathDeselectDisable)
    const pathDeleteDisable = useReduxSelector(state => state.panMode.pathDeleteDisable)
    const dispatch = useReduxDispatch()
    return (
        <section id='pathedit' className='grid place-content-center gap-4 md:fixed md:w-1/6 md:left-10 md:top-40 md:h-1/3 z-10 bg-paper-yellow top-3/4 absolute w-full rounded-lg opacity-95  h-1/3'>
            <h1
                className='text-2xl text-center'
            >
                Path Edit Mode
            </h1>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-60'
                onClick={() => dispatch(changePathEditModeToOff())}
                disabled={pathDeselectDisable}
            >
                DESELECT
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: z key
                </span>
            </button>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-60'
                onClick={() => dispatch(changePathEditModeToOff())}
                disabled={pathDeleteDisable}
            >
                DELETE
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: backspace key
                </span>
            </button>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-60'
                onClick={() => dispatch(changePathEditModeToOff())}
            >
                EXIT
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: q key
                </span>
            </button>
        </section>
    )
}

export default PathEdit
