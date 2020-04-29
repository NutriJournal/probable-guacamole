import Graph from "../graphs/Graph.js";

const ProgressGraph = (props) => {
  return (
    <div>
      <Graph data={props.data.myWeightLogs} />
    </div>
  );
};

export default ProgressGraph;
