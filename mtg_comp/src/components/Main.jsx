import {useContext, React} from 'react'
import Home from './Home'
import Comp from './Comp'
import Listings from './Listings'
import Detailed from './Detailed'
import { Route,Routes } from 'react-router-dom'
import SearchResult from './SearchResult'
import { DataContext } from "./DataContext"
import { useState, useEffect } from "react"
export default function Main (props){
    const { value2} =useContext(DataContext)
    const [page,setPage]=useState(value2)
console.log(page)
console.log(value2)
    return(
        <div> Main display area
            {/* <h2>page: {page}</h2> */}
            <Routes>
                <Route path='/' 
                    element={<Home/>}/>
                <Route path='/comp' 
                    element={<Comp/>}/>
                <Route path='/Listing' 
                    element={<Listings 
                        data={props.data}
                        page={props.page}/>}/>
                <Route path='/Listing/:id' 
                    element={<Detailed 
                        data={props.data}/>}/>
                <Route path='/search/:name' 
                    element={<SearchResult/>}/>
            </Routes>

        </div>
    )
}