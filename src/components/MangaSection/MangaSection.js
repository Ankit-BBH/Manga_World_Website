import React, { useState } from 'react';
import MangaCard from './../MangaCard/MangaCard';
import Pagination from '../Pagination/Pagination';

const MangaSection = ({ title, mangas, itemsPerPage, paginationFlag = false}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mangas.length / itemsPerPage);

  // For pagination: slice only the current page's items
  // For load more: slice from start to currentPage * itemsPerPage
  const currentItems = paginationFlag
    ? mangas.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : mangas.slice(0, currentPage * itemsPerPage);

  return (
    <section className="manga-section">
      <div className='manga-section-title'>
        <h2>{title}</h2>
      </div>

      <div className="manga-grid">
        {currentItems.map((manga, index) => (
          <article key={index} className="manga-article">
            <MangaCard manga={manga} />
          </article>
        ))}
      </div>

      {/* Conditional rendering */}
      {paginationFlag ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      ) : (
        currentPage < totalPages && (
          <div className='read-more-container'>
            <button
              className="read-more"
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Read More
            </button>
          </div>
        )
      )}
    </section>
  );
};

export default MangaSection;
