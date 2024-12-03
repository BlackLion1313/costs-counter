import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const sumChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);

    setName("");
    setAmount("");
    setDate("");

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            value={amount}
            onChange={sumChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateChangeHandler}
            min="2020-01-01"
            step="2024-12-02"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
