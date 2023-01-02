import React from "react"
import axios from "axios"
import { useState } from "react"
import ReactStars from 'react-stars'
import { useNavigate } from "react-router-dom";


export default function CreateReview({ movieDetail: id }) {
  let newRating = 0

  const ratingChanged = (rating) => {
    newRating = rating;
    console.log(newRating)
  }

  const [body, setBody] = useState({
    id: id, 
    username: 'jwolter4',
    title: 'testing',
    body: '',
    rating: newRating,
    movie:`http://localhost:8000/movies/${id}`
  })
  
  const handleChange = (e) => {
    setBody({ ...body, [e.target.id]: e.target.value })
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(body)

    await axios
      .post(`http://localhost:8000/reviewspost/`, {
        ...body,
        rating: newRating
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    //   navigate("/comments")
    window.location.reload();
  }

  return (
    <div className="create-comment-container">
      <form className="create-comment-form" onSubmit={handleSubmit}>
      <ReactStars
            count={5}
            value={newRating}
            onChange={ratingChanged}
            size={24}
            color2={'#FFA500'} />
        <input
          className="body-section"
          id="body"
          type="text"
          placeholder="Comment here"
          autoComplete="off"
          onChange={handleChange}
          value={body['']}
        />
        
      
        <button
          className="post-button"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  )
}