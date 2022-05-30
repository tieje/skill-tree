import SideBarItemContainer from "./SideBarItemContainer"

const SideBarNote = ({ note }: { note: string }) => {
    return (
        <SideBarItemContainer>
            <p
                className='p-2 overflow-y-auto rounded-lg h-full whitespace-pre-wrap'
            >
                {note === null || note === '' ? 'notes' : note}
            </p>
        </SideBarItemContainer>
    )
}
export default SideBarNote
