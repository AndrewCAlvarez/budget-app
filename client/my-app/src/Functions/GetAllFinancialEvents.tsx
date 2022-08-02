// All this code is currently not being used. Instead, it has been added directly
// to the FinancialEventTable component.

import { response } from "express";

function GetAllFinancialEvents() {
  fetch("http://localhost:8080/users/1/events")
    .then((response) => response.json())
    .then((data) => {
      console.log(typeof data);
      return data;
    });
}

export default GetAllFinancialEvents;
