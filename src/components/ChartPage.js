import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function CityChart() {
  const { cityID } = useParams();
  const [forecast, setForecast] = useState([]);
  const [cityTitle, setCityTitle] = useState({});
  const [errorState, setErrorState] = useState(false);

  async function chartData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Fetching Error");
      }
      const data = await response.json();

      setForecast(data.list);
      setCityTitle(data.city);
    } catch (error) {
      setErrorState(true);
    }
  }
  useEffect(() => {
    chartData();
  }, []);

  return (
    <div className="chart">
      <div>
        <Link to="/">
          <button className="close-btn">
            <CancelIcon />
          </button>
        </Link>
      </div>
      <div className="chart-name">
        <h2>
          {cityTitle.name} ({cityTitle.country})
        </h2>
        {errorState === true && <h4>Oops smt wrong</h4>}
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer style={{ height: 300 }}>
          <AreaChart
            data={forecast}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="main.temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CityChart;
