import React from "react";

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search Manga..." className="search-bar" />
            <button className="search-button">🔍</button>
        </div>

    );
};

export default SearchBar;