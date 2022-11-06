import { DataContext } from './components/DataContext';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import Detailed from './components/Detailed';
function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
      const getData= async()=>{
          const response= await axios.get(`https://api.magicthegathering.io/v1/cards`)
      setData(response.data)
          }
      getData()
    },[data])


  return (
    <div className="App">
      <div>
        
        <Header/>
      </div>
      <hr/>
      <div>
        <DataContext.Provider value={{data,setData}}>
        <Main data={data}/>
        </DataContext.Provider>
      </div>
      <hr/>
      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
