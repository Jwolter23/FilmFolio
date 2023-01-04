import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Watchlist( { watch } ) {
    const [has_watched, setWatchlist] =useState('true')


        const setWatchlistTrue = () => {
            setWatchlist('true')
        }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setWatchlistTrue();

        const updatedWatch = { ...watch }

        updatedWatch.has_watched = has_watched

        await axios
        .put(`http://localhost:8000/moviesupdate/${watch.id}`, updatedWatch)
    }



return (
    <div>
            <button onClick={handleSubmit}>
                +
            </button>
    </div>
)}