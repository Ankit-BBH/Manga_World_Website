import React, {useState} from "react";
import './Pagination.css';


function PageSelect(currentPage, totalPages, onPageChange) {
  const [hasOpenedSelect, setHasOpenedSelect] = useState(false);

  const handleFocus = () => {
    setHasOpenedSelect(true); // Load options only when user opens
  };

  const optionsToRender = hasOpenedSelect
    ? Array.from({ length: totalPages }, (_, i) => i + 1)
    : [currentPage];

  return (
    <select
      className="page-select"
      value={currentPage}
      onFocus={handleFocus}
      onChange={(e) => onPageChange(Number(e.target.value))}
    >
      {optionsToRender.map((page) => (
        <option key={page} value={page}>
          {page}
        </option>
      ))}
    </select>
  );
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-btn"
      >
        &lt; Previous
      </button>

      {/* Show first page and leading ellipsis if needed */}
      {startPage > 1 && (
        <>
          <button
            className="page-btn"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {startPage > 2 && <span className="dots">...</span>}
        </>
      )}

      {/* Main page buttons */}
      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Show trailing ellipsis and last page if needed */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="dots">...</span>}
          <button
            className="page-btn"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-btn"
      >
        Next &gt;
      </button>
      {PageSelect(currentPage, totalPages, onPageChange)}
    </div>
  );
};

export default Pagination;
