import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isLoggedIn: false,
        token: ''
    });

    const setLoggedIn = (value) => setAuth(old => ({ ...old, isLoggedIn: value }))

    return (
        <AuthContext.Provider value={{ auth, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
