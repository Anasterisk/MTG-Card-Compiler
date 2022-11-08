import { DataContext } from './components/DataContext';
import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import Detailed from './components/Detailed';
function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
      const getData= async()=>{
          const response= await axios.get(`https://api.magicthegathering.io/v1/cards${content}${page}`)
      setData(response.data)
          }
      getData()
    },[])

const initialContent= ""
const initialPage=""
const [content,setContent]=useState(initialContent)
const [page, setPage]=useState(initialPage)

  return (
    <div className="App">
      <div>
        
        <Header/>
      </div>
      <hr/>
      <div>
        <DataContext.Provider 
            value={{value1:[data,setData], value2:[page,setPage], value3:[content,setContent]}}>
        <Main data={data}
              page={[page,setPage]}
              content={[content,setContent]}/>
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
