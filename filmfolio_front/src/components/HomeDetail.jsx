import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'

export default function Home () {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

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
            {/* <h2 className="genre">{movieDetail.genre}</h2> */}
          </div>
          <div className="ratingDiv">
            <h2 className="score">Average Rating: {movieDetail.avg_score} / 5</h2>
          </div>
          
      </div>
      
      <div className="ratingBox">
      <div className="herocons"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div>
      <div className="rated">
        <h2>Your Rating:</h2>
      </div>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
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
      
      )}
}