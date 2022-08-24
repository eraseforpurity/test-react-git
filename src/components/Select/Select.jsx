import React from "react";

export const Select = ({ handleBuyersPerPageChange }) => {
  return (
    <>
      <label htmlFor="buyers">Buyers per page</label>

      <select
        defaultValue={15}
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
