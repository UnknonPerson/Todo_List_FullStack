import {createContext, useState, useContext} from "react";
import authServices from '../Services/AuthServices.js';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const logout = () => {
        setUser(null);
    }

    const login = async (userData) => {
        try{
            const res = await authServices.login(userData);
            console.log("Login Response: ",res);
            return res;
        }catch(e){
            console.log("Filed To Login: ",e)
        }
    }

    const register = async (userData) => {
        try{
           const res = await authServices.register(userData);
           console.log("Registration Response: ",res);
           return res;
        }catch(e){
            console.log("Somthing Happened while regestering : ",e);
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, login, logout, register}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}