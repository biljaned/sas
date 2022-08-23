import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
//import { login } from '../services/auth';

const Login = () => {
    const history = useHistory();
    const { auth, setLoggedIn } = useContext(AuthContext)

    const [ime, setIme] = useState('sistemi');
    const [prezime, setPrezime] = useState('aplikacije');
    const [greska, setGreska] = useState('');

    const handleChange = event => {
        setIme(event.target.value);
        // console.log('ime je:', event.target.value);

    };

    const handleChange1 = event => {
        setPrezime(event.target.value);
        // console.log('prezime je:', event.target.value);
    };

    useEffect(() => {
        if (auth.isLoggedIn) { history.push('/StudTool') }
    }, [auth, history]);

    const handleLogin = () => {
        // Poziv ka serveru koji proverava da li su kredencijali okej
        if (ime === 'sistemi' && prezime === 'aplikacije') {
            setLoggedIn(true)
            setGreska('')
        }
        else { setGreska('-------POGRESNI PARAMETRI----------') }

    }

    console.log("Login stranica")
    return (
        <>
            <h1>Logovanje</h1>
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
            {greska && greska}
            <br />
            <br />

            <button onClick={handleLogin}>Uloguj se</button>

        </>
    );
}

export default Login;