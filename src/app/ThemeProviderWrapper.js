"use client";
import React, {useState} from "react";
import {cyan, teal} from "@mui/material/colors";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
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
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Box>
                        <Switch onChange={changeThemeHandler}/>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;