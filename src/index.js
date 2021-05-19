import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById('root')
);