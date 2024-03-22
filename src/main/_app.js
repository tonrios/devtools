import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

import devTheme from "../core/theme";
import AppRouter from "../routes";
import BgParticles from "./components/bgParticles";

function App() {
  return (
    <>
      <BgParticles />

      <ThemeProvider theme={devTheme}>
        <CssBaseline />

        <div className="text-white">
          <SnackbarProvider maxSnack={3}>
            <AppRouter />
          </SnackbarProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
