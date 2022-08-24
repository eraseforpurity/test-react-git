import React from "react";
import { useParams } from "react-router-dom";
import "./BuyerPage.css";
import { buyers } from "../../constants/buyers";

export const BuyerPage = () => {
  const { buyerId } = useParams();

  const currentBuyer = buyers.find((buyer) => buyer.id === +buyerId);

  console.log(buyerId, currentBuyer, buyers[0].id);

  return (
    <div className="buyer-wrapper">
      <h2 className="user-title">User Info</h2>
      <ul className="buyer-info">
        <li>BuyerID : {currentBuyer.id}</li>
        <li>Name : {currentBuyer.name}</li>
        <li>Average Check : {currentBuyer.averageCheck}</li>
        <li>Purchases : {currentBuyer.purchases}</li>
        <li>Total Revenues : {currentBuyer.totalRevenues}</li>
      </ul>
    </div>
  );
};
