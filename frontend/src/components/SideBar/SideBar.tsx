import React, { useEffect, useState } from 'react'
// import { sampleData } from '../../utils/informal_tests'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'
import ImgAddress from './ImgAddress'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import EditButton from './EditButton'
import { useReduxSelector } from '../../redux/hooks'
import { TOOL_PAN,
    // TOOL_NONE,
} from 'react-svg-pan-zoom'
import { CHECKBOXES, NOTE_TITLE, SOME_TEXT } from './staticVariables'

const SideBar = () => {
    // variables
    const tool: string = useReduxSelector(state => state.panMode.tool)
    const base_section_class = 'md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full'
    const [section_className, setSection] = useState(base_section_class)
    // functions
    useEffect(() => {
        switch (tool) {
            case TOOL_PAN:
                setSection(base_section_class + ' invisible');
                break
            /*case TOOL_NONE:
            section_class = base_section_class + 'invisible';
            break*/
            default:
                setSection(base_section_class + ' visible');
        }
    }, [tool])
    return (
        < section id='sidebar' className={section_className} >
            <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                {CHECKBOXES.map((label) => { return (<Checkbox key={nanoid()} label={label} />) })}
            </div>
            <div className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'>
                <ImgAddress key={nanoid()} />
                <EditButton />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <NoteTitle key={nanoid()} title={NOTE_TITLE} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <NoteBody key={nanoid()} someText={SOME_TEXT} />
            </div>
        </section >
    )
}

export default SideBar
