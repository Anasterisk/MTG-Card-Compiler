import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from "axios"
export default function SearchResult ( ){

    const {name}=useParams()
    const [results, setResults]=useState(null)
    useEffect(()=>{
        const getData= async()=>{
            const response= await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`)
            console.log(response)
        setResults(response.data)
            console.log(response)
            }
        getData()
        
    },[])
// console.log(results.cards[0].name)
if (!results){
    return( <div> Please Wait</div>)
}else{
    return(
        <div className="listings">
            <div className="card-page">
                {
                    results.cards.map((x)=>(
                        (!x.imageUrl)?null:
                    <div key={x.id} className="card-panel">
                        <div>{x.name}</div>
                        <img className="image-panel" src={x.imageUrl}/>
                        <hr/>
                    </div>
                    ))
                }                
            </div>
        </div>
    )
}}