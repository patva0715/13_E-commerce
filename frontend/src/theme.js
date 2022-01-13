import { createTheme, responsiveFontSizes } from "@mui/material";

let lightTheme = createTheme({
    palette: {
        type: 'light',
        primary:{
            main:'rgba(0,0,0,.9)',
            contrastText:'white'
        },
        background: {
        },
    },
    typography: {
        body1: {
            fontSize: '0.8rem',
        },
        body2: {
            fontSize: '1.1rem',
        },
        h1: {
            fontSize: '3.2rem',
        },
        h2: {
            fontSize: '2rem',
        },
        h3: {
            fontSize: '1.5rem',
        },
        fontFamily: 'Roboto',
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiButton: {
            size: 'small',
        },
        MuiButtonGroup: {
            size: 'small',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiFab: {
            size: 'small',
        },
        MuiFormControl: {
            margin: 'dense',
            size: 'small',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiRadio: {
            size: 'small',
        },
        MuiSwitch: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
            size: 'small',
        },
    },
})
lightTheme=responsiveFontSizes(lightTheme)

export { lightTheme }