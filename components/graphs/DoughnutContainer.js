import React from "react";
import { Spacer } from "../Layout/LayoutPrimitives";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "../../gql/queries";
import DonutGraph from "./DonutGraph";

// const { data } = useMutation()
const DonutContainer = () => {
  const { data } = useQuery(ME);

  data && console.log(data)

  const chartData = {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#00426C", "#4D8037", "#FFCE56"],
        hoverBackgroundColor: ["#FFCE56", "#00426C", "#4D8037"],
      },
    ],
  };

  return (
    <div className="w-1/5 flex justify-around mt-16">
      <div className="flex flex-col -mr-16">
        <Spacer />
        <div className="flex items-baseline">
          <div className="text-3xl">183</div>
          <div>lbs</div>
        </div>
        <div>Weight</div>
      </div>
      <div className=" w-56 flex flex-col justify-center">
        <DonutGraph data={chartData} />
        <h2 className="w-full text-center font-semibold text-xl pt-4">
          Daily Intake
        </h2>
      </div>
      <div className="flex flex-col -ml-16">
        <Spacer />
        <div className="flex items-baseline">
          <div className="text-3xl">12</div>
          <div>days</div>
        </div>
        <div>Streak</div>
      </div>
    </div>
  );
};

export default DonutContainer;
