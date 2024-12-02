import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
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

  const addCostHandler = (cost) => {
    console.log("cost", cost);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
