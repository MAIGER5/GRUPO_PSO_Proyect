import { createContext, useEffect, useMemo, useState } from "react";
import { CssBaseline }                  from "@mui/material";
import { ThemeProvider, createTheme }   from "@mui/material/styles";
import App from "../../App"


export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });

export default function ColorMode () {

    const [mode, setMode] = useState( localStorage.getItem("mode") || "light" );

    // La siguiente línea, se usa para guardar el "modo" en el "localStorage", para luego acceder a éste estado
    // en alguna parte del código. Si no se coloca, cuando quiero acceder al dato no lo hace hasta que se monta
    // el conponente en el suiguiente useEffect, por lo tanto carga el dato anterior y hay un desfasaje entre el
    // dato que quiero obtener y el dato anterior.
        localStorage.setItem("mode",mode);

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