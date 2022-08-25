import React, { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TerminalsTable } from "../../components/TerminalsTable";
import "./TerminalsPage.css";

export const TerminalsPage = () => {
  const initialState = {
    title: "",
    description: "",
  };
  const [listState, setListState] = useState([]);

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.title && formState.description) {
      setListState((prevState) => [
        ...prevState,
        { title: formState.title, description: formState.description },
      ]);

      setFormState(initialState);
    }
  };

  const handleDeleteClick = (index) => {
    setListState((prevState) =>
      prevState.filter((el) => prevState.indexOf(el) !== index)
    );
  };

  return (
    <div className="terminal-wrapper">
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <Input
          value={formState.title}
          name="title"
          onChange={handleInputChange}
        />
        <Input
          value={formState.description}
          name="description"
          onChange={handleInputChange}
        />
        <Button type="submit" text="Add Terminal" />
      </form>
      <TerminalsTable
        handleDeleteClick={handleDeleteClick}
        listState={listState}
      />
    </div>
  );
};
