import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{
    /*{code here}*/
    <Route>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </Route>
  }</div>;
}

export default App;
