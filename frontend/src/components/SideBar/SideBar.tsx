import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'
import ImgAddress from './ImgAddress'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks'
import {
    TOOL_PAN,
} from 'react-svg-pan-zoom'
import { ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from './SideBarSlices'
import useEventListener from '@use-it/event-listener'
import { any } from '../../utils/utils'
import { INVISIBLE, CHECKBOXES } from '../../StaticVariables'


const SideBar = () => {
    // useReduxSelector
    const tool: string = useReduxSelector(state => state.panMode.tool)
    const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
    const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const dispatch = useReduxDispatch()
    // useState
    const base_section_class = 'md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full'
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
                setSection(base_section_class + ' visible');
        }
    }, [tool])
    return (
        <section id='sidebar' className={section_className} >
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
        </section >
    )
}

export default SideBar
