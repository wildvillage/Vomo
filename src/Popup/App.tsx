import { useState } from "react";
import {
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
  Divider,
  MenuList,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ModuleType } from "../common/type";
import { useTheme } from "../common/theme";

import type { BottomNavigationOwnProps } from "@mui/material/BottomNavigation";

function App() {
  const [module, setModule] = useState<ModuleType>(ModuleType.ModifyRes);
  const { isDarkTheme, toggleTheme } = useTheme();
  // const handleClick = () => {
  //   chrome.tabs.create({
  //     url: chrome.runtime.getURL("src/Management/index.html"),
  //   });
  // };

  const handleChange: BottomNavigationOwnProps["onChange"] = (_, value) => {
    setModule(value);
  };

  return (
    <div className="h-96 w-[500px]">
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Vomo
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex", flex: 1, height: "100%" }}>
          <MenuList>
            <MenuItem>Modify response</MenuItem>
            <MenuItem>Modify headers</MenuItem>
          </MenuList>
          <Divider orientation="vertical" className="h-full" />
          <Box sx={{ flex: 1 }}></Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
