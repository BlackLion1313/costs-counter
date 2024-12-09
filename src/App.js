import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2020, 2, 12),
    description: "Macbook",
    amount: 299.99,
  },

  { id: "c2", 
    date: new Date(2022, 4, 9), 
    description: "MacbookPro", 
    amount: 399.99 },

  { id: "c3", 
    date: new Date(2021, 7, 6), 
    description: "MacbookLite", 
    amount: 599.99 },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
