import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
  return(
    <div className='container'>
    <div className="title">
      <h1>Movies!</h1>
    </div>
    <div className='grid'>
      {
      movies.map((movies)=>(
      <div onClick={() => showMovies(movies)} key={movies.title}
      className='card'>
      <div className="previewText">
      <h2>{movies.title}</h2>
      <img className="Img" src={`${movies.photo_url}`}  />
      {/* <h3>{venues.location}</h3>
      <h3>{venues.capacity}</h3> */}
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}