import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Nav () {
    return (
        <div>
            <div className='navBar'>
            <Link to='/' className='links'> Home </Link>
            <Link to='/profile' className='links'> Profile </Link>
            <Link to='/films' className='links'> Films </Link>
            </div>
        

        </div>
    )
}