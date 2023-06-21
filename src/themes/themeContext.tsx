import { ReactNode, createContext, useState } from "react";
import { ThemeOptions } from "@mui/material";
import { Dark } from "@/themes/dark";
import { Light } from "@/themes/light";

interface CustomThemeProps {
  theme: ThemeOptions;
  handleToggleTheme: (value: boolean) => void;
}

export const ThemeContext = createContext<CustomThemeProps>({} as any);

interface IProviderTheme {
  children: ReactNode;
}

export function ThemeCustome({ children }: IProviderTheme) {
  const [theme, setTheme] = useState<ThemeOptions>(Light);

  function handleToggleTheme(value: boolean) {
    setTheme(value ? Dark : Light);
  }
  return (
    <ThemeContext.Provider value={{ handleToggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
