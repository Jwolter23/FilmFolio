import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Films from './Films'
import HomeDetail from './HomeDetail'

export default function Main (props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies/:id' element={<HomeDetail />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/films' element={<Films />}/>
            </Routes>
        </div>
    )
}