import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCar, faCameraRetro, faSolarPanel, faBolt } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
library.add(fab, faBars, faCar, faCameraRetro, faSolarPanel, faBolt);

ReactDOM.render( <BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
