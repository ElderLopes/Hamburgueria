import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle'

const root = document.getElementById('root');

    ReactDOM.createRoot(root).render(
        <>
            <App/>
            <GlobalStyle/>
           
        </>,
    );