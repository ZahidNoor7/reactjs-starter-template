// src/components/ThemeSwitcher.js

import { useState, useEffect } from "react";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleTheme } from "../../redux/Reducers/appPreferencesSlice";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.appPreferences?.theme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
    dispatch(toggleTheme(newMode ? "dark" : "light"));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme ? storedTheme === "dark" : prefersDarkMode;
    setIsDarkMode(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.getElementById("root")?.classList.toggle("dark", e.matches);
      dispatch(toggleTheme(e.matches ? "dark" : "light"));
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [dispatch]);

  return (
    <div className="ThemeSwitcher absolute right-4 top-4">
      <button
        onClick={toggleDarkMode}
        className={`ThemeSwitcher w-10 h-10 flex items-center justify-center rounded-md focus:outline-none ${
          isDarkMode && theme === "dark"
            ? "bg-black text-white"
            : "bg-black text-white"
        }`}
      >
        {isDarkMode ? <IoMoonSharp /> : <IoSunnySharp />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
