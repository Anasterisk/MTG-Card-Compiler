
import './App.css';
import axios from 'axios';
import{BASE_URL} from './globals'
import {useEffect} from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
function App() {
  // useEffect(()=>{
  //   const getCards= async()=>{
  //     const response= await axios.get(`${BASE_URL}/v1`)
  //   }
  //   getCards
  // },[])
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <hr/>
      <div>
        <Main/>
        meh meh meh
      </div>
      <hr/>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
