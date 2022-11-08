import {Link} from 'react-router-dom'
import Search from './Search'
export default function Nav (){
    return(
        <div> I'm the Nav Bar
            <Link to='/'> Home</Link>
            <Link to='/Comp'>Deck</Link>
            <Link to='/Listing'>Cards</Link>
            <Search/>
        </div>
    )
}