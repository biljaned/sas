//import { useRef, useState, useEffect, useContext } from 'react';
//import AuthContext from "../context/AuthProvider";
import { StudTool } from "./StudTool";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" ><Login /></Route>
          <Route exact path="/studtool" ><StudTool /></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;