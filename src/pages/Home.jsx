import React from 'react';
import MangaSection from '../components/MangaSection/MangaSection';
import Carousel from '../components/Carousel/Carousel';

const url = "https://media.lesechos.com/api/v1/images/view/62791ea972d4b9768d55207c/1024x576-webp/0701494883813-web.webp";
const latestMangas = [
  { title: 'Weird And Hard To Kill? Sorry I’m The Real Immortal', genre: 'Action', image: url, description: "Manga A", number: '313K' },
  { title: 'Manga B', genre: 'Adventure', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga C', genre: 'Fantasy', image: url, name: "Manga A", description: "Manga A", number: '313K'  },
  { title: 'Manga D', genre: 'Romance', image: url, name: "Manga A", description: "Manga A", number: '313K'  },
  { title: 'Manga E', genre: 'Sci-Fi', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga F', genre: 'Comedy', image: url , name: "Manga A", description: "Manga A", number: '313K' },
];

const popularMangas = [
  { title: 'Manga X', genre: 'Drama', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga Y', genre: 'Horror', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga Z', genre: 'Mystery', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga W', genre: 'Thriller', image: url , name: "Manga A", description: "Manga A", number: '313K' },
  { title: 'Manga V', genre: 'Supernatural', image: url, name: "Manga A", description: "Manga A", number: '313K'  },
  { title: 'Manga U', genre: 'Fantasy', image: url, name: "Manga A", description: "Manga A", number: '313K'  },
];

const Home = () => {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section>
        <MangaSection title="Latest Releases" mangas={latestMangas} itemsPerPage={2} />
      </section>
      <section>
        <MangaSection title="Popular Manga" mangas={popularMangas} itemsPerPage={2} />
      </section>
    </>
  );
};

export default Home;
