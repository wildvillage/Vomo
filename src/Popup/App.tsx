import { useState, useMemo } from "react";
import cls from "classnames";
import { Box, Divider, MenuList, MenuItem, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { ModuleType } from "../common/type";
import ResponseRule from "./module/ResponseRule";
import HeaderRule from "./module/HeaderRule";
import HeaderBar from "../components/HeaderBar";
import { useAppStatus } from "../common/status";

const isDev = process.env.NODE_ENV === "development";

function App() {
  const [module, setModule] = useState<ModuleType>(ModuleType.ModifyRes);
  const { appRunning, appToggle } = useAppStatus();

  const handleClick = () => {
    chrome.tabs.create({
      url: chrome.runtime.getURL(
        isDev ? "management-dev.html" : "management.html"
      ),
    });
  };

  const currentModule = useMemo(() => {
    const moduleMap = {
      [ModuleType.ModifyRes]: <ResponseRule />,
      [ModuleType.Headers]: <HeaderRule />,
    };
    return moduleMap[module];
  }, [module]);

  return (
    <div className="h-96 w-[550px]">
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <HeaderBar
          onOptionClick={handleClick}
          rightRender={
            <IconButton onClick={appToggle}>
              {appRunning ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          }
        />
        <Box
          sx={{ display: "flex", flex: 1, height: "100%" }}
          className={cls({
            "opacity-30": !appRunning,
            "pointer-events-none": !appRunning,
          })}
        >
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
            {currentModule}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
