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
console.log(typeof data.colorIdentity)
    console.log(data)
    return(!data)?
        <div> Please wait</div>
            :(
        <div key={data.name} className="card-detailed">
            <div className="card-header">
           <h2>{data.name}</h2>
           <div> {data.manaCost}</div>
           </div>
            <img className="card-image" src={data.imageUrl}/>
            <div className="card-traits">
                <div> {data.type}</div> 
                <div className="card-text">
                <p>{data.text}</p>
                <p>{!data.flavor?null:<p><em>{data.flavor}</em></p>}</p>
                </div>
                <ul className="card-stats">
                    <div>
                    {data.types[0]==="Creature"
                        ?<div>Power/Toughness: {data.power}/{data.toughness}</div>:null}
                    </div>
                <div>Identity: {data.colorIdentity=='U'? "Blue":
                                data.colorIdentity=='W'? "White":
                                data.colorIdentity=='B'? "Black":
                                data.colorIdentity=='R'? "Red":
                                data.colorIdentity=='G'? "Green": "Colorless"}</div>
                <div>Converted Mana Cost: {data.cmc}</div>
                </ul>
            </div>
            <button> Add</button>

        </div>
    )
}