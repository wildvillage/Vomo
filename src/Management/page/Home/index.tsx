import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home: FC = () => {
  const handleClick = () => {};
  return (
    <div>
      <Link to="/response">jump</Link>
    </div>
  );
};

export default Home;
