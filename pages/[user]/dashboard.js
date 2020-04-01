import { useQuery, useMutation } from "@apollo/react-hooks";
import { useState } from "react";

import withApollo from "../../lib/apollo";
import { ME } from "../../gql/queries";
import Layout from "../../components/Layout/index";
import FoodSearchBox from "../../components/ingredients/FoodSearchBox";
import DashUser from "../../components/DashUser";
import DailyVibe from "../../components/DailyVibe";
import DesktopFoodJournal from "../../components/foodJournal/DesktopFoodJounal";
import FoodSearchResults from "../../components/FoodSearchResults";
import Progress from "../../components/Progress/Progress.js";
import App from "next/app";
import { initClient } from "../../lib/useClient";
// import { UPDATE_WEIGHT, CREATE_DAILY_RECORD_WITH_WEIGHT } from "../../gql/mutations.js"


const Dashboard = ({ apollo }) => {

  const [activeControl, setActiveControl] = useState("journal"); //Sets which component is rendered on the lower half of dash
  const [searchResults, setSearchResults] = useState(); //Sets search results returned from FoodSearchBox
  const [weight, setWeight] = useState(0);
  const { loading, error, data } = useQuery(ME); //Gets logged in user
  // const [updateWeight] = useMutation(UPDATE_WEIGHT);
  // const [createWeightRecord] = useMutation(CREATE_DAILY_RECORD_WITH_WEIGHT)
  
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}
  const currentDate = new Date(Date.now()); //Sets date for lower dash nav, format does not match UX design
  const todaysDate = currentDate.toLocaleDateString().toString()
  const hasDailyRecord = data.me.dailyRecords;
  console.log(hasDailyRecord);

  // Server date is configured YYYY-MM-DD

  const handleChange = (e) => {
    setWeight(e.target.value);
  }

  const currentRecord = () => {
    let newArr = []
    console.log("In currentRecord", hasDailyRecord);
    hasDailyRecord.map((record) => {
      console.log("record.date", record.date, todaysDate)
      if(record.date === todaysDate) {
        newArr.push(record);
        console.log(newArr)
      }
    })
    console.log(newArr[0])
    return newArr[0]
  }

  // const myRecord = currentRecord()
  // console.log(parseInt(weight));
  // const hasRecord = {
  //   id: myRecord.id,
  //   current_weight: parseInt(weight)
  // }

  // const hasNoRecord = {
  //     date: JSON.stringify(todaysDate),
  //     current_weight: weight,
  //     calories: 0,
  //     fat: 0,
  //     carbs: 0,
  //     fiber: 0,
  //     protein: 0,
  //     food_string: "",
  //     meal_type: ""
  //   }
 

  return (
    <div>
      <Layout>
        <div className="flex">
          <DashUser />
          <div className="flex-1"></div>
          <div className="flex-1 px-32 self-center">
            <FoodSearchBox
              setSearchResults={setSearchResults}
              setActiveControl={setActiveControl}
            />
          </div>
        </div>
        <nav className="flex bg-mobileFoot">
          <div className="flex-1"></div>
          <ul className="flex-1 flex justify-around text-lg font-medium py-2">
            <li
              className={`${
                activeControl === "journal" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("journal")}
            >
              Food Journal
            </li>
            <li
              className={`${
                activeControl === "progress" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("progress")}
            >
              Progress
            </li>
            <li
              className={`${
                activeControl === "badges" ? "border-b-2 border-pink-500" : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("badges")}
            >
              Badges
            </li>
            <li
              className={`${
                activeControl === "challenges"
                  ? "border-b-2 border-pink-500"
                  : ""
              } cursor-pointer`}
              onClick={() => setActiveControl("challenges")}
            >
              Challenges
            </li>
          </ul>
          <span className="flex flex-1 text-sm justify-end items-center">
            <time className="pr-32">{currentDate.toLocaleString('en-US', dateOptions)}</time>
          </span>
        </nav>
        <div className="flex py-4">
          <DailyVibe />
          <div className="flex-1"></div>
          <div className="border border-black mr-32 ml-6">
            <input
              type="text"
              placeholder="Enter today's weight"
              name="dailyWeight"
              value={weight}
              onChange={handleChange}
              onClick={() => {currentRecord ? updateWeight({variables: hasRecord}) : createWeightRecord({variables: hasNoRecord})}}>
            </input></div>
        </div>
        <div className="ml-20 mr-32">
          {/* Replace strings with corresponding components */}
          {activeControl === "journal" ? (
            <DesktopFoodJournal />
          ) : activeControl === "progress" ? (
            <Progress />
          ) : activeControl === "badges" ? (
            "Badges"
          ) : activeControl === "challenges" ? (
            "Challenges"
          ) : activeControl === "searchResults" ? (
            <FoodSearchResults
              searchResults={searchResults}
              setActiveControl={setActiveControl}
            />
          ) : (
            "Error"
          )}
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(Dashboard);


Dashboard.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};