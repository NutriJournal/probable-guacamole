import { useQuery } from "@apollo/react-hooks";

import NutritionFacts from "./NutritionFacts";
import PhoneManBigSVG from "../svg/PhoneManBigSVG";
import FoodSearchList from "./FoodSearchList";
import { GET_NUTRITION } from "../../gql/queries";
import { Spacer } from "../Layout/LayoutPrimitives";

export default function FoodSearchResults() {
  const { data } = useQuery(GET_NUTRITION);

  const nutrition = data ? data.nutritionInfo : "";

  const svg = (
    <div className="flex flex-col mt-40">
      <PhoneManBigSVG />
    </div>
  );

  return (
    <section className="flex flex-1">
      <FoodSearchList />
      <Spacer />
      <div className="flex-1"></div>
      {data ? <NutritionFacts nutrition={JSON.parse(nutrition)} /> : svg}
      <div className="flex-1"></div>
    </section>
  );
}
