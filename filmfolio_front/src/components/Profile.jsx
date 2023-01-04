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

    const [movie, setMovies] = useState(null)

    let filteredMovies;
    if(movie){
        filteredMovies = movie.filter(movie => movie.has_watched ==='true')
    }

    useEffect(()=>{
    const getData = async () =>{
    const response = await axios.get('http://localhost:8000/movies/')
    setMovies(response.data)
    console.log(response.data)
    
    

    }

    getData()

}, [])

    return (
        <div className="filteredContainer">
            <h3 className="filteredWatch">Watchlist</h3>
        <div className="filteredMovies">
            
        {filteredMovies?.map(movies => (
            <div className="filteredCards">
            <p  className='filteredTitle'key={movies.title}>{movies.title}</p>
            <img className="Img" src={`${movies.photo_url}`}  />
            </div>
        ))}
        </div>
        </div>
    )
}

