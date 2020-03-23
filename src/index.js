import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createStore ,compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import reducer from './reducers';
import middleware from './middleware';
import ActuallyMainApp from './components/ActuallyMainApp';

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig,reducer)
const store = createStore(persistedReducer,
    compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <ActuallyMainApp />
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
