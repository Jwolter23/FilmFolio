import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import React from 'react'
import CreateReview from "./CRUD/CreateReview"
import DeleteReview from "./CRUD/DeleteReview"
import UpdateReview from "./CRUD/UpdateReview"


export default function Home (props) {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

const [eye, setEye] = useState('')

const toggleClass = () => {
  setEye(eye === 'colorBlue' ? '' : 'colorBlue');
}

const [thumb, setThumb] = useState('')

const toggleClassOne = () => {
  setThumb(thumb === 'colorOrange' ? '' : 'colorOrange');
}

const [clock, setClock] = useState('')

const toggleClassTwo = () => {
  setClock(clock === 'colorGreen' ? '' : 'colorGreen');
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
      <div className="shadow2"></div>
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
          
      </div>
      
      <div className="ratingBox ml-4 mt-4 ">
      <div className="rated flex justify-center gap-4">
        <div className="herocons hover:cursor-pointer">
        <svg onClick={toggleClass} className={eye} class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

        <svg onClick={toggleClassOne} className={thumb} class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>

        <svg onClick={toggleClassTwo} className={clock} class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        
        </div>
      </div>
      <div className="starsDiv flex justify-center gap-3">
      <h2>Your Rating:</h2>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#FFA500'} />
      </div>
      <div className="rated2"></div>
      <div className="starsDiv2 flex justify-center gap-1 align-bottom">
      <h2 className="mt-1.5">Average Rating:</h2>
        <ReactStars
            count={5}
            value={movieDetail.star_rating}
            edit={false}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
      </div>
      </div>
      

      </div>
      <h1 className="text-3xl">Reviews !</h1>
      <div className="createReview">
        <CreateReview movieDetail={movieDetail.id}/>
        
      </div>
      <div className="reviewContainer">
      <div className="reviewInfo">
      {
        
        movieReview.map((mreview, id) => (
            <div className='reviewMap gap-3' key={id}>
                    
                <h2>{mreview.username}</h2>
                <h3 className="text-xl">{mreview.title}</h3>
                <h3>{mreview.body}</h3>
                <h4>{mreview.rating} / 5</h4>
                <div className="deleteUpdate">
                <DeleteReview review={mreview.id} />
                <UpdateReview review={mreview.id} />
                </div>
            </div>
            
        ))
      }
      
      {/* <h2>{movieReview[0].username}</h2> */}
      </div>
      </div>
      
      </div>
      
      )}
}