/*
    ISSUE: Monetary amount has strange rounding errors and NaN responses.
*/

import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import React from "react";
import PostFinancialEvent from "../Functions/PostFinancialEvent";

function FinancialEventForm() {
  const [amount, setAmount] = useState(0.0);
  const [type, setType] = useState("Food");
  const [description, setDescription] = useState("");

  // With Typescript, the types need to be explicitly state. This is why
  // React.ChangeEvent<> is used here.
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(parseFloat(event.target.value)));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    PostFinancialEvent(amount, type, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Financial Event</h1>
      <label>
        Amount:
        <input placeholder="$0.00" type="text" onChange={handleAmountChange} />
      </label>

      <select value={type} onChange={handleTypeChange}>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
      </select>

      <label>
        Description(Optional):
        <input
          value={description}
          type="text"
          onChange={handleDescriptionChange}
        />
      </label>

      <p>
        Values: Amount - ${amount} Type - {type} Description - {description}
      </p>
      <input type="submit" />
    </form>
  );
}

export default FinancialEventForm;
