import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Doyse Travels</h1>

                <ul className="nav-menu">
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}