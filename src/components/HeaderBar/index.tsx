import { FC, ReactNode } from "react";
import { Toolbar, AppBar, IconButton, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../common/theme";

type HeaderBarProps = {
  onOptionClick?: () => void;
  rightRender?: ReactNode;
};

const HeaderBar: FC<HeaderBarProps> = (props) => {
  const { onOptionClick, rightRender } = props;
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={onOptionClick}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vomo Extension
        </Typography>
        <div className="flex gap-x-1">
          {rightRender}
          <IconButton onClick={toggleTheme}>
            {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
