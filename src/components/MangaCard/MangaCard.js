import React from 'react';
import RatingStars from './../MangaSection/MangaRating';

const MangaCard = ({ manga }) => {
  return (
    <div className="manga-card">
      <div className='manga-card-img-container'>
        <img src={manga.image} alt={manga.name} className="card-image" />
      </div>
      <div className='manga-card-detail-container'>
        <div className='manga-card-title'>
          <h3>
            <a href='/'>
            {manga.title}
            </a></h3>
        </div>
        <RatingStars rating={3} />
        <div className='manga-card-list-chapter'>
            <div className='manga-card-list-chapter-item'>
              <span>
                <a href='/'>Chapter 44</a>
              </span>
              <span>March 13, 2025</span>
            </div>
            <div className='manga-card-list-chapter-item'>
              <span>
                <a href='/'>Chapter 44</a>
              </span>
              <span>March 13, 2025</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
