import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Styles Import
import './style/index.css';
import './style/colors.css';

// Components Import
import App from './app';

ReactDOM.render(

    <BrowserRouter>    
       <App /> 
    </BrowserRouter>
    
    , document.getElementById('root'));