import React from 'react'
import Home from './Home'
import Comp from './Comp'
import Listings from './Listings'
import Detailed from './Detailed'
import { Route,Routes } from 'react-router-dom'
import SearchResult from './SearchResult'
export default function Main (props){

    return(
        <div> Main display area
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