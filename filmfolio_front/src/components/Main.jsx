import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Films from './Films'
import HomeDetail from './HomeDetail'
import Login from '../pages/auth/Login'
import Nav from './Nav'
import Dashboard from '../pages/auth/Dashboard'

export default function Main (props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies/:id' element={<HomeDetail />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/films' element={<Films />}/>
                <Route path='/auth/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    )
}