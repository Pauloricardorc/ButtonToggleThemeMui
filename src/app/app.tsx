import { Dark } from "@/themes/dark";
import { ThemeContext } from "@/themes/themeContext";
import { ThemeProvider } from "@mui/material";
import { useContext } from "react";

export default function App({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
