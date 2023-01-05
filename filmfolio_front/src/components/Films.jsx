import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Films () {

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

// const [movieSearch, setMovieSearch] = useState(null)


//   const getSearch = async () =>{
//   const response = await axios.get(`http://localhost:8000/movies/${movies.find(e => e.title === formState.search).title}`)


//   setMovieSearch(response.data)
//   console.log(response.data)

//   }

const initialState = {
    search: '',
  }
  
  const [formState, setFormState] = useState(initialState)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
    searchMovie(formState.search);
  }
  
  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }



const searchMovie = async (title) => {
    const movies = await axios.get(`http://localhost:8000/movies/`);
    const movie = movies.data.find(movie => movie.title == title);
    if (movie) {
      console.log(movie);
    } else {
      console.log('Movie not found');
    }
  }
  
  










if(!movies) {
  return <h2>Loading Home</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1 className="trending">Browse our selection</h1>
      <form className='submitForm' 
      onSubmit={handleSubmit}>
        <label htmlFor='search'>Search Movies: </label>
        <input className='inputSearch'type='text' 
        placeholder='Input Movie Title'
        id='search' 
        onChange={handleChange} 
        value={formState.search}>
        </input>
        <button type='submit' 
        onClick={()=>searchMovie()}>Search</button>
        </form>
    </div>




    <div className='grid'>
      {
      movies.map((movies)=>(
      <div onClick={() => showMovies(movies)} key={movies.title}
      className='card'>
        
      <h2 className="movieTitle">{movies.title}</h2>
      <div className="previewText">
      <img className="Img" src={`${movies.photo_url}`}  />
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}