import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter basename='/'>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);