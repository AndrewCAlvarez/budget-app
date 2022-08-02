import React, { useState, useEffect } from "react";

// Typescript requires that the tableData state have a type. I've created
// the financialEvent type for this purpose.
type financialEvent = {
  amount: number;
  date: string;
  description: string;
  type: string;
};

export default function FinancialEventTable() {
  const [tableData, setTableData] = useState<financialEvent[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/users/2/events");
    const data = await response.json();
    setTableData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value) => {
            return (
              <tr>
                <td>{value.amount}</td>
                <td>{value.type}</td>
                <td>{value.description}</td>
                <td>{value.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
