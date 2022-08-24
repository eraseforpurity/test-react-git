import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BuyersTableContext } from "../../context/buyersTableContext";
import "./BuyersTable.css";
import { ReactComponent as Sort } from "../../assets/sort-solid.svg";
import { tableHead } from "./constants";

export const BuyersTable = () => {
  const { currentBuyers, handleSorting } = useContext(BuyersTableContext);

  const buyersList = currentBuyers.map((buyer, index) => {
    return (
      <tr key={index}>
        <td>
          <Link to={`/buyers/${buyer.id}`}>{buyer?.id}</Link>
        </td>
        <td>{buyer?.name}</td>
        <td>{buyer?.averageCheck}</td>
        <td>{buyer?.purchases}</td>
        <td>{buyer?.totalRevenues}</td>
      </tr>
    );
  });

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
                    onClick={() => handleSorting(cell.columnName)}
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
