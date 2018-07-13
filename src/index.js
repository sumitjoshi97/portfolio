import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import 'fullpage.js/dist/jquery.fullpage.min.js';

import registerServiceWorker from './registerServiceWorker';
// import Home from './containers/Home/Home';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
