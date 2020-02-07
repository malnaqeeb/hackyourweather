import React from "react";
import "./App.css";
import CitiesList from "./components/CitiesList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartPage from "./components/ChartPage";

function App() {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <div>
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CitiesList} />
          <Route exact path="/chartPage/:cityID" component={ChartPage} />
        </Switch>
      </div>
    </Router>
      </div>
    </div>
  );
}

export default App;
