import React, { useContext } from "react";
import "./Pagination.css";
import { BuyersTableContext } from "../../context/buyersTableContext";

export const Pagination = () => {
  const { pageNumbers, handlePaginationChange, currentPage } =
    useContext(BuyersTableContext);

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number, id) => (
          <li className="paginate-item" key={id}>
            <button
              className={currentPage === number ? "active" : undefined}
              onClick={() => handlePaginationChange(number)}
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
