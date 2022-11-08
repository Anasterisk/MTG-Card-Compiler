
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import { createContext, useContext, useState, useEffect, React, useRef} from 'react';

export default function Search (){
    const [searchTerm, setSearchTerm]=useState("")
    const searchValue =useRef('')
    let navigate = useNavigate();
  const showItem = (item) => {
    navigate(`${item._id}`);
  };
    const handleChange=(e)=>{
        setSearchTerm({...searchTerm, [""]:e.target.value})
        console.log(searchTerm)
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e)
        navigate(`/search/${searchTerm[""]}`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> Search:</label>
                <input onChange={handleChange} value={searchTerm[""]} type="text" id="name"/> 
                <button type="submit"  >X</button>
            </form>
        </div>
    )
}