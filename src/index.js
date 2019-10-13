import React from 'react';
import ReactDOM from 'react-dom';
import "../src/index.scss";
import App from  "../src/components/App/App";
import * as serviceWorker from './serviceWorker';
import OwlCarousel from 'react-owl-carousel';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import "../node_modules/owl.carousel/dist/owl.carousel.min.js";
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./styles/_reset.scss');
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
