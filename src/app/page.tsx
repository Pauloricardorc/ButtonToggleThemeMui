"use client";
import { ThemeContext } from "@/themes/themeContext";
import { FormControlLabel, Stack, Switch, styled } from "@mui/material";
import { useContext } from "react";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 180,
  height: 90,
  padding: 18,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      height: 78,
      width: 90,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(74px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(8px)",
    "&.Mui-checked": {
      color: "#fff",

      transform: "translateX(90px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "#6f47ff" : "#F5F5F590",
        transition: "border 0.2s linear, box-shadow 2s linear",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 0 24px 2px #6f47ff50"
            : "0 0 24px 2px #27272739",
        border:
          theme.palette.mode === "dark"
            ? "1px solid #FFFFFF80"
            : "1px solid " + theme.palette.divider,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#1a3d74" : "#2a4577",
    width: 80,
    height: 80,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#F5F5F590",
    transition: "border 0.2s linear, box-shadow 2s linear",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 18px 4px #ffffff39"
        : "0 0 18px 4px #27272739",
    border:
      theme.palette.mode === "dark"
        ? "2px solid #6000dd20"
        : "2px solid " + theme.palette.divider,
    borderRadius: 80 / 2,
    boxSizing: "border-box",
  },
}));

export default function Home() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        transition: "background 0.4s ease-in-out",
      }}
      style={{ margin: 0, padding: 0 }}
    >
      <FormControlLabel
        sx={{ color: "text.primary" }}
        control={
          <MaterialUISwitch
            onChange={(value) => handleToggleTheme(value.target.checked)}
            sx={{ m: 1 }}
            defaultChecked={theme.palette?.mode === "light" ? false : true}
          />
        }
        label="Theme Mode"
      />
    </Stack>
  );
}
