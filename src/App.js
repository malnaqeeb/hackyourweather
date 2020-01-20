import React from "react";
import "./App.css";
import CitiesList from "./components/CitiesList";

function App() {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <div>
        <CitiesList />
      </div>
    </div>
  );
}

export default App;
