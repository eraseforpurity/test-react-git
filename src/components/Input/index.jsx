import React from "react";
import "./Input.css";

export const Input = ({ name, onChange, value, error }) => {
  return (
    <div className="input-wrapper">
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        placeholder=" "
        type="text"
      />

      <label className="input-label" htmlFor={name}>
        {name.replace(name[0], name[0].toUpperCase())}
      </label>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
