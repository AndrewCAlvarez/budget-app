import React from "react";
import FinancialEventForm from "../Components/FinancialEventForm";
import FinancialEventTable from "../Components/FinancialEventTable";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <FinancialEventForm />
      <FinancialEventTable />
    </div>
  );
}

export default Home;
