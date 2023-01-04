import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Watchlist() {
    const [watchlist, setWatchlist] =useState({
        watchlist: ''
    })

    const handleChange = (e) => {
        setWatchlist({...watchlist, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await axios
        .put(`http://localhost:8000/watchlistupdate/${watchlist.id}`, watchlist)
    }

}