import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';


ReactDOM.render(
  <Router>
    <CssBaseline/>
    <App />
  </Router>
  ,
  
  document.getElementById('root')
);

