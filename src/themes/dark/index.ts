import { createTheme } from "@mui/material";

export const Dark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#19191980",
      paper: "#121212",
    },
    text: {
      primary: "#F5F5F5",
    },
  },
});