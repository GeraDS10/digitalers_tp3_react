import React from "react";
import Navbar from "../NavBar/NavBar";
import { Link } from 'react-router-dom';
import './style.css'

function Header (){
    
    
    return(
    <header>
        <Link to="/">
            <h1>Beer-Store</h1>
        </Link>
        <Navbar />
    </header>
    );
}

export default Header;