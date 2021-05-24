import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';
import {Route,Switch} from "react-router-dom";



ReactDOM.render(
<BrowserRouter><Switch><Route path='/' exact><App /></Route></Switch></BrowserRouter>,
document.getElementById('root')
);

  

