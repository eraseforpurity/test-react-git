import React from "react";
import "./Button.css";

export const Button = ({ type, text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {text}
    </button>
  );
};
