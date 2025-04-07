import React from "react";
import MangaSection from "../components/MangaSection/MangaSection";

export default function ListManga() {

    
    const url = "https://media.lesechos.com/api/v1/images/view/62791ea972d4b9768d55207c/1024x576-webp/0701494883813-web.webp";
    const latestMangas = [];
    for (let i = 0; i < 60; i++) {
        latestMangas.push({ title: 'Weird And Hard To Kill? Sorry I’m The Real Immortal', genre: 'Action', image: url, description: "Manga A", number: (i + 'K') });
    }

    return (
        <MangaSection title="Manga List" mangas={latestMangas} itemsPerPage={1} paginationFlag={true} />
    );
}