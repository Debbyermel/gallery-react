import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const checklist = ["sunglass", "bikini", "sandals", "sunscreen"];
console.log(checklist[1]);

//array destructuring
const [mostImportanteItem] = ["sunglass", "bikini", "sandals", "sunscreen"];
const [, , sandals] = ["sunglass", "bikini", "sandals", "sunscreen"];
console.log(mostImportanteItem);
console.log(sandals);



ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById('root')
);