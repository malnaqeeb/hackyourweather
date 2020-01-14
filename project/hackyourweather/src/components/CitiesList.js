import React from "react";
import data from "../city-weather.json";
import CityInfo from "./CityInfo.js";

const CitiesList = () => {
  return (
    <div className="container">
      <ul className="list">
        {data.map(city => {
          return <CityInfo key={city.id} cityProps={city} />;
        })}
      </ul>
    </div>
  );
};

export default CitiesList;
