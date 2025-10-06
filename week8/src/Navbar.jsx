import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/info'}>Info</Link>
            </li>
        </ul>
    )
}