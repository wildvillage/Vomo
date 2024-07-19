import { useState, useMemo } from "react";
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
import MResponse from "./module/MResponse";
import MHeaders from "./module/MHeaders";

function App() {
  const [module, setModule] = useState<ModuleType>(ModuleType.ModifyRes);
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleClick = () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("management.html?page=home"),
    });
  };

  const currentModule = useMemo(() => {
    const moduleMap = {
      [ModuleType.ModifyRes]: {
        title: "44",
        component: <MResponse />,
      },
      [ModuleType.Headers]: {
        title: "2",
        component: <MHeaders />,
      },
    };
    return moduleMap[module];
  }, [module]);

  return (
    <div className="h-96 w-[550px]">
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
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
            <MenuItem onClick={() => setModule(ModuleType.ModifyRes)}>
              Modify response
            </MenuItem>
            <MenuItem onClick={() => setModule(ModuleType.Headers)}>
              Modify headers
            </MenuItem>
          </MenuList>
          <Divider orientation="vertical" className="h-full" />
          <Box sx={{ flex: 1 }} className="p-2">
            <Typography variant="h6" component="div" className="mb-2">
              {currentModule.title}
            </Typography>
            {currentModule.component}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
