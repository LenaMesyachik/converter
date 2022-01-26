import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import Lesson3 from "./lessons/lesson3/Lesson3";

ReactDOM.render(
    <Provider store={store}>
        <Lesson3 />
    </Provider>,
    document.getElementById('root')
);
