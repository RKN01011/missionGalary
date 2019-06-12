import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./router"
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";

const storeContent = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={storeContent}><Router/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
