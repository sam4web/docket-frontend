import useThemeDetector from "@/hooks/useThemeDetector";
import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const currentTheme = useThemeDetector() ? "dark" : "light";
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || currentTheme,
  );
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <button className="btn" onClick={toggleTheme}>
            <span className="dark:hidden block">
                <FiSun />
            </span>
      <span className="dark:block hidden">
                <BsFillMoonFill />
            </span>
    </button>
  );
};

export default ThemeToggle;
