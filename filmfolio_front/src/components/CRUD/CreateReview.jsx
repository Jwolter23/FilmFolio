import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function CreateReview({ movieDetail: id }) {
    // let navigate = useNavigate();
  const [body, setBody] = useState({
    id: id, 
    username: 'jwolter4',
    title: 'testing',
    body: '',
    rating: 5,
    movie:`http://localhost:8000/movies/${id}`
  })
  // console.log(movieDetail)
  const handleChange = (e) => {
    setBody({ ...body, [e.target.id]: e.target.value })
    // console.log(movieDetail)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(body)

    await axios
      .post(`http://localhost:8000/reviewspost/`, body)
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