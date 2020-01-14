import React from "react";

const CityInfo = ({ cityProps }) => {
  return (
    <li className="city-item">
      <div>
        <h3>
          {cityProps.name}, {cityProps.sys.country}
        </h3>
      </div>
      <br />

      <div>{cityProps.weather[0].main}</div>
      <div>{cityProps.weather[0].description}</div>

      <br />
      <div>max temp : {cityProps.main.temp_max}</div>
      <div>min temp : {cityProps.main.temp_min}</div>
      <br />
      <div>
        location : {cityProps.coord.lat}, {cityProps.coord.lon}
      </div>
    </li>
  );
};

export default CityInfo;
