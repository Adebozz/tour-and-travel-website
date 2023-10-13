import { Component } from "react";
import "./Navbar.css";
// import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Doyse Travels</h1>

                <ul className="nav-menu">
                    <li>
                        <a>
                        <i class="fa-solid fa-house-user fa-flip"></i>Home </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;