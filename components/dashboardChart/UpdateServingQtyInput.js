import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { adjustIntValuesonAnObject } from "../../lib/utils";
import { UPDATE_FOOD_LOG_RECORD } from "../../gql/mutations";

export default function UpdateServingQtyInput({
  item,
  isEditing,
  setIsEditing,
  loggedQty: currQty,
}) {
  const [qty, setQty] = useState(currQty);
  const [updateRecord] = useMutation(UPDATE_FOOD_LOG_RECORD);

  const update = (e) => {
    e.preventDefault();
    // Pass the obj, currVal, and qty
    const adjItem = adjustIntValuesonAnObject(item, currQty, qty);
    const { calories, fat, protein, carbs, food_string, id } = adjItem;
    const foodString = JSON.parse(food_string);

    updateRecord({
      variables: {
        id: id,
        calories: calories,
        fat: fat,
        protein: protein,
        carbs: carbs,
        food_string: JSON.stringify({ ...foodString, loggedQty: qty }),
      },
      /* 
        loggedQty doesn't update properly on UI with optimnisticResponse (or refecthQueries), 
        suspicion is that it needs to be moved to a field on the actual
        mutation in order to update UI optimistically
      */
      optimisticResponse: {
        __typename: "Mutation",
        updateDailyRecord: {
          id: id,
          __typename: "DailyRecord",
          calories: calories,
          fat: fat,
          protein: protein,
          carbs: carbs,
          food_string: JSON.stringify({ ...foodString, loggedQty: qty }),
        },
      },
    });
    setIsEditing(!isEditing);
  };

  return (
    <form onSubmit={update}>
      <input
        type="number"
        placeholder="Entered adjusted servings"
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value))}
      />
    </form>
  );
}
