import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("All");
  const filteredCosts =
    selectedYear === "All"
      ? props.costs
      : props.costs.filter(
          (cost) => cost.date.getFullYear().toString() === selectedYear
        );

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter
          year={selectedYear}
          costs={props.costs}
          onChangeYear={yearChangeHandler}
        />
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
