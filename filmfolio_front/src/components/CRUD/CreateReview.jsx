import React from "react"
import axios from "axios"
import { useState } from "react"
import ReactStars from 'react-stars'
import { useNavigate } from "react-router-dom";
import HomeDetail from '../HomeDetail'


export default function CreateReview({ movieDetail: id }) {
  const [inputVisible, setInputVisible] = useState(false);
  let newRating = 0

  const ratingChanged = (rating) => {
    newRating = rating;
    console.log(newRating)
  }

  const [username, setUsername] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState({
    id: id, 
    username: '',
    title: '',
    body: '',
    rating: newRating,
    profile_url: 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
    movie:`https://damp-meadow-21641.herokuapp.com/movies/${id}`
    
  })
  
  const handleChange = (e) => {

      setUsername({ ...username, [e.target.id]: e.target.value})

      setTitle({ ...title, [e.target.id]: e.target.value})
    
      setBody({ ...body, [e.target.id]: e.target.value })
    
    
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(body)

    await axios
      .post(`https://damp-meadow-21641.herokuapp.com/reviewspost/`, {
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
      <button className="create-button" onClick={() => setInputVisible(!inputVisible)}>Create Review</button>
      <form className="create-comment-form" onSubmit={handleSubmit}>
      {inputVisible &&
      <ReactStars
            count={5}
            value={newRating}
            onChange={ratingChanged}
            size={24}
            color2={'#FFA500'} />
      }
      {inputVisible &&
        <input
          className="title-section"
          id="username"
          type="text"
          placeholder="Enter a username"
          autoComplete="off"
          onChange={handleChange}
          value={username['']}
        />
      }
      {inputVisible &&
        <input
          className="title-section"
          id="title"
          type="text"
          placeholder="Enter a title"
          autoComplete="off"
          onChange={handleChange}
          value={title['']}
        />
      }
      {inputVisible &&
        <input
          className="body-section"
          id="body"
          type="text"
          placeholder="Comment here"
          autoComplete="off"
          onChange={handleChange}
          value={body['']}
        />
}

      {inputVisible &&     
        <button
          className="post-button"
          type="submit"
        >
          Post
        </button>
}
      </form>
    </div>
  )
}