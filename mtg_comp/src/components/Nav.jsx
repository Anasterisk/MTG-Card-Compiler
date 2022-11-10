import {Link} from 'react-router-dom'
import Search from './Search'
export default function Nav (){
    return(
        <div className='Nav'>
            <Link to='/'> Home</Link>
            <Link to='/Listing'>Cards</Link>
            <Search/>
        </div>
    )
}