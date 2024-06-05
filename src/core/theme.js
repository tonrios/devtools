"use client";
import { createTheme } from "@mui/material/styles";

export const draculaColors = {
  background: "#000009",
  currentLine: "#44475a",
  selection: "#44475a",
  foreground: "#f8f8f2",
  comment: "#6272a4",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  purple: "#bd93f9",
  red: "#ff5555",
  yellow: "#f1fa8c",
};

const devTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: draculaColors.background,
      paper: draculaColors.background,
    },
    primary: {
      main: draculaColors.purple, // Cor principal
    },
    secondary: {
      main: draculaColors.pink,
      contrastText: "#fff",
    },
    divider: {
      main: draculaColors.purple,
    },
    text: {
      primary: draculaColors.foreground,
      secondary: draculaColors.cyan,
      disabled: draculaColors.cyan,
    },
    info: {
      main: draculaColors.cyan,
    },
    success: {
      main: draculaColors.green,
    },
    warning: {
      main: draculaColors.orange,
    },
    error: {
      main: draculaColors.red,
    },
  },
  typography: {
    fontFamily: "Menlo, Consolas, monospace", // Fonte monoespaçada
  },
  MuiLabel: {
    root: {
      color: draculaColors.purple,
      backgroundColor: draculaColors.purple,
      "&$focused": {
        backgroundColor: draculaColors.purple,
      },
    },
  },
});

export default devTheme;
