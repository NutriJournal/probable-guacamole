import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutGraph = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DonutGraph;
