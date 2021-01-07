import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <HashRouter basename='/'>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);