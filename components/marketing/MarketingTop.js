import HomelessGirlSVG from "../../components/svg/HomelessGirlSVG";
import { CenteredContainer, VerticalRow } from "../Layout/LayoutPrimitives";

const MarketingTop = () => {
  return (
    <div className="flex">
      <div className="w-1/2 ml-48 -mr-16 mt-16">
        <CenteredContainer>
          <VerticalRow>
            <h1 className="text-4xl muli w-2/3">
              You're one click away from a healthier you.
            </h1>
            <p>
              Join Nutrivurv to track calories, earn badges, and crush your
              goals.
            </p>
            <button className="w-1/3 m-6 text-xs text-white px-6 py-1 bg-pink-400 border-pink-400 rounded relative">
              Join Now
            </button>
          </VerticalRow>
        </CenteredContainer>
      </div>
      <div className="w-1/2">
        <HomelessGirlSVG />
      </div>
    </div>
  );
};

export default MarketingTop;
