import { ChangeEventHandler, useEffect, useState } from "react";
import React from "react";

function FinancialEventForm() {
  const [amount, setAmount] = useState("$0.00");
  const [type, setType] = useState("Food");
  const [description, setDescription] = useState("");

  // With Typescript, the types need to be explicitly state. This is why
  // React.ChangeEvent<> is used here.
  //   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setAmount(new Intl.NumberFormat().format(event.target.value));
  //   };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <form>
      {/* <label>
        Amount:
        <input placeholder="$0.00" type="text" onChange={handleAmountChange} />
      </label> */}

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
    </form>
  );
}

export default FinancialEventForm;
