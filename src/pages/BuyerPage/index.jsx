import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./BuyerPage.css";
import { BuyersTableContext } from "../../context/buyersTableContext";

export const BuyerPage = () => {
  const { buyerId } = useParams();

  const { buyersState } = useContext(BuyersTableContext);

  const currentBuyer = buyersState.find((buyer) => buyer.id === +buyerId);

  return (
    <div className="buyer-wrapper">
      <h2 className="user-title">User Info</h2>
      <ul className="buyer-info">
        <li>BuyerID : {currentBuyer?.id}</li>
        <li>Name : {currentBuyer?.name}</li>
        <li>Average Check : {currentBuyer?.averageCheck}</li>
        <li>Purchases : {currentBuyer?.purchases}</li>
        <li>Total Revenues : {currentBuyer?.totalRevenues}</li>
      </ul>
    </div>
  );
};
