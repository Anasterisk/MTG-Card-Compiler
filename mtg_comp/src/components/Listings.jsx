import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"

export default function Listings (props){
let navigate=useNavigate()

const {data, setData}=useState(props.data)

const showCard=(x)=>{
    navigate(`${x.id}`)
}
    return( 
        
    <div className="card-page">
        {
            props.data.cards.map((x)=>(
                (!x.imageUrl)?null:
                    <div key={x.id} className="card-panel">
                    <div className="open-panel" onClick={()=>showCard(x)}>
                        <div>{x.name}</div>
                        <img className="image-panel" src={x.imageUrl}/>
                    </div>
        <button>Add</button>
           <hr/>
            </div>
            ))}
     </div>
    )
}