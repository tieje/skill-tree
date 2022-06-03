import DefaultSideBarItemContainer from "./SideBarItem/DefaultSideBarItemContainer"

const SideBarNote = ({ note }: { note: string }) => {
    return (
        <DefaultSideBarItemContainer>
            <p
                className='p-2 overflow-y-auto rounded-lg h-full whitespace-pre-wrap'
            >
                {note === null || note === '' ? 'notes' : note}
            </p>
        </DefaultSideBarItemContainer>
    )
}
export default SideBarNote
