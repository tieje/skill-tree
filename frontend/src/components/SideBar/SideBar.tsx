import React from 'react'
import { sampleData } from '../../utils/informal_tests'
import { nanoid } from 'nanoid'
import Checkbox from './Checkbox'
import ImgAddress from './ImgAddress'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'

console.log(sampleData)

const SideBar = () => {
    const checkboxes: string[] = ['Verbal Feedback', 'Quantitative Feedback']
    const noteTitle: string = 'The French Revolution'
    const someText: string = ''
    return (
        <section id='sidebar' className='md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full'>
            <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                {checkboxes.map((label) => { return (<Checkbox key={nanoid()} label={label} />) })}
            </div>
            <div className='grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'>
                <ImgAddress key={nanoid()} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <NoteTitle key={nanoid()} title={noteTitle} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <NoteBody key={nanoid()} someText={someText} />
            </div>
        </section>
    )
}

export default SideBar
