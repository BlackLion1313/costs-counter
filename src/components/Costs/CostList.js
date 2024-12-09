import React from "react";
import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (props) => {
  if (!props.costs.length) {
    return <h2 className="cost-list__fallback">This year you had no purchases</h2>
    
  }
  return (
    <ul className="costs-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
      
    </ul>
  );
};

export default CostList;
