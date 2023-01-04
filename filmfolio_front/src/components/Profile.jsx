import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Profile () {
    // let navigate = useNavigate()

    // const showMovies = (movies) => {
    //   navigate(`/movies/${movies.id}`)
    // }

    const hasWatched = () => {
        if (watched == 'true'){
            axios.put('http://localhost:8000/users/', {
            watched: !watched
        })
        .then(response => {
        console.log(response);
        })
        .catch(error => {
        console.log(error);
        });
        }
    }

    const [watched, setWatched] = useState('')
    const [userMovies, setUserMovies] = useState(null)

    useEffect(()=>{
    const getData = async () =>{
    const response = await axios.get('http://localhost:8000/users/')
    setUserMovies(response.data[0].movies)
    console.log(response.data[0].movies)
    setWatched(response.data[0].movies[6].hasWatched)
    console.log(response.data[0].movies[6].has_watched)
    

    }

    getData()

}, [])

if(!userMovies) {
    return <h2>Loading profile</h2>
}else{
    return (
        <div>
        <h1>Profile</h1>
        </div>
    )
}
}