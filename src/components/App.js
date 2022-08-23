//import { useRef, useState, useEffect, useContext } from 'react';
import {AuthProvider} from "../context/AuthProvider";
import { StudTool } from "./StudTool";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  return (

    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" ><Login /></Route>
            <Route exact path="/studtool" ><StudTool /></Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}
export default App;