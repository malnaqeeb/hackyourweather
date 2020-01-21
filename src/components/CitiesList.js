import React, { useState } from "react";
// import data from "../city-weather.json";
import CityInfo from "./CityInfo";
import Form from "./Form";

const CitiesList = () => {
  const [weather, setWeather] = useState({});
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  async function getCity(city) {
    setErrorMessage("");
    setStatus("loading");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWeather(data);
        setStatus("success");
        setErrorMessage("");
      } 
      else {
        setErrorMessage("Please insert valid city name");
        setStatus("");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage('Error: Failed to fetch');
    }
  }
  return (
    <div className="city-item">
      <Form getCity={getCity} />
      {status === "loading" && <h2 className="status">Loading....</h2>}
      {(status === "error" || errorMessage !== "") && <h1>{errorMessage}</h1>}
      {status === "success" && (
        <div className="items">
          <CityInfo cityProps={weather} />
        </div>
      )}
    </div>
  );
};

export default CitiesList;
