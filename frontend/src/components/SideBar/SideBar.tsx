import React from 'react'
import { sampleData } from '../../utils/informal_tests'

console.log(sampleData)

const SideBar = () => {
    return (
        <section id='sidebar' className='md:fixed md:w-3/12 md:left-0 md:top-0 md:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full'>
            <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                <div className='text-xl'>
                    <label className='pr-2' htmlFor='feedback-verbal'>
                        Allow Verbal Feedback
                    </label>
                    <input type="checkbox" id="feedback-verbal" name='feedback-verbal' />
                </div>
                <div className='text-xl'>
                    <label className='pr-2' htmlFor='feedback-quantitative'>
                        Allow Quantitative Feedback
                    </label>
                    <input type="checkbox" id="feedback-quantitative" name='feedback-quantitative' />
                </div>
            </div>
            <div className='grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'>
                <label className='text-right text-xl' htmlFor='custom-hex-id-input'>
                    Image Address
                    <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
                        (what's this?)
                    </a>
                </label>
                <input className='w-full rounded-md p-2' type='text' id='custom-hex-id-input' name='imageLink' />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <h1 className='text-2xl text-center'>
                    The French Revolution
                </h1>
                <button className='absolute top-0 right-0 text-2xl font-bold hover:bg-paper-yellow-deep rounded-lg p-1 shadow-lg px-3'>
                    &#9998;
                </button>
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <label className='p-2 text-lg' htmlFor='teacher-material'>Notes</label>
                <textarea id='teacher-material' name='teacher-material' rows={7} cols={25}
                    className='p-2 overflow-y-scroll rounded-lg'
                    placeholder='Instructional text and links for students'
                >
                </textarea>
                <button className='absolute top-0 right-0 text-2xl font-bold hover:bg-paper-yellow-deep rounded-lg p-1 shadow-lg px-3'>
                    &#9998;
                </button>
            </div>
        </section>
    )
}
export default SideBar
