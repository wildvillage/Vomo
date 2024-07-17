import { Container, Typography, Button } from "@mui/material";

const OptionsApp: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Vomo Extension Options
      </Typography>
      <Button variant="contained" color="primary">
        Save Settings
      </Button>
    </Container>
  );
};

export default OptionsApp;
