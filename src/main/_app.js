import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

import devTheme from "../core/theme";
import AppRouter from "../routes";
import BgParticles from "./components/bgParticles";
import BuyMeACoffeeButton from "./components/buyMeACoffee";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <BgParticles />

      <ThemeProvider theme={devTheme}>
        <CssBaseline />

        <div className="text-white">
          <SnackbarProvider maxSnack={3}>
            <AppRouter />
            <BuyMeACoffeeButton />
          </SnackbarProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
