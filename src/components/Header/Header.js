import React from "react";
import "../../assets/styles/header.css"; // Ensure proper styling
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import UserOptions from "./UserOptions";

const Header = () => {
    return (
        <header className="header">
            <div className="header-main">
                <Logo />
                <Navigation />
                <SearchBar />
                <UserOptions />
            </div>
        </header>
    );
};

export default Header;
