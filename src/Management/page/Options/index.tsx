import { FC } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MenuItem, MenuList, Box, Divider, ListItemIcon } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import ResponseRule from "../ResponseRule";
import HeaderRule from "../HeaderRule";

const Options: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flex: 1, height: "100%" }}>
      <MenuList>
        <MenuItem
          className="h-12"
          onClick={() => navigate("/options/response")}
        >
          <ListItemIcon>
            <BorderColorIcon fontSize="small" />
          </ListItemIcon>
          Modify response
        </MenuItem>
        <MenuItem className="h-12" onClick={() => navigate("/options/headers")}>
          <ListItemIcon>
            <MultipleStopIcon fontSize="small" />
          </ListItemIcon>
          Modify headers
        </MenuItem>
      </MenuList>
      <Divider orientation="vertical" className="h-full" />
      <Box className="p-4 w-full">
        <Routes>
          <Route path="/response" element={<ResponseRule />} />
          <Route path="/headers" element={<HeaderRule />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Options;
