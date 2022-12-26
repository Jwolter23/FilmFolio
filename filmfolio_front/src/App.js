import './App.css'
import Header from './components/Header'
import Main from './components/Main';
import Layout from './components/Layout'
function App() {


  return (
    <div>
      <div className='header'>
        <Layout />
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;