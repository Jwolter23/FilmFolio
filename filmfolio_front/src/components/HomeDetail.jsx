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
      <div className="imgBlur"></div>
      <div className="cover-url">
      <img className="cover_url" src={`${movieDetail.cover_url}`} />
      <div className="shadow"></div>
      </div>
    <div className='detailsPage'>
      
      <img className="Img" src={`${movieDetail.photo_url}`}  />
      <div className="detail-info">
          <div className="topRow">
            <h2 className="title">{movieDetail.title}</h2>
            <h2 className="release-year">{movieDetail.release_year}</h2>
            <h2 className="director">Directed By: {movieDetail.director}</h2>
          </div>
          <div className="middleRow">
            <h2 className="description">{movieDetail.description}</h2>
          </div>
          <div className="castDiv">
            <h2 className="castName">Cast</h2>
          </div>
          <div className="lowerRow">
            <h1 className="actors">{movieDetail.actor}</h1>
            <h2 className="score">{movieDetail.avg_score}</h2>
            {/* <h2 className="genre">{movieDetail.genre}</h2> */}
            <h2 className="ratings">{movieDetail.rating}</h2>
          </div>
      </div>
      {/* <h1>Reviews !</h1> */}
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