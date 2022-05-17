const HomeSection: React.FC = ({ children }) => {
    return (
        <>
            <div className='grid col-span-3'></div>
            <div className='h-screen grid col-span-6'>
                <article className='grid place-content-center bg-white h-1/2'>
                    Incentives for Students

                    • There is a lot to learn out there. A skill tree can help make learning less overwhelming by visualizing the bigger picture.
                    • Students can have a central place to access their teacher's notes.
                    • Students are empowered to forge their own educational journey by looking ahead of the lesson plan.

                    Future Features will allow students to:

                    • provide quantitative and verbal feedback to teachers to enhance the student-teacher feedback loop.
                    • visually keep track of how confident they feel about a subject.
                    {children}
                </article>
            </div>
            <div className='grid col-span-3'></div>
        </>
    )
}

export default HomeSection
