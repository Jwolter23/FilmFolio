import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Watchlist( {} ) {
    const [watchlist, setWatchlist] =useState({
        watchlist: 'true'
    })

    const handleChange = (e) => {
        setWatchlist({...watchlist, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await axios
        .put(`http://localhost:8000/moviesupdate/${watchlist.id}`, watchlist)
    }



return (
    <div>
        <form onSubmit={handleSubmit}>
            <button>
                +
            </button>
        </form>
    </div>
)}