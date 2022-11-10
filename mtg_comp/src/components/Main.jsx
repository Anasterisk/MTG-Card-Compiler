import {useContext, React, useState, useEffect} from 'react'
import Home from './Home'
import Comp from './Comp'
import Listings from './Listings'
import Detailed from './Detailed'
import SearchResultD from './SearchResultsD'
import { Route,Routes } from 'react-router-dom'
import SearchResult from './SearchResult'
import { DataContext } from "./DataContext"
import axios from 'axios';
export default function Main (props){
    const [data,setData]=useState([])
    
    const initialContent= ""
    const initialPage=4
    const [content,setContent]=useState(initialContent)
    const [page, setPage]=useState(initialPage)
    
    
    let url=`https://api.magicthegathering.io/v1/cards${content}?page=${parseInt(page)}`
    useEffect(()=>{
    
    const getData= async()=>{
        const response= await axios.get(url)
    setData(response.data)
        }
    getData()
  },[])

  console.log(data)
  if(!data){return( <div>Please wait</div>)} 
    else{return(
        <div className='Main'>
        <DataContext.Provider value={{page,setPage}}>
            <Routes>
                <Route path='/' 
                    element={<Home/>}/>
                <Route path='/comp' 
                    element={<Comp/>}/>
                <Route path='/Listing' 
                    element={<Listings 
                        data={data}
                        page={page}/>}/>
                <Route path='/Listing/:id' 
                    element={<Detailed 
                        data={data}/>}/>
                <Route path='/search/:name' 
                    element={<SearchResult/>}/>
                <Route path='/search/:name/:id' 
                    element={<SearchResultD
                        data={data}/>}/>
            </Routes>
        </DataContext.Provider>
        </div>
    )
}}