import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import WatchlistAdd from './CRUD/WatchlistAdd'


export default function Profile () {
    
    let navigate = useNavigate()

    const showMovies = (movies) => {
        navigate(`/movies/${movies.id}`)
    }

    const [user, setUser] = useState('')

    useEffect(() => {
        const getData = async () =>{
            const response2 = await axios.get('http://localhost:8000/users/')

            setUser(response2.data[0])
            console.log(response2.data)
        }
        getData()
    }, [])





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

function countMovies() {
    if (filteredMovies) {
      const movieCount = filteredMovies.length;
      return <p id='four'className="films1"> {movieCount}</p>;
    }
    return <p>No movies in watchlist</p>;
  }
    countMovies()



    return (
        <div className="bothDontEdit">
        <div className="userDiv">
        <div className="userInfo">
        <img className='profile_pic'src={`${user.profile_pic}`} />
        <h3 className="usernameFil">{user.username}</h3>
        </div>
        <div className="infoBoxUser">
            <div className="boxDetails1">
                <p id='24'className="films1">24</p>
                <p id='five'className="films1">5</p>
                {countMovies()}
                <p id='oneSix'className="films1">162</p>
                <p id='twoThree'className="films1">239</p>
            </div>
            <div className="boxDetails2">
                <p className="films1">Films</p>
                <p className="films1">This Year</p>
                <p className="films1">Number in Watchlist</p>
                <p className="films1">Followers</p>
                <p className="films1">Following</p>
            </div>
        </div>
        </div>
        
        <h3 className="filteredWatch">Watchlist</h3>
        <div className="filteredContainer">
        <div className="filteredMovies">
        {filteredMovies?.map((movies) => (
            <div onClick={() => showMovies(movies)} key={movies.title} className="filteredCards">
            <p  className='filteredTitle'key={movies.title}>{movies.title}</p>
            <img className="Img" src={`${movies.photo_url}`} style={{
  borderImage: `linear-gradient(135deg,${movies.color} 0 10px,${movies.color} 0 20px,${movies.color} 0 30px) 8`,

}} />
            </div>
        ))}
        </div>
        </div>
        </div>
    )
}

