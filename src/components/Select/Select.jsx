import React, { useContext } from "react";
import { BuyersTableContext } from "../../context/buyersTableContext";

export const Select = () => {
  const { handleBuyersPerPageChange, buyersPerPage } =
    useContext(BuyersTableContext);

  return (
    <>
      <label htmlFor="buyers">Buyers per page</label>

      <select
        defaultValue={buyersPerPage}
        id="buyers"
        onChange={handleBuyersPerPageChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </>
  );
};
