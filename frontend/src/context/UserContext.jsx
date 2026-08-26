import {createContext, useState, useContext} from "react";
import authServices from '../Services/AuthServices.js';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const logout = async () => {
        try {
            await authServices.logout();
        } catch (e) {
            console.log("Failed to logout from backend: ", e);
        }finally {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setUser(null);
        }
    }

    const login = async (username, password) => {
        const res = await authServices.login(username, password);
        const data = res.data?.data;
        if (data) {

            const { accessToken, refreshToken, user } = data;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            setUser(data?.user || null);
        }
        return res;
    }

    const register = async (username, email, password) => {
        const res = await authServices.register(username, email, password);
        return res;
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
