import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Nav () {
    return (
        <div>
            <div className='navBar'>
            <Link to='/' className='links'> Home </Link>
            <Link to='/profile' className='links'> Profile </Link>
            <Link to='/films' className='links'> Films </Link>
            <Link to={'/auth/login'}>
                <a className='py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8'>
                    Join now
                </a>
            </Link>
            </div>
        

        </div>
    )
}