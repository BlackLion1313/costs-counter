import DiagramBar from "./DiagramBar";
import "./Diagram.css"

const Diagram = (props) => {
    const DataSetValues = props.dataSets.map
    (dataSet => dataSet.value)

    const maxMonthCosts = Math.max(...DataSetValues)
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
