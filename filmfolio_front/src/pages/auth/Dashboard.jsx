import { auth } from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { useRoutes } from 'react-router-dom';

export default function Dashboard(){
    const [user,loading] = useAuthState(auth);
    // const router = useRoutes()
    if(loading) return <h1>Loading...</h1>
    // if (!user) router.push('/auth/login')
    if(user)
    return(
        <div>
            <h1> Welcome to your dashboard </h1>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}