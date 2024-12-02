import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(),
      description: "Macbook",
      amount: 299.99,
    },
    {
      date: new Date(),
      description: "MacbookPro",
      amount: 399.99,
    },
    {
      date: new Date(),
      description: "MacbookLite",
      amount: 599.99,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
