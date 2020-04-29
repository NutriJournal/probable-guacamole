import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import AgeGenderHeight from "../components/form/AgeGenderHeight";
import DietPreference from "../components/form/DietPreference";
import Macros from "../components/form/Macros";
import WeightGoalWeight from "../components/form/WeightGoalWeight";
import ActivityLevel from "../components/form/ActivityLevel";
import LogInSVG from "../components/svg/LogInSVG";
import withApollo from '../lib/apollo'
import Layout from "../components/Layout/index";
import {
  Spacer,
  CenteredContainer,
} from "../components/Layout/LayoutPrimitives";

const CreateProfile = () => {
  const [user, setUser] = useState({});
  const [profileStep, setProfileStep] = useState("ageGenderHeight");

  return (
    <Layout>
      <div className="flex w-full h-full pt-20">
        <Spacer />
        <div className="w-3/12">
          <div className="flex flex-col w-full">
            {
              profileStep === "ageGenderHeight" ? (
                <AgeGenderHeight
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "weightGoalWeight" ? (
                <WeightGoalWeight
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "activityLevel" ? (
                <ActivityLevel
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "dietPreferences" ? (
                <DietPreference
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "macros" ? (
                <Macros user={user} setUser={setUser} />
              ) : (
                "Error"
              ) //TODO: Proper error handling or default. Will using AgeGender or HeightWeight as default lead to bugs?
            }
          </div>
        </div>
        <div className="w-5/12">
          <CenteredContainer extraClasses={"mr-6"}>
            <LogInSVG />
          </CenteredContainer>
        </div>
        <Spacer />
      </div>
    </Layout>
  );
};

export default withApollo(CreateProfile);
