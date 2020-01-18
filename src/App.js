import React from "react";
import "./App.css";
import CitiesList from "./components/CitiesList";

function App() {
  return (
    <div className="App">
      <h2 className="title">Weather</h2>
      <div>
        <CitiesList />
      </div>
    </div>
  );
}

export default App;
