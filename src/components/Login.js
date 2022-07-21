//import { useRef, useState, useEffect, useContext } from 'react';
//import AuthContext from "../context/AuthProvider";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import  {StudTool}  from './StudTool';

//import axios from './api/axios';
//import axios from "axios";

function Login() {
    return (
        <div className="App">
<h1>Logovanje</h1>
                    <form >
                        <label htmlFor="username">Korisničko ime:</label>
                        <input
                            type="text"
                            id="username"
                          
                            autoComplete="off"
                            
                            required
                        />
                    <br/>
                    <br/>
                        <label htmlFor="password">Šifra:</label>
                        <input
                            type="password"
                            id="password"
                            
                            required
                        />
                        <br/>
                        <br/>

  <button >Uloguj se</button>
                    </form>

        <Router>
          <Switch>
          <Route exact path="StudTool" element={<StudTool />} />
           
          </Switch>
          <div className="list">
            <ul>
            <li><Link to="StudTool">Uloguj se</Link></li>  
             
            </ul>
          </div>
        </Router>
      </div>                  
    
      
    );
  }
  export default Login;