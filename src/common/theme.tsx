import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

type ThemeProviderWrapperProps = {
  children: ReactNode;
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkTheme: true,
});
export const useTheme = () => useContext(ThemeContext);

const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [darkMode, setMode] = useState<boolean>(() => {
    return (
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false
    );
  });

  const toggleTheme = () => {
    setMode(!darkMode);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setMode(event.matches);
    };

    // 添加事件监听器以响应系统主题的变化
    mediaQuery.addEventListener("change", handleChange);

    // 清理事件监听器
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme: darkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
