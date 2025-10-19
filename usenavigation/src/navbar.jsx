import {Link}  from 'react-router-dom';

export function Navbar(){
    return(
        <>
          <nav>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/register'}>Register</Link>
            </li>
          </nav>  
        </>
    )
}