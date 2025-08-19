import React from "react";
import './styling.css';
import {Link} from "react-router-dom";
function Navbars(){
    return(
        <div className="NavBarsection">
            <div className="left-img">
                <img src="" alt="logo"></img>
            </div>
          <div className="left">
             <p>Career guaidance</p>
          </div>
          <div className="right">
            <nav>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/careerpath'}>Career Path</Link>
                </li>
                <li>
                    <Link to={'/'}>Nothing</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/register'}>Register</Link>
                </li>
            </ul>
        </nav>
          </div>
        </div>
        
    )
}
export default Navbars;