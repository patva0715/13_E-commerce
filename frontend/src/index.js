import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { lightTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline} from '@mui/material'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>

    <ThemeProvider theme={lightTheme}>
    <CssBaseline />

    <App />
    </ThemeProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


