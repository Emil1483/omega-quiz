"use client";

import { createTheme } from "@mui/material/styles";
import { FC, ReactNode } from "react";
import { ThemeProvider as ReactThemeProvider } from '@emotion/react';


interface ThemeProviderProps {
    children: ReactNode;
}


export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const theme = createTheme({
        colorSchemes: {
            light: {
                palette: {
                    text: {
                        secondary: "#00000060",
                    },
                    primary: {
                        main: "#14213d",
                    },
                    secondary: {
                        main: "#004b23",
                    },
                },
            },
        },
        typography: {
            fontFamily: "Circular, custom-font, Helvetica Neue, Helvetica, Arial, sans-serif",
            h3: {
                fontWeight: 600,
                fontSize: "46px",
            },
            h4: {
                fontWeight: 400,
                fontSize: "30px",
            },
        },
        components: {
            MuiLink: {
                styleOverrides: {
                    root: {
                        textDecoration: "none",
                        color: "inherit",
                    },
                },
            },
            MuiCssBaseline: {
                styleOverrides: {
                    a: {
                        textDecoration: "none",
                        color: "inherit",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 600,
                        fontSize: "16px",
                        textTransform: "none"
                    },
                },
            },
        },
    });
    return <ReactThemeProvider theme={theme}>{children}</ReactThemeProvider>;
};
