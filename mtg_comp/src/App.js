import { DataContext } from './components/DataContext';
import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import Detailed from './components/Detailed';
function App() {

    return (
    <div className="App">
      <div>
        
        <Header/>
      </div>
      <hr/>
      <div>
        <Main/> 
      </div>
      {/* <hr/>
      <div>
        <Footer/>
      </div> */}

    </div>
  );
}

export default App;
