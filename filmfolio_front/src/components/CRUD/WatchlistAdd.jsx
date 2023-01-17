import {useState, useEffect} from 'react'
import axios from 'axios'



export default function Watchlist( { watch, eye, toggleClass } ) {
    const [has_watched, setWatchlist] =useState('true')
    
        const setWatchlistTrue = () => {
            setWatchlist('true')
        }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setWatchlistTrue();
        toggleClass()
        const updatedWatch = { ...watch }

        updatedWatch.has_watched = has_watched

        

        await axios
        .put(`http://localhost:8000/moviesupdate/${watch.id}`, updatedWatch)
    }

    


return (
    <div>
           
            <div >
                
            <svg onClick={handleSubmit}  className={eye} class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
           
    </div>
)}