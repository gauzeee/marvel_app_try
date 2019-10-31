import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import charsReducer from "./reducers/charsReducer";
import charReducer from "./reducers/charReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const reducers = combineReducers({charsReducer, charReducer});
const store = createStore(reducers, applyMiddleware(thunk, logger));


ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
