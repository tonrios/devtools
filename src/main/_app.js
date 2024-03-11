import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import devTheme from "../core/theme";
import Footer from "./layout/_footer";
import Nav from "./layout/_nav";
import GuidGenerator from "./pages/guidGenerator";

function App() {
  return (
    <ThemeProvider theme={devTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <div className="flex min-h-screen  flex-col justify-between">
          <Nav />
          <GuidGenerator />
          <Footer />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
