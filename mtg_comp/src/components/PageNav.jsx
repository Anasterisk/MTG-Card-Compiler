import { useContext, useEffect, useState } from "react"
import { DataContext } from "./DataContext"

export default function PageNav (props){
const {value1, value2} =useContext(DataContext)
const [data,setData]=useState(value1)
const [page,setPage]=useState(value2)
console.log(page)
// useEffect(()=>{
//     setPage()
// },[])

function check (){
    console.log(page)
    setPage(parseInt(page)+1)
    console.log(page)
}



    return (
        <div className="pageNav">
            <button> Prev Page </button>
            <div className="select-Page">
                <input type="text" />
            <button type="submit">Go to</button>
            </div>
            {/* <div> <h2>page:{page}</h2></div> */}

            <button onClick={check }> Next Page </button>

        </div>
    )
}