import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"
import axios from "axios"
export default function Detailed (props){
    
    let {id}=useParams()
    
    const [data, setData] = useState('')
   
    
    useEffect(()=>{
        let selectedCard = props.data.cards.find((x)=>x.id=== id)
        setData(selectedCard) 
        console.log(data)
   
    },[props.data,id]) 

    console.log(data)
    return(!data)?
        <div> Please wait</div>
            :(
        <div key={data.name} className="card-detailed">
            <div className="card-header">
           <div>{data.name}</div>
           <div> {data.manaCost}</div>
           </div>
            <img className="card-image" src={data.imageUrl}/>
            <div className="card-traits">
                <div> {data.type}</div> 
                <div></div>
                <p className="card-text">{data.text}</p>
                <ul className="card-stats">
                <div>power:{data.power}</div> 
                <div>toughness:{data.toughness}</div>
                <div>Identity: {data.colorIdentity}</div>
                </ul>
            </div>
            <button> Add</button>

        </div>
    )
}