import Costs from "./components/Costs/Costs";

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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
