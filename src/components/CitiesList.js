import React, { useState } from "react";
// import data from "../city-weather.json";
import CityInfo from "./CityInfo";
import Form from "./Form";

const CitiesList = () => {
  const [weather, setWeather] = useState({});
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const appid = "eb076c099e2e95f7dc6a0f2dbe0761ae";
  async function getCity(city) {
    setErrorMessage("");
    setStatus("loading");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWeather(data);
        setStatus("success");
        setErrorMessage("");
      } else {
        setErrorMessage("Please insert valid city name");
        setStatus("");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }
  return (
    <div className="city-item">
      <Form getCity={getCity} />
      {status === "loading" && <h2 className="status">Loading....</h2>}
      {status === "error" && <h2>{errorMessage}</h2>}
      {errorMessage !== "" && <h1>{errorMessage}</h1>}
      {status === "success" && (
        <div className="items">
          <CityInfo cityProps={weather} />
        </div>
      )}
    </div>
  );
};

export default CitiesList;
