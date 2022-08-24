import React from "react";
import { Link } from "react-router-dom";
import "./BuyersTable.css";
import { ReactComponent as Sort } from "../../assets/sort-solid.svg";
import { tableHead } from "./constants";

export const BuyersTable = ({ currentBuyers, handleSorting }) => {
  const buyersList = currentBuyers.map((buyer, index) => {
    return (
      <tr key={index}>
        <td>
          <Link to={`/buyers/${buyer.id}`}>{buyer?.id}</Link>
        </td>
        <td>{buyer?.name}</td>
        <td>{buyer.averageCheck}</td>
        <td>{buyer.purchases}</td>
        <td>{buyer.totalRevenues}</td>
      </tr>
    );
  });

  const handleSortingClick = (columnName) => {
    handleSorting(columnName, "asc");
  };

  return (
    <div className="buyers-list">
      <table>
        <thead>
          <tr>
            {tableHead.map((cell, id) => (
              <th key={id}>
                {cell.title}
                {cell.withSort && (
                  <Sort
                    onClick={() => handleSortingClick(cell.columnName)}
                    width={8}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{buyersList}</tbody>
      </table>
    </div>
  );
};
