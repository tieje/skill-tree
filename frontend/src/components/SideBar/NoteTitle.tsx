import React from "react";
import EditButton from "./EditButton";

const NoteTitle = ({ title }: { title: string }) => {    
    return (
        <>
            <h1 className='text-2xl text-center'>
                {title}
            </h1>
            <EditButton />
        </>
    )
}

export default NoteTitle
