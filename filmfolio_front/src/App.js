import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    
    const getArtists = async () => {
    const response = await axios.get('http://localhost:8000/users/')
    setData(response.data)
    console.log(response.data)
    console.log(response.data[0].last_name)
    }

    getArtists()
    console.log(data)
  }, [])
  

  if(data) {
    return (
      <div className="App">
    
  
        <div>
        {data.map((user) => (
          <div>
          <h3 className='testingClass'> {user.first_name} </h3>
          <h5> {user.username} </h5>
          </div>
        ))}
      </div>
      
      </div>
    );
  
} else {

  return <h2> loading please wait</h2>
}
}
export default App;