import { responsiveFontSizes } from "@mui/material";
import { createTheme } from '@mui/material/styles'

let lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'rgba(0,0,0,.9)',
            contrastText: 'white'
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
    components: {
        MuiTypography: {
            defaultProps: {
                gutterBottom: true
            }
        },
        MuiButton:{
            defaultProps:{
                disableRipple:true
            }
        }
    },

})
lightTheme = responsiveFontSizes(lightTheme)

export { lightTheme }