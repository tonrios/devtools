"use client";
import { createTheme } from "@mui/material/styles";

const devTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#01E8F7",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#1a2035",
      paper: "#1a2035",
    },
  },
});

export default devTheme;
