import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import PageRouterProvider from "./router/index.tsx";
import HeaderBar from "../components/HeaderBar/index.tsx";

const App: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box className="h-screen flex flex-col">
      <HeaderBar onOptionClick={handleClick} />
      {/* 占位元素 */}
      <PageRouterProvider />
    </Box>
  );
};

export default App;
