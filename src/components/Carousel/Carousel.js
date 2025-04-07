import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MangaCarousel = () => {
  const url = 'https://media.lesechos.com/api/v1/images/view/62791ea972d4b9768d55207c/1024x576-webp/0701494883813-web.webp';
  const latestManga = [
    { id: 1, name: "One Piece", image: url },
    { id: 2, name: "Naruto", image: url },
    { id: 3, name: "Attack on Titan", image: url }
  ];

  return (
    <>
      <div className='carousel-container'>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {latestManga.map((manga) => (
            <div key={manga.id}>
              <img  className='carousel-image' src={manga.image} alt={manga.name} />
              <p className="legend">{manga.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='carousel-divider'></div>
    
    </>

  );
};

export default MangaCarousel;
