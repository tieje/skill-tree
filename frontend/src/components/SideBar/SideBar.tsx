import React, { useEffect, useState } from 'react'
import { CheckboxType } from '../../types/Types'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'
import ImgAddress from './ImgAddress'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import EditButton from './EditButton'
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks'
import {
    TOOL_PAN,
    // TOOL_NONE,
} from 'react-svg-pan-zoom'
import { changeQuantitativeBool, changeVerbalBool, ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from './SideBarSlices'
import { useGetHexagonByIdQuery, } from '../../redux/api'
import useEventListener from '@use-it/event-listener'
import { any } from '../../utils/utils'
import { INVISIBLE } from '../../StaticVariables'


const SideBar = () => {
    // variables
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const dispatch = useReduxDispatch()
    const tool: string = useReduxSelector(state => state.panMode.tool)
    const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
    const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const base_section_class = 'md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full'
    const [section_className, setSection] = useState(base_section_class)
    // functions and useEffect
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
    useEffect(() => {
        switch (tool) {
            case TOOL_PAN:
                setSection(INVISIBLE);
                break
            /*case TOOL_NONE:
            section_class = base_section_class + 'invisible';
            break*/
            default:
                setSection(base_section_class + ' visible');
        }
    }, [tool])
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }
    if (error) {
        const VERBAL: CheckboxType = {
            label: 'Verbal Feedback',
            initial: false,
            editMethod: changeVerbalBool,
        }
        const QUANTITATIVE: CheckboxType = {
            label: 'Quantitative Feedback',
            initial: false,
            editMethod: changeQuantitativeBool,
        }
        const CHECKBOXES: CheckboxType[] = [VERBAL, QUANTITATIVE]
        return (
            < section id='sidebar' className={section_className} >
                <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                    {CHECKBOXES.map((checkbox) => {
                        return (<Checkbox
                            key={nanoid()}
                            checkbox={checkbox}
                        />)
                    })}
                </div>
                <div className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'>
                    <ImgAddress
                        key={nanoid()}
                        edit={editImgAddress}
                        imgAddress={''} />
                    <EditButton
                        editMethod={() => ImgAddressSwitch()}
                    />
                </div>
                <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                    <NoteTitle
                        key={nanoid()}
                        edit={editNoteTitle}
                        title={'Title'}
                    />
                </div>
                <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                    <NoteBody
                        key={nanoid()}
                        edit={editNoteBody}
                        body={''}
                    />
                </div>
            </section >
        )
    }
    const VERBAL: CheckboxType = {
        label: 'Verbal Feedback',
        initial: data.allow_verbal_feedback,
        editMethod: changeVerbalBool,
    }
    const QUANTITATIVE: CheckboxType = {
        label: 'Quantitative Feedback',
        initial: data.allow_quantitative_feedback,
        editMethod: changeQuantitativeBool,
    }
    const CHECKBOXES: CheckboxType[] = [VERBAL, QUANTITATIVE]
    return (
        < section id='sidebar' className={section_className} >
            <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                {CHECKBOXES.map((checkbox) => {
                    return (<Checkbox
                        key={nanoid()}
                        checkbox={checkbox}
                    />)
                })}
            </div>
            <div className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'>
                <ImgAddress
                    key={nanoid()}
                    edit={editImgAddress}
                    imgAddress={data.image_address} />
                <EditButton
                    editMethod={() => ImgAddressSwitch()} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <NoteTitle
                    key={nanoid()}
                    edit={editNoteTitle}
                    title={data.title} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <NoteBody
                    key={nanoid()}
                    edit={editNoteBody}
                    body={data.note}
                />
            </div>
        </section >
    )
}

export default SideBar
