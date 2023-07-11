import { createContext, useEffect, useMemo, useState } from "react";
import { CssBaseline }                  from "@mui/material";
import { ThemeProvider, createTheme }   from "@mui/material/styles";
import App from "../../App"


export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });

export default function ColorMode () {

    const [mode, setMode] = useState( localStorage.getItem("mode") || "light" );

    useEffect(
        () => { localStorage.setItem("mode", mode); },
        [mode]);

    const colorMode = useMemo( () => ({
        toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        }, }), [] );

    const theme = useMemo(
        () => createTheme({ palette: { mode, }, }),
        [mode], );

    return (
			<div>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<App />
					</ThemeProvider>
				</ColorModeContext.Provider>
			</div>
		);

}