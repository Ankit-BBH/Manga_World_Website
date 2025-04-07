import React from 'react';
import './../assets/styles/listgenres.css';

export default function ListGenres() {
    const genres = ["Action", "Adventure", "Romance", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Mystery", "Sports"
        , "Adventure", "Romance", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Mystery", "Sports"
        , "Adventure", "Romance", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Mystery", "Sports"
        , "Adventure", "Romance", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Mystery", "Sports"
        , "Adventure", "Romance", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Mystery", "Sports"
    ];

    return (
        <section className="list-genres">
            <div className="list-genres-title">
                <h1>List of Genres</h1>
            </div>
            <div className="list-genres-items">
                <ul className="list-genres-list">
                    {genres.map((genre, index) => (
                        <li key={index}>
                            <a href={`/genres/${genre.toLowerCase()}`}>
                                <span>{genre}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
