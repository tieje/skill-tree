import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'
import ImgAddress from './ImgAddress'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks'
import { TOOL_PAN } from 'react-svg-pan-zoom'
import { ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from './SideBarSlices'
import useEventListener from '@use-it/event-listener'
import { any } from '../../utils/utils'
import { INVISIBLE, CHECKBOXES, EDIT_ON, EDIT_CHOSEN } from '../../Variables/StaticVariables'
import { changeHexMoveEditModeToOn, changePathEditModeToOn, changeToDragMode, changeToPointerMode } from '../PanZoomHexGrid/PanModeSlices'
import PathEdit from './PathEdit'
import { useDeleteHexMutation, useGetTreeByIdQuery } from '../../redux/api'
import HexMoveEdit from './HexMoveEdit'
import { useParams } from 'react-router-dom'
import StudentTitle from './StudentTitle'
import StudentNoteBody from './StudentNoteBody'


const SideBar = () => {
    // queries
    const { treeId } = useParams()
    const { data, isLoading, error } = useGetTreeByIdQuery(treeId)
    // useReduxSelector
    const user_id = useReduxSelector(state => state.auth.user_id)
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const tool: string = useReduxSelector(state => state.panMode.tool)
    const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
    const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const pathEditMode = useReduxSelector(state => state.panMode.pathEditMode)
    const hexMoveEditMode = useReduxSelector(state => state.panMode.hexMoveEditMode)
    const [deleteHex] = useDeleteHexMutation()
    const dispatch = useReduxDispatch()
    // useState
    const base_section_class = 'md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full overflow-y-auto'
    const [section_className, setSection] = useState(base_section_class)
    // functions
    const handleShortcuts = (event: KeyboardEvent) => {
        if (section_className !== INVISIBLE && !any([editImgAddress, editNoteBody, editNoteTitle])) {
            switch (event.key) {
                case 's':
                    dispatch(ImgAddressSwitch())
                    break
                case 'd':
                    dispatch(NoteTitleSwitch())
                    break
                case 'f':
                    dispatch(NoteBodySwitch())
                    break
            }
        }
    }
    useEventListener('keypress', handleShortcuts)
    // useEffects
    useEffect(() => {
        switch (tool) {
            case TOOL_PAN:
                setSection(INVISIBLE);
                break
            default:
                setSection(base_section_class);
        }
    }, [tool])
    if (pathEditMode === EDIT_ON || pathEditMode === EDIT_CHOSEN) {
        return (
            <PathEdit key={nanoid()} />
        )
    }
    if (hexMoveEditMode === EDIT_ON || hexMoveEditMode === EDIT_CHOSEN) {
        return (
            <HexMoveEdit key={nanoid()} />
        )
    }
    if (tool === TOOL_PAN) {
        return (
            <section id='sidebar' className={base_section_class}>
                <div className='grid grid-cols-2 gap-3 p-5 m-3 place-content-center rounded-lg bg-paper-yellow opacity-95'>
                    <span className='opacity-50 text-lg text-center'>
                        shortcut: v key
                    </span>
                    <button
                        className='bg-orange opacity-95 rounded-lg shadow-lg hover:bg-dark-orange border border-black hover:border-white'
                        onClick={() => dispatch(changeToPointerMode())}
                    >
                        Pointer Mode
                    </button>
                </div>
            </section>
        )
    }
    if (isLoading || error) {
        return (
            <section id='sidebar' className={section_className}>
                <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                </div>
            </section >
        )
    }
    if (data.user.toString() === user_id) {
        return (
            <section id='sidebar' className={section_className}>
                <div className='grid grid-cols-2 gap-3 p-5 m-3 place-content-center rounded-lg bg-paper-yellow opacity-95'>
                    <span className='opacity-50 text-lg text-center'>
                        shortcut: h key
                    </span>
                    <button
                        className='bg-orange opacity-95 rounded-lg shadow-lg hover:bg-dark-orange border border-black hover:border-white'
                        onClick={() => dispatch(changeToDragMode())}
                    >
                        Pan Mode
                    </button>
                </div>
                <div className='grid grid-cols-2 gap-3 p-5 m-3 place-content-center rounded-lg bg-paper-yellow opacity-95'>
                    <span className='opacity-50 text-lg text-center'>
                        shortcut: m key
                    </span>
                    <button
                        className='bg-orange opacity-95 rounded-lg shadow-lg hover:bg-dark-orange border border-black hover:border-white'
                        onClick={() => dispatch(changeHexMoveEditModeToOn())}
                    >
                        Move Nodes
                    </button>
                </div>
                <div className='grid grid-cols-2 gap-3 p-5 m-3 place-content-center rounded-lg bg-paper-yellow opacity-95'>
                    <span className='opacity-50 text-lg text-center'>
                        shortcut: k key
                    </span>
                    <button
                        className='bg-orange opacity-95 rounded-lg shadow-lg hover:bg-dark-orange border border-black hover:border-white'
                        onClick={() => dispatch(changePathEditModeToOn())}
                    >
                        Edit Paths
                    </button>
                </div>
                <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                    {CHECKBOXES.map((checkbox) => {
                        return (<Checkbox
                            key={nanoid()}
                            checkbox={checkbox}
                        />)
                    })}
                </div>
                <ImgAddress key={nanoid()} />
                <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                    <NoteTitle key={nanoid()} />
                </div>
                <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                    <NoteBody key={nanoid()} />
                </div>
                {hexagonFocused.hex_id ? <div className='grid place-content-center'>
                    <button
                        className='bg-red text-white px-2 py-1 border border-red-purple rounded-lg hover:border-russian-blue hover:bg-red-purple mb-5'
                        onClick={() => deleteHex(hexagonFocused)}
                    >
                        Clear Node
                    </button>
                </div> : null}
            </section >
        )
    }
    return (
        <section id='sidebar' className={section_className}>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <StudentTitle key={nanoid()} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <StudentNoteBody key={nanoid()} />
            </div>
        </section >
    )
}

export default SideBar
