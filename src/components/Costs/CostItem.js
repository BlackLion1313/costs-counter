import { useState } from "react";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = (props) => {
    setDescription("New Costs");
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Change description</button>
    </Card>
  );
};

export default CostItem;
