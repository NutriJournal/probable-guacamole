import { useQuery } from "@apollo/react-hooks";

import FoodLog from "./FoodLog";
import PreviousLog from "./PreviousLog";
import Favorites from "./Favorites.js";
import WomanBubblesSVG from "../svg/WomanBubblesSVG";
import { CenteredContainer } from "../Layout/LayoutPrimitives";
import { GET_LOG_TYPE_STATE } from "../../gql/queries";

export default function DesktopFoodJournal() {
  const { data, client } = useQuery(GET_LOG_TYPE_STATE);

  const logType = data ? data.logType : "daily";

  const handleClick = (e) => {
    const logType = e.target.dataset.logtype;
    client.writeData({ data: { ...data, logType: logType } });
  };

  return (
    <div className="flex-1 flex">
      <div className="flex flex-col w-7/12">
        <div className="flex text-lg font-medium py-2 mb-8">
          <div
            className={`${
              logType === "daily" ? "border-b-4 border-blue-400" : ""
            } cursor-pointer mr-12`}
            data-logtype="daily"
            onClick={handleClick}
          >
            Daily Food Log
          </div>
          <div
            className={`${
              logType === "favorites" ? "border-b-4 border-blue-400" : ""
            } cursor-pointer mr-12`}
            data-logtype="favorites"
            onClick={handleClick}
          >
            Favorites
          </div>
          <div
            className={`${
              logType === "previous" ? "border-b-4 border-blue-400" : ""
            } cursor-pointer mr-12`}
            data-logtype="previous"
            onClick={handleClick}
          >
            Previous
          </div>
        </div>
        {logType === "daily" ? (
          <FoodLog />
        ) : logType === "favorites" ? (
          <Favorites />
        ) : logType === "previous" ? (
          <PreviousLog />
        ) : (
          "Error"
        )}
      </div>
      <div className="flex-1"></div>
      <CenteredContainer extraClasses={`pt-20`}>
        <WomanBubblesSVG />
      </CenteredContainer>
    </div>
  );
}
