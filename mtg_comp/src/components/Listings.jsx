import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"

import PageNav from "./PageNav"

export default function Listings (props){
let navigate=useNavigate()

// console.log(data)
const showCard=(x)=>{
    navigate(`${x.id}`)
}

console.log(props.data)


if(!props.data){return( <div>Please wait</div>)} 

  else{
    return( 
    <div className="Listings"> 

    <div className="card-page">
        
        {
            props.data.cards.map((x)=>(
                (!x.imageUrl)?null:
                    <div key={x.id} className="card-panel">
                    <div className="open-panel" onClick={()=>showCard(x)}>
                        <h4>{x.name}</h4>
                        <img className="image-panel" src={x.imageUrl}/>
                    </div>
        {/* <button>Add</button> */}
           <hr/>
            </div>
            ))}
     </div>
     </div>
    )
}}