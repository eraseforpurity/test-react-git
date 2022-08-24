import React, { useContext } from "react";
import "./Pagination.css";
import { BuyersTableContext } from "../../context/buyersTableContext";

export const Pagination = () => {
  const { buyersPerPage, buyersState, handlePaginationChange, currentPage } =
    useContext(BuyersTableContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(buyersState.length / +buyersPerPage); i++) {
    pageNumbers.push(i);
  }

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
