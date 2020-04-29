import { useState } from "react";
import DashboardChartItem from "./DashboardChartItem.js";
import { useMutation, useQuery } from "@apollo/react-hooks";

import {
  UPDATE_FOOD_STRING,
  DELETE_FOOD_LOG_RECORD,
} from "../../gql/mutations.js";
import { Spacer } from "../Layout/LayoutPrimitives.js";
import { GET_OPEN_LOG_STATE } from "../../gql/queries.js";
import { totalUpPropertyValuesInArray, chunkArr } from "../../lib/utils";

const DashboardChart = ({ records, refetch }) => {
  const [currChunk, setCurrChunk] = useState(0);
  const [updateFoodString] = useMutation(UPDATE_FOOD_STRING);
  const {
    loading,
    error,
    data: { mealType, logType },
  } = useQuery(GET_OPEN_LOG_STATE);
  const [deleteItem] = useMutation(DELETE_FOOD_LOG_RECORD);

  async function deleteRecord(id) {
    await deleteItem({ variables: { id: id } });
    console.log("in deleteRecord");
    refetch();
  }

  if (loading) return "Loading ...";
  if (error) return `${error}`;

  const toggleFav = (item) => {
    let parsedFood = JSON.parse(item.food_string);
    const fav = parsedFood.favorite;
    parsedFood = { ...parsedFood, favorite: !fav };
    updateFoodString({
      variables: {
        id: item.id,
        food_string: JSON.stringify(parsedFood),
      },
    });
    const updateItem = { ...item, food_string: JSON.stringify(parsedFood) };
    return updateItem;
  };

  const activeRecords = records.filter(
    (record) => record.meal_type === mealType
  );

  const totalCalories = totalUpPropertyValuesInArray(activeRecords, "calories");

  const calorieLabel =
    logType === "daily" ? `${totalCalories} total calories` : "";

  const chunkedRecords = chunkArr(activeRecords, 5);

  return (
    <section className="dashboard-chart w-full flex flex-col">
      <div className="w-full flex">
        <div className="flex w-5/12 items-center justify-evenly py-3">
          <div className="w-1/3 text-sm">{`${activeRecords.length} items logged`}</div>
          <div className=" text-sm">{calorieLabel}</div>
        </div>
        <div className="flex w-7/12 justify-center items-center">
          <div className="w-1/6 text-sm text-center">Calories</div>
          <div className="w-1/6 text-sm text-center">Fats</div>
          <div className="w-1/6 text-sm text-center">Protein</div>
          <div className="w-1/6 text-sm text-center">Carbs</div>
          <Spacer />
        </div>
      </div>
      <div >
        {chunkedRecords.length !== 0 &&
          chunkedRecords[currChunk].map((cv) => {
            return (
              <DashboardChartItem
                data={cv}
                key={cv.id}
                toggleFav={toggleFav}
                deleteRecord={deleteRecord}
                refetch={refetch}
              />
            );
          })}
      </div>
      <Spacer />
      {
        <span
          className={`flex mt-40 ${chunkedRecords.length <= 1 ? "hidden" : ""}`}
        >
          <Spacer />
          <button
            className="px-2 py-1 border w-1/6 disabled:text-gray-100 disabled:cursor-not-allowed"
            disabled={currChunk === 0}
            onClick={() => setCurrChunk(currChunk - 1)}
          >
            previous
          </button>
          <button
            className="px-2 py-1 border w-1/6 disabled:text-gray-100 disabled:cursor-not-allowed"
            disabled={currChunk === chunkedRecords.length - 1}
            onClick={() => setCurrChunk(currChunk + 1)}
          >
            next
          </button>
          <Spacer />
        </span>
      }
    </section>
  );
};

export default DashboardChart;
