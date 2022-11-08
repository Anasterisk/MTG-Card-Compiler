import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./DataContext"

import PageNav from "./PageNav"

export default function Listings (props){
let navigate=useNavigate()
const { value2} =useContext(DataContext)
const {data, setData}=useState(props.data)
// console.log(data)
const showCard=(x)=>{
    navigate(`${x.id}`)
}
const [page,setPage]=useState(value2)
console.log(page)
console.log(value2)

if(!props.data){return( <div>Please wait</div>)} 

  else{
    return( 
    <div className="listings"> 
           <PageNav/>
           {/* <h2>page: {page}</h2> */}
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
     </div>
    )
}}