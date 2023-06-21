import { createTheme } from "@mui/material";

export const Light = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F9F9F9",
      paper: "#F1F1F1",
    },
    text: {
      primary: "#484848",
    },
  },
});