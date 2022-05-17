const SidebarDisplayNote = ({ note }: { note: string }) => {
    return (
        <p
            className='p-2 overflow-y-auto rounded-lg h-full whitespace-pre-wrap'
        >
            {note === null || note === '' ? 'notes' : note}
        </p>
    )
}
export default SidebarDisplayNote
