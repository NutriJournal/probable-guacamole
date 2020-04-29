import { useState } from "react";

import InfoSVG from "../svg/InfoSVG.js";
import StandardCalc from "./StandardCalc.js";
import MetricCalc from "./MetricCalc.js";
import { VerticalRow } from "../Layout/LayoutPrimitives.js";

const Calculator = () => {
  const [bmiInfo, setBmiInfo] = useState({
    height: 0,
    weight: 0,
    age: 0,
    kilograms: 0,
    centimeters: 0,
    bmi: null,
  });
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState({ standard: true, metric: false });

  return (
    <>
      <div className="flex-row p-4 m-4 w-1/2 min-h-0">
        <div className="flex-row content-around border-b-4 border-purple-400">
          <h1 className="inline text-3xl">Calculate your BMI</h1>
        </div>
        <div className="flex">
          <VerticalRow extraClasses="w-1/3">
            <h2 className="my-4">BMI Categories:</h2>
            <p>Underweight = 18.5</p>
            <p>Normal Weight = 18.5 - 24.9</p>
            <p>Overweight = 25 - 29.9</p>
            <p>Obese = BMI of 30 or greater</p>
          </VerticalRow>
          <div className="w-2/3">
            <div className="flex-col my-10">
              <div className="flex">
                <h2 className="m-2">Enter Height & Weight</h2>
                <InfoSVG />
              </div>
              <button
                className={`text-xs text-black px-12 py-1 active:bg-active-blue border-dark-gray rounded relative ${
                  active.standard
                    ? "bg-active-blue text-white"
                    : "bg-soft-gray text-black"
                }`}
                name="standard"
                active="standard"
                onClick={() =>
                  setActive({
                    standard: !active.standard,
                    metric: !active.metric,
                  })
                }
              >
                Standard
              </button>
              <button
                className={`text-xs text-black px-12 py-1 border-dark-gray rounded relative ${
                  active.metric
                    ? "bg-active-blue text-white"
                    : "bg-soft-gray text-black"
                }`}
                onClick={() =>
                  setActive({
                    standard: !active.standard,
                    metric: !active.metric,
                  })
                }
              >
                Metric
              </button>
            </div>
            {active.standard ? (
              <StandardCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} />
            ) : (
              <MetricCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} />
            )}
          </div>
        </div>
        {/* {active.standard ? <StandardCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} /> :
                    <MetricCalc bmiInfo={bmiInfo} setBmiInfo={setBmiInfo} /> } */}
      </div>
      {/* <div className="border-b">
                <h1 className="pl-8 text-2xl muli">Your BMI: {bmiInfo.bmi}</h1>
            </div> */}
    </>
  );
};

export default Calculator;
