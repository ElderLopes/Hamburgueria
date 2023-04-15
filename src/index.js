import React from 'react';
import ReactDOM from "react-dom";
import GlobalStyle from './globalStyle'
import Routes from './routes';

const root = document.getElementById('root');

    ReactDOM.createRoot(root).render(
        <>
            <Routes/>
           
            <GlobalStyle/>
           
        </>,
    );