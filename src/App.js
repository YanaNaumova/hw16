import "./App.css";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import BootstrapDialog from "./components/BootstrapDialog";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            My Material Ui App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Добро пожаловать в наше приложение!
        </Typography>
        <BootstrapDialog />
      </Container>
    </Box>
  );
}

export default App;
