import axios from "axios";

const sampleData = axios.get('http://127.0.0.1:8000/api/v1/skilltreehexagons/')
    .then((response) => {
        console.log(response.data)
    })

export { sampleData }
