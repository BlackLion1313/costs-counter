import "./CostFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    console.log('event.target.value', event.target.value)
  };
 

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Choose year</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="All">All</option>
          <option value="2024">2024</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
