"use client";
import React, {useState} from "react";
import {cyan, teal} from "@mui/material/colors";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";


const ThemeProviderWrapper = ({children}) => {
    const [isDark, setDark] = useState(false);

    const theme = createTheme({
        palette: {
            primary: teal,
            secondary: cyan,
            mode: isDark ? "dark" : "light",
        },
    });


    const changeThemeHandler = () => {
        setDark(!isDark);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Box>
                            <Switch onChange={changeThemeHandler}/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="md">
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;