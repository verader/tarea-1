import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = ( { backLinkVisible } ) => (
    <div class="header">
        <div><h1>Star Wars Database</h1></div>
        <div className="options">
            <Link className="option" to="/">Home</Link>            
        </div>
    </div>
);

export default Header;