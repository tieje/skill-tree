import React from "react";
import EditButton from "./EditButton";
import { useMutation } from "react-query";
import axios from "axios";

const NoteTitle = ({ title }: { title: string }) => {
    const mutation = useMutation(newTitle => {
        return axios.post('http://127.0.0.1:8000/api/v1/skilltreehexagons/')
    },
    
    )
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

/*
const NoteTitle = () => {
    const { isLoading, error, data } = useQuery('skillTreeData', () =>
        fetch('http://127.0.0.1:8000/api/v1/skilltrees/3/').then(res => res.json())
    )

    if (isLoading) {
        console.log('Loading...')
    }
    if (error) {
        console.log('An error has occurred: ' + error)
    }
    console.log(data.hexagons[0].title)
    const title: string = data.hexagons[0].title
    return (
        <h1 className='text-2xl text-center'>
            {title}
        </h1>
    )
}
export default NoteTitle
*/