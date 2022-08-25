import React from "react";
import "./TerminalsTable.css";
import { Button } from "../Button";

export const TerminalsTable = ({ listState, handleDeleteClick }) => {
  const terminalsList = listState.map((terminal, index) => {
    return (
      <tr key={index}>
        <td>{terminal?.title}</td>
        <td>{terminal?.description}</td>
        <td>
          <Button
            onClick={() => handleDeleteClick(index)}
            text="Delete"
            type="button"
          />
        </td>
      </tr>
    );
  });

  return (
    <div className="terminals-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>{terminalsList}</tbody>
      </table>
    </div>
  );
};
