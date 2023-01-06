import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../utils/firebase'
import axios from 'axios'

export default function Nav () {
    const [user, loading] = useAuthState(auth)
    return (
        <div>
            <div className='navBar'>
            <Link to='/' className='links'> Home </Link>
            <Link to='/profile' className='links'> Profile </Link>
            <Link to='/films' className='links'> Films </Link>
            {!user && (
            <Link to={'/auth/login'}>
                <a className='py-2 px-4 text-lg  text-white rounded-lg font-medium ml-8 testing3'>
                    Sign In
                </a>
            </Link>
            )}
            {user && (
                <div>
                    <Link to='/dashboard'>
                        <h2>{user.displayName}</h2>
                        <img src={user.photoURL} alt='avatar' referrerPolicy='no-referrer' className='w-12 rounded-full' />
                    </Link>
                </div>
            )}
            </div>
        

        </div>
    )
}