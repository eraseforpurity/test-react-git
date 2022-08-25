import React, { useContext } from "react";
import "./BuyersPage.css";
import { BuyersTableContext } from "../../context/buyersTableContext";
import { BuyersTable } from "../../components/BuyersTable";
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/Select/Select";

export const BuyersPage = () => {
  const { handleFilterChange, filterValue } = useContext(BuyersTableContext);

  return (
    <div className="buyers-wrapper">
      <div className="controls">
        <input
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Search by name"
        />

        <div>
          <Select />

          <Pagination />
        </div>
      </div>

      <BuyersTable />
    </div>
  );
};
