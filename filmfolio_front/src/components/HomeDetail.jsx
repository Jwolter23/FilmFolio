import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Home () {

let { id } = useParams()

const [movieDetail, setMovieDetail] = useState(null)
const [movieReview, setMovieReview] = useState('')


useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`http://localhost:8000/movies/${id}`)
  setMovieDetail(response.data)
  setMovieReview(response.data.reviews)
  console.log(response.data.reviews)
  console.log(response.data)

  }

  getData()

}, [])


if(!movieDetail) {
  return <h2>Loading Details</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Movie Details!</h1>
    </div>
    <div className='detailsPage'>
      <h2>{movieDetail.title}</h2>
      <img className="Img" src={`${movieDetail.photo_url}`}  />
      <img className="Img" src={`${movieDetail.cover_url}`} />
      <h1>{movieDetail.actor}</h1>
      <h2>{movieDetail.director}</h2>
      <h2>{movieDetail.avg_score}</h2>
      <h2>{movieDetail.description}</h2>
      <h2>{movieDetail.genre}</h2>
      <h2>{movieDetail.rating}</h2>
      <h2>{movieDetail.release_year}</h2>
      <h1>Reviews !</h1>
      {
        
        movieReview.map((mreview, id) => (
            <div key={id}>
                    
                <h2>{mreview.username}</h2>
                <h3>{mreview.title}</h3>
                <h3>{mreview.body}</h3>
                <h4>{mreview.rating}</h4>
            </div>
        ))
      }
      {/* <h2>{movieReview[0].username}</h2> */}
      
      </div>
      </div>
      )}
}