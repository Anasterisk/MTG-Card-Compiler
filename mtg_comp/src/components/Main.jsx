import React from 'react'
import Home from './Home'
import Comp from './Comp'
import { Route,Routes } from 'react-router-dom'
export default function Main (){
    return(
        <div> I'm the Main character
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/comp' element={<Comp/>}/>
            </Routes>

        </div>
    )
}