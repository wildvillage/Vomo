import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../common/theme.tsx";
import PageRouterProvider from "./router/index.tsx";

const App: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box className="h-screen">
      <AppBar className="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vomo Extension
          </Typography>
          <Button color="inherit" onClick={toggleTheme}>
            {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
      {/* 占位元素 */}
      <div className="h-16" />
      <PageRouterProvider />
    </Box>
  );
};

export default App;
