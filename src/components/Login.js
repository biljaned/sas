import React from 'react'
import { Link } from "react-router-dom";
import { login } from '../services/auth';

const Login = () => {
console.log("Login stranica")
    return (
        <>
            <h1>Logovanje</h1>
            <form >
                <label htmlFor="username">Korisničko ime:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    required
                />
                <br />
                <br />
                <label htmlFor="password">Šifra:</label>
                <input
                    type="password"
                    id="password"
                    required
                />
                <br />
                <br />

                <button onClick={login}>Uloguj se</button>
            </form>  <div className="list">
                <ul>
                    <li><Link to="/StudTool">Uloguj se</Link></li>
                    <li><Link to="Proba">Otvori probu</Link></li>
                </ul>
            </div></>
    );
}

export default Login;