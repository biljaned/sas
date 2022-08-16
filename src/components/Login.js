import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { useState } from 'react';
import { login } from '../services/auth';



const Login = () => {
    const history = useHistory();
    // const isValid = formValidation();
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');

    const handleChange = event => {
        setIme(event.target.value);
        console.log('ime je:', event.target.value);

    };

    const handleChange1 = event => {
        setPrezime(event.target.value);
        console.log('prezime je:', event.target.value);
    };

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
                    onChange={handleChange}
                    value={ime}
                    required
                />
                <br />
                <br />
                <label htmlFor="password">Šifra:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handleChange1}
                    value={prezime}
                    required
                />
                <br />
                <br />

                
                <button type="submit" onClick={() => {
                    if (ime === 'pera' && prezime === 'peric') { history.push('/StudTool') }
                    else {console.log('----POGRESNI PARAMETRI----------')}
                }}>Uloguj se</button>
            </form>
           
        </>
    );
}

export default Login;