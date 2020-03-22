import { useState } from "react";

import NutritionFacts from "./NutritionFacts";
import PhoneManBigSVG from "./svg/PhoneManBigSVG";
import FoodSearchList from "./FoodSearchList";

import { ADD_FOOD } from "../gql/mutations";
import { useMutation } from "@apollo/react-hooks";

export default function FoodSearchResults({ searchResults }) {
  const [nutrInfo, setNutrInfo] = useState(dummyData)
  const [addFood, {}] = useMutation(ADD_FOOD);

  const svg = (
    <div className="flex flex-col mt-40">
      <PhoneManBigSVG />
    </div>
  );

  return (
    <section className="flex flex-1">
      {/* <FoodSearchList setNutrInfo={setNutrInfo} searchResults={searchResults} /> */}
      <div className="Flex w-1/2"></div>
      <div className="w-1/2 max-h flex">
        <div className="flex-1"></div>
        {nutrInfo ? <NutritionFacts data={nutrInfo} /> : svg}
        <div className="flex-1"></div>
      </div>
    </section>
  );
}

const dummyData = {
  label: "Tablespoon",
  info: {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#73d9e828-3331-4dc5-adb0-eaf84021d392",
    yield: 2,
    calories: 101,
    totalWeight: 14.2,
    dietLabels: [],
    healthLabels: [
      "SUGAR_CONSCIOUS",
      "VEGETARIAN",
      "PESCATARIAN",
      "GLUTEN_FREE",
      "WHEAT_FREE",
      "EGG_FREE",
      "PEANUT_FREE",
      "TREE_NUT_FREE",
      "SOY_FREE",
      "FISH_FREE",
      "SHELLFISH_FREE",
      "PORK_FREE",
      "RED_MEAT_FREE",
      "CRUSTACEAN_FREE",
      "CELERY_FREE",
      "MUSTARD_FREE",
      "SESAME_FREE",
      "LUPINE_FREE",
      "MOLLUSK_FREE",
      "ALCOHOL_FREE",
      "NO_SUGAR_ADDED",
      "KOSHER"
    ],
    cautions: [],
    totalNutrients: {
      ENERC_KCAL: { label: "Energy", quantity: 101.814, unit: "kcal" },
      FAT: { label: "Fat", quantity: 11.517619999999999, unit: "g" },
      FASAT: { label: "Saturated", quantity: 7.294256, unit: "g" },
      FATRN: { label: "Trans", quantity: 0.46547599999999995, unit: "g" },
      FAMS: { label: "Monounsaturated", quantity: 2.984982, unit: "g" },
      FAPU: { label: "Polyunsaturated", quantity: 0.432106, unit: "g" },
      CHOCDF: { label: "Carbs", quantity: 0.008519999999999998, unit: "g" },
      SUGAR: { label: "Sugars", quantity: 0.008519999999999998, unit: "g" },
      PROCNT: { label: "Protein", quantity: 0.12069999999999999, unit: "g" },
      CHOLE: { label: "Cholesterol", quantity: 30.529999999999998, unit: "mg" },
      NA: { label: "Sodium", quantity: 1.5619999999999998, unit: "mg" },
      CA: { label: "Calcium", quantity: 3.4079999999999995, unit: "mg" },
      MG: { label: "Magnesium", quantity: 0.284, unit: "mg" },
      K: { label: "Potassium", quantity: 3.4079999999999995, unit: "mg" },
      FE: { label: "Iron", quantity: 0.0028399999999999996, unit: "mg" },
      ZN: { label: "Zinc", quantity: 0.012779999999999998, unit: "mg" },
      P: { label: "Phosphorus", quantity: 3.4079999999999995, unit: "mg" },
      VITA_RAE: { label: "Vitamin A", quantity: 97.12799999999999, unit: "µg" },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.0007099999999999999,
        unit: "mg"
      },
      RIBF: { label: "Riboflavin (B2)", quantity: 0.004828, unit: "mg" },
      NIA: { label: "Niacin (B3)", quantity: 0.005964, unit: "mg" },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.00042599999999999995,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.42599999999999993,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 0.42599999999999993,
        unit: "µg"
      },
      VITB12: {
        label: "Vitamin B12",
        quantity: 0.024139999999999998,
        unit: "µg"
      },
      VITD: { label: "Vitamin D", quantity: 8.52, unit: "IU" },
      TOCPHA: { label: "Vitamin E", quantity: 0.32943999999999996, unit: "mg" },
      VITK1: { label: "Vitamin K", quantity: 0.9939999999999999, unit: "µg" },
      WATER: { label: "Water", quantity: 2.5474799999999997, unit: "g" }
    },
    totalDaily: {
      ENERC_KCAL: { label: "Energy", quantity: 5.0907, unit: "%" },
      FAT: { label: "Fat", quantity: 17.719415384615385, unit: "%" },
      FASAT: { label: "Saturated", quantity: 36.47128, unit: "%" },
      CHOCDF: { label: "Carbs", quantity: 0.002839999999999999, unit: "%" },
      PROCNT: { label: "Protein", quantity: 0.24139999999999998, unit: "%" },
      CHOLE: { label: "Cholesterol", quantity: 10.176666666666666, unit: "%" },
      NA: { label: "Sodium", quantity: 0.06508333333333333, unit: "%" },
      CA: { label: "Calcium", quantity: 0.34079999999999994, unit: "%" },
      MG: { label: "Magnesium", quantity: 0.06761904761904762, unit: "%" },
      K: { label: "Potassium", quantity: 0.07251063829787233, unit: "%" },
      FE: { label: "Iron", quantity: 0.015777777777777776, unit: "%" },
      ZN: { label: "Zinc", quantity: 0.11618181818181816, unit: "%" },
      P: { label: "Phosphorus", quantity: 0.48685714285714277, unit: "%" },
      VITA_RAE: { label: "Vitamin A", quantity: 10.792, unit: "%" },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.059166666666666666,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.37138461538461537,
        unit: "%"
      },
      NIA: { label: "Niacin (B3)", quantity: 0.037274999999999996, unit: "%" },
      VITB6A: { label: "Vitamin B6", quantity: 0.03276923076923076, unit: "%" },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.10649999999999998,
        unit: "%"
      },
      VITB12: { label: "Vitamin B12", quantity: 1.0058333333333334, unit: "%" },
      VITD: { label: "Vitamin D", quantity: 56.8, unit: "%" },
      TOCPHA: { label: "Vitamin E", quantity: 2.1962666666666664, unit: "%" },
      VITK1: { label: "Vitamin K", quantity: 0.8283333333333333, unit: "%" }
    },
    ingredients: [
      {
        parsed: [
          {
            quantity: 1,
            measure: "tablespoon",
            food: "butter",
            foodId: "food_awz3iefajbk1fwahq9logahmgltj",
            weight: 14.2,
            retainedWeight: 14.2,
            measureURI:
              "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
            status: "OK"
          }
        ]
      }
    ]
  }
};
