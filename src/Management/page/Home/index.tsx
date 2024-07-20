import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Grid,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Home: FC = () => {
  const handleClick = () => {};
  return (
    <Container className="pt-4 pb-4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="h-full flex flex-col">
            <CardHeader
              avatar={<BorderColorIcon style={{ fontSize: 16 }} />}
              title="Modify the response of the request"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Modify the response of the request through custom rules, and can
                simulate different http codes.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/response">
                <Button size="small">Add rule</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="h-full flex flex-col">
            <CardHeader
              avatar={<BorderColorIcon style={{ fontSize: 16 }} />}
              title="Modify the headers of the request"
            />
            <CardContent className="grow">
              <Typography variant="body2" color="text.secondary">
                Headers can be added to specific requests, or to all requests.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/response">
                <Button size="small">Add header</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
