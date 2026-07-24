import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
});

    const toggleTheme = () => {
        setTheme((prev) =>
            prev === "light" ? "dark" : "light"
        );
    };

    useEffect(() => {

        localStorage.setItem("theme", theme);

        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
}