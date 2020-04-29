import { useState, useEffect } from "react";
import ProgressWeightLogItem from "./ProgressWeightLogItem.js";
import WeightInput from "./WeightInput.js";

const ProgressWeightLog = (props) => {
  var sorted = {};

  // this is what will get mapped to generate elements
  const [sortedLogs, setSortedLogs] = useState({});

  // this object is used to pair string values to months
  const monthObj = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  const logs = () => {
    let logArr = [];
    props.data.myWeightLogs.map((record) => {
      logArr.push({
        date: formatDate(record.date),
        weight: record.current_weight,
      });
    });
    return logArr;
  };

  const formatDate = (date) => {
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    const year = date.split("-")[0];
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    // expects an array of objects that have a date key
    // expects date key to be MM/DD/YYYY
    // matches the MM to a month string, sets the key of
    // sacrificial object
    // has a ternary operator to check for existence of current key
    // this is to prevent spreading not iterable error
    logs().map((cv) => {
      const monthChars = cv.date.charAt(0) + cv.date.charAt(1);
      const currentMonth = Object.keys(monthObj).filter((curval) => {
        return monthObj[curval] == monthChars;
      })[0];
      return (sorted = {
        ...sorted,
        [currentMonth]: sorted[currentMonth]
          ? [...sorted[currentMonth], cv]
          : [cv],
      });
    });

    setSortedLogs(sorted);
  }, [props.data]);

  return (
    <div className="p-3">
      <h2 className="text-base muli font-normal">Your logs:</h2>
      {Object.keys(sortedLogs).length > 0
        ? Object.keys(sortedLogs).map((cv) => {
            return (
              <ProgressWeightLogItem
                key={`${cv}`}
                data={sortedLogs[cv]}
                month={cv}
              />
            );
          })
        : ""}
      <WeightInput />
    </div>
  );
};

export default ProgressWeightLog;
