import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// Main pages navigation
import PagesNavigation from "./pages/Navigation";

export default function App() {
  return (
    <>
      <Toolbar />
      <Container>
        <PagesNavigation />
      </Container>
    </>
  );
}
