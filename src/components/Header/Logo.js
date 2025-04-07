import React from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="logo-container">
            <a href="/">
                <img src={logo} alt="Manga World" className="logo-image" />
            </a>
        </div>
    );
};

export default Logo;