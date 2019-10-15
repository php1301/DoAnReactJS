import React from 'react';
import ReactDOM from 'react-dom';
import "../src/index.scss";
import App from "../src/components/App/App";
import { createStore } from "redux"
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers/rootReducers";
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./styles/_reset.scss');
const store = createStore((rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
