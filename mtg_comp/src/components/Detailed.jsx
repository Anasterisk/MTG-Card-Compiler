import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"
import axios from "axios"
export default function Detailed (props){
    
    let {id}=useParams()
    
    const [data, setData] = useState('')
   
    // console.log(typeof props.data.cards[0])
    // console.log(typeof Object.values(props.data.cards))
    console.log(props.data.cards.find((x)=>x.id=== id))
    
    useEffect(()=>{
        let selectedCard = props.data.cards.find((x)=>x.id=== id)
        setData(selectedCard) 
        console.log(data)
   
    },) 

//    const gatherCard = async ()=>{
//         const response= await axios.get(`https://api.magicthegathering.io/v1/cards`)
//             setData(response.data)
//         let selectedCard = response.data.cards.find((x)=>x.id=== toString(id))
//             setData(selectedCard) 
//                 console.log(selectedCard)
//    }
   
//    useEffect(()=>{
//         gatherCard()

//    },[])
   
    return(!data)?
        <div> Please wait</div>
            :(
        <div key={data.name} className="card-detailed">
            <div className="card-header">
           <div>{data.name}</div>
           <div> {data.manaCost}</div>
           </div>
            <img src={data.imageUrl}/>
            <div className="card-traits">
                <div> {data.type}</div> <div></div>
                <p>{data.text}</p>
                <div>power: {data.power}/ toughness:{data.toughness}</div>
            </div>

        </div>
    )
}