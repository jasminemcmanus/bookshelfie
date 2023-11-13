import React from "react";
import { NavLink } from "react-router-dom";
import { handleNavBar } from "../data/data";

function NavBar() {
    
    return (
        <nav>
            <NavLink onClick={handleNavBar} className="navlinks" exact to="/">Home</NavLink>
            <NavLink onClick={handleNavBar} className="navlinks" to="/mybooks">My Books</NavLink>
            <NavLink onClick={handleNavBar} className="navlinks" to="/reviews">Reviews</NavLink>
        </nav>
    );
}

export default NavBar;
