import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav-links">
            <ul>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/manga" className={({ isActive }) => isActive ? "active" : ""}>Manga</NavLink>
                </li>
                <li>
                    <NavLink to="/genres" className={({ isActive }) => isActive ? "active" : ""}>Genres</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
