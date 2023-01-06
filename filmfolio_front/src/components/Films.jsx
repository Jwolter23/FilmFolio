import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function Films () {
  const [inputVisible, setInputVisible] = useState(false);

  const [animationParent] = useAutoAnimate({duration: 300})
  
  let navigate = useNavigate()

  const showMovies = (movies) => {
    navigate(`/movies/${movies.id}`)
  }

  const [movies, setMovies] = useState(null)
  const [displayedMovies, setDisplayedMovies] = useState('')
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('http://localhost:8000/movies/')
  setMovies(response.data)
  console.log(response.data)
  setDisplayedMovies(response.data)

  }

  getData()

}, [])


const initialState = {
    search: '',
  }
  
  const [formState, setFormState] = useState({ search: ''})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState({ search: ''})
    searchMovie(formState.search);
  }
  
  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }



const searchMovie = async (title) => {
    const movies = await axios.get(`http://localhost:8000/movies/`);
    const movie = movies.data.find(movie => movie.title.toLowerCase() == title.toLowerCase());
    if (movie) {
      console.log(movie);
      setDisplayedMovies([movie])
    } else {
      console.log('Movie not found');
      setDisplayedMovies([])
    }
  }
  
  









if(!displayedMovies) {
  return <h2>Loading Home</h2>
}else{
  return(
    <div ref={animationParent}className='container'>
    <div className="title">
      <h1 className="trending">Browse selection</h1>
      <div ref={animationParent}className="magnify">
      <svg ref={animationParent} onClick={() => setInputVisible(!inputVisible)}class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      {inputVisible &&
      <form ref={animationParent} className='submitForm' 
      onSubmit={handleSubmit}>
        <label htmlFor='search'> </label>
        <input ref={animationParent} className='inputSearch'type='text' 
        placeholder='Input Movie Title'
        id='search' 
        onChange={handleChange} 
        value={formState.search}>
        </input>
        <button type='submit' 
        onClick={()=>searchMovie()}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button>
        </form>
        }
    </div>


    <div className='grid'>
      {
      displayedMovies.map((movies)=>(
      <div onClick={() => showMovies(movies)} key={movies.title}
      className='card'>
        
      <h2 className="movieTitle">{movies.title}</h2>
      <div className="previewText">
      <img className="Img" src={`${movies.photo_url}`} style={{
  borderImage: `linear-gradient(135deg,${movies.color} 0 10px,${movies.color} 0 20px,${movies.color} 0 30px) 8`,

}} />
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}