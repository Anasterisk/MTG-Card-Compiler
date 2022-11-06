import React from 'react'
import Home from './Home'
import Comp from './Comp'
import Listings from './Listings'
import Detailed from './Detailed'
import { Route,Routes } from 'react-router-dom'

export default function Main (props){

    return(
        <div> I'm the Main character
            <Routes>
                <Route path='/' 
                    element={<Home/>}/>
                <Route path='/comp' 
                    element={<Comp/>}/>
                <Route path='/Listing' 
                    element={<Listings 
                        data={props.data}/>}/>
                <Route path='/Listing/:id' 
                    element={<Detailed 
                        data={props.data}/>}/>
            </Routes>

        </div>
    )
}