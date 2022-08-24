import React, { useState } from "react";
import "./BuyersPage.css";
import { BuyersTable } from "../../components/BuyersTable";
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/Select/Select";
import { filterBuyers } from "../../helpers/filter";
import { sortColumn } from "../../helpers/sort";
import { buyers } from "../../constants/buyers";

export const BuyersPage = () => {
  const [buyersState, setBuyersState] = useState(buyers);
  const [currentPage, setCurrentPage] = useState(1);
  const [buyersPerPage, setbuyersPerPage] = useState(15);

  const lastBuyerIndex = currentPage * buyersPerPage;
  const firstBuyerIndex = lastBuyerIndex - buyersPerPage;
  const currentBuyers = buyersState.slice(firstBuyerIndex, lastBuyerIndex);

  const handlePaginationChange = (number) => setCurrentPage(number);
  const handleBuyersPerPageChange = (e) => {
    setbuyersPerPage(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setBuyersState(filterBuyers(e.target.value, buyers));
    setCurrentPage(1);
  };

  const handleSorting = (columnName, direction) => {
    const sortedArr = sortColumn(columnName, direction, buyersState);
    setBuyersState(sortedArr);
  };

  return (
    <div className="buyers-wrapper">
      <div className="controls">
        <input onChange={handleFilterChange} placeholder="Search by name" />

        <div>
          <Select handleBuyersPerPageChange={handleBuyersPerPageChange} />

          <Pagination
            onPaginationChange={handlePaginationChange}
            totalBuyers={buyersState.length}
            buyersPerPage={buyersPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>

      <BuyersTable
        handleSorting={handleSorting}
        currentBuyers={currentBuyers}
      />
    </div>
  );
};
