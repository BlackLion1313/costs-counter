import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("All");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts =
    selectedYear === "All"
      ? props.costs
      : props.costs.filter(
          (cost) => cost.date.getFullYear().toString() === selectedYear
        );

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          year={selectedYear}
          costs={props.costs}
          onChangeYear={yearChangeHandler}
        />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
