import React from "react";
import "./Pagination.css";

export const Pagination = ({
  buyersPerPage,
  totalBuyers,
  onPaginationChange,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBuyers / buyersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number, id) => (
          <li className="paginate-item" key={id}>
            <button
              className={currentPage === number ? "active" : undefined}
              onClick={() => onPaginationChange(number)}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
