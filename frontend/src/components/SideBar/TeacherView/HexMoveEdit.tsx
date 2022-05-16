import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { changeHexMoveEditModeToOff, changeHexMoveEditModeToOn, clearStartingHexagon, hexMoveDeselectDisableSwitch } from "../../PanZoomHexGrid/PanModeSlices"

const HexMoveEdit = () => {
    const hexMoveDeselectDisable = useReduxSelector(state => state.panMode.hexMoveDeselectDisable)
    const dispatch = useReduxDispatch()
    return (
        <section id='pathedit' className='grid place-content-center gap-4 md:fixed md:w-1/6 md:left-10 md:top-40 md:h-1/3 z-10 bg-paper-yellow top-3/4 absolute w-full rounded-lg opacity-95 h-1/3 p-2'>
            <h1
                className='text-2xl text-center'
            >
                Move Hexagons Mode
            </h1>
            <ol className='pb-2 opacity-50 text-lg'>
                <li>1. Click a Node</li>
                <li>2. Click another Node</li>
            </ol>
            <button
                className='bg-orange rounded-full p-1 px-2 shadow-lg hover:bg-dark-orange'
                onClick={() => {
                    dispatch(changeHexMoveEditModeToOff())
                    dispatch(clearStartingHexagon())
                    dispatch(hexMoveDeselectDisableSwitch(true))

                }}
            >
                QUIT
                <span className='pl-2 opacity-50 text-lg text-center'>
                    shortcut: q key
                </span>
            </button>
            <button
                className='bg-orange rounded-full p-1 px-2 disabled:opacity-50 shadow-lg hover:bg-dark-orange'
                disabled={hexMoveDeselectDisable}
                onClick={() => {
                    dispatch(hexMoveDeselectDisableSwitch(true))
                    dispatch(changeHexMoveEditModeToOn())
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

export default HexMoveEdit
