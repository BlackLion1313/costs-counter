import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(),
    description: "Macbook",
    amount: 299.99,
  },

  { id: "c2", 
    date: new Date(), 
    description: "MacbookPro", 
    amount: 399.99 },

  { id: "c3", 
    date: new Date(), 
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
