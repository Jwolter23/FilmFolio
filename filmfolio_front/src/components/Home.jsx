import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import WatchlistAdd from './CRUD/WatchlistAdd'
export default function Home () {

  let navigate = useNavigate()

  const showMovies = (movies) => {
    navigate(`/movies/${movies.id}`)
  }

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
  return <h2>Loading Home</h2>
}else{
  const movieList = movies.slice(0, 8)
  return(
    <div className='container'>
    <div className="title">
      <h1 className="trending">Trending Now</h1>
    </div>
    <div className='grid'>
      {
      movieList.map((movies)=>(
      <div onClick={() => showMovies(movies)} key={movies.title}
      className='card'>
        
      <h2 className="movieTitle" >{movies.title}</h2>
      <div className="previewText" >

      <img className="Img"  src={`${movies.photo_url}`} style={{
  borderImage: `linear-gradient(135deg,${movies.color} 0 10px,${movies.color} 0 20px,${movies.color} 0 30px) 8`,

}}></img>   
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}

