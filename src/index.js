import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import reducer from './reducers';
import middleware from './middleware';
import ActuallyMainApp from './components/ActuallyMainApp';

const store = createStore(reducer,middleware);

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <ActuallyMainApp />
        </Router>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
