import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import SearchResultD from "./SearchResultsD"
export default function SearchResult ( ){

    let navigate=useNavigate()
    const {name}=useParams()
    const [results, setResults]=useState(null)
    useEffect(()=>{
        const getData= async()=>{
            const response= await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`)
            console.log(response)
        setResults(response.data)
            console.log(results)
            }
        getData()
        
    },[])
    console.log(`data being pull: ${results}`)
    const showCard=(x)=>{
        navigate(`${x.id}`)
    }
    
if (!results){
    return( <div> Please Wait</div>)
}else{
    return(
        <div className="listings">
            <div className="card-page">
                {
                    results.cards.map((x)=>(
                        (!x.imageUrl)?null:
                        <a href={`http://localhost:3000/Listing/${x.id}`}> 
                   <div key={x.id} className="card-panel" >
                         <div className="open-panel" onClick={()=>showCard(x)}>
                        <div>{x.name}</div>
                        <img className="image-panel" src={x.imageUrl}/>
                        
                        </div>
                        <hr/>
                    </div>Open</a>
                    ))
                }                
            </div>
        </div>
    )
}}