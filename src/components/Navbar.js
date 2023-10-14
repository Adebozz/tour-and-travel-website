import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
// import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Doyse Travels</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                        <a className={item.cName} href={item.url}>
                        <i className={item.icon}></i>
                        {item.tittle}
                         </a>
                    </li> 
                        )
                    })
                }
                <button>Sign Ups</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;