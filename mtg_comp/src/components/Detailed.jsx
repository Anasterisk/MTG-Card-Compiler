import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"

export default function Detailed (props){

console.log(Object.values(props.data))
    let {id}=useParams()
    const [data, setData] = useState([])
   
    console.log(typeof props.data.cards[0])
    
    console.log(props.data.cards.find((x)=>x.id=== "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"))
    useEffect(()=>{
        let selectedCard = props.data.cards.find((x)=>x.id=== toString(id))
        setData(selectedCard)
    },) 
    console.log(data)
    return(
        <div>
            <div> 

            </div>

        </div>
    )
}