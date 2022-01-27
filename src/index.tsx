import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {store} from './redux/state';
import Lesson4 from "./lessons/lesson4/Lesson4";

ReactDOM.render(
    <Provider store={store}>
        <Lesson4 />
    </Provider>,
    document.getElementById('root')
);
