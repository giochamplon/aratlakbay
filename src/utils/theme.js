import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#22577E",
        },
        secondary: {
            main: "#7FB5FF",
        },
        dashboard: {
            bg1: "#30AADD",
            bg2: "#68A7AD",
            bg3: "#30E3CA",
        },
        text: {
            t1: "#FAFFAF",
            t2: "#FAFFAF",      
        },
        form: {
            s1: "#BDE6F1",
            s2: "#E8F9FD",

        }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

export default theme;