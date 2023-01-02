import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function EditComment ({review}) {
// console.log(props)

const [inputVisible, setInputVisible] = useState(false);


    // let navigate = useNavigate();
const [body, setbody] = useState({
    body: "",
})
// console.log(props.user)

const handleChange = (e) => {
    setbody({ ...body, [e.target.id]: e.target.value })
    // console.log(props.user)
    console.log(body.body)
}

const handleSubmit = async (event) => {
    event.preventDefault()

    // console.log(body)

    await axios
    .put(`http://localhost:8000/reviewsupdate/${review}`, body)
      // .then((res) => {
      //   console.log(res)
      //   console.log(res.data)
      // })
    // navigate("/comments")
    window.location.reload();
}

return (
    <div className="create-comment-container">
    <button onClick={() => setInputVisible(!inputVisible)}>Edit</button>

    <form onSubmit={handleSubmit}>
        {inputVisible &&
        <input
        className="edit-section"
        id="body"
        type="text"
        placeholder='Update Review'
        autoComplete="off"
        onChange={handleChange}
        value={body[""]}
        />
        }

        {inputVisible &&
        <button
        className="post button"
        type="submit"
        >
        Post Edit
        </button>
}
    </form>
    </div>
)
}