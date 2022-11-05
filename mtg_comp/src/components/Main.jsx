import React from 'react'
import Home from './Home'
import Comp from './Comp'
import Listings from './Listings'
import Detailed from './Detailed'
import { Route,Routes } from 'react-router-dom'

export default function Main (){
    return(
        <div> I'm the Main character
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/comp' element={<Comp/>}/>
                <Route path='/Listing' element={<Listings/>}/>
                <Route path='/Listing/:id' element={<Detailed/>}/>
            </Routes>

        </div>
    )
}