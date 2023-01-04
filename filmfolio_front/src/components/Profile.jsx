import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import WatchlistAdd from './CRUD/WatchlistAdd'


export default function Profile () {
    // let navigate = useNavigate()

    // const showMovies = (movies) => {
    //   navigate(`/movies/${movies.id}`)
    // }

    // const hasWatched = () => {
    //     if (watched == 'true'){
    //         axios.put('http://localhost:8000/users/', {
    //         watched: !watched
    //     })
    //     .then(response => {
    //     console.log(response);
    //     })
    //     .catch(error => {
    //     console.log(error);
    //     });
    //     }
    // }

    const [movies, setMovies] = useState(null)

    useEffect(()=>{
    const getData = async () =>{
    const response = await axios.get('http://localhost:8000/movies/')
    setMovies(response.data)
    console.log(response.data)
    
    

    }

    getData()

}, [])

if(!movies) {
    return <h2>Loading profile</h2>
}else{
    return (
        <div>
        <WatchlistAdd />
        </div>
    )
}
}