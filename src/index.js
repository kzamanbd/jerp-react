import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/layout.scss';

import App from './App';
import store from './app/store';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
