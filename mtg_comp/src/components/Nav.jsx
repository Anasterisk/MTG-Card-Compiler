import {Link} from 'react-router-dom'

export default function Nav (){
    return(
        <div> I'm the Nav Bar
            <Link to='/'> Home</Link>
            <Link to='/Comp'>Deck</Link>

        </div>
    )
}