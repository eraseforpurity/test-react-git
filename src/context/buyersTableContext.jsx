import React, { useState, createContext } from "react";
import { buyers } from "../constants/buyers";

const sortColumn = (name, direction = "asc", arrayToSort) => {
  if (direction === "asc")
    return [...arrayToSort].sort((a, b) => (a[name] > b[name] ? -1 : 1));
  return [...arrayToSort].sort((a, b) => (a[name] > b[name] ? 1 : -1));
};

const callbackFilter = (buyer, query) => {
  if (query === "") {
    return buyer;
  } else if (buyer.name.toLowerCase().includes(query.toLowerCase())) {
    return buyer;
  }
};

const filterBuyers = (query, buyers) => {
  const filtered = buyers.filter((buyer) => callbackFilter(buyer, query));

  return filtered;
};

export const BuyersTableContext = createContext(null);

const BuyersTableContextProvider = ({ children }) => {
  const [buyersState, setBuyersState] = useState(buyers);
  const [currentPage, setCurrentPage] = useState(1);
  const [buyersPerPage, setbuyersPerPage] = useState(15);

  const [filterValue, setFilterValue] = useState("");

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
    setFilterValue(e.target.value);
    setCurrentPage(1);
  };

  const handleSorting = (columnName, direction) => {
    const sortedArr = sortColumn(columnName, direction, buyersState);
    setBuyersState(sortedArr);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(buyersState.length / +buyersPerPage); i++) {
    pageNumbers.push(i);
  }

  const buyersTableContextValue = {
    pageNumbers,
    filterValue,
    buyersState,
    buyersPerPage,
    currentBuyers,
    currentPage,
    handlePaginationChange,
    handleBuyersPerPageChange,
    handleFilterChange,
    handleSorting,
  };

  return (
    <BuyersTableContext.Provider value={buyersTableContextValue}>
      {children}
    </BuyersTableContext.Provider>
  );
};

export default BuyersTableContextProvider;
