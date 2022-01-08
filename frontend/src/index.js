import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { lightTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline} from '@mui/material'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />

    <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


