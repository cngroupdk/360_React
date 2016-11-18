import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.css';

import rootStore from './configureStore';
import createRoutes from './createRoutes';

render((
    <Provider store={rootStore}>
        <Router history={browserHistory}>
            {createRoutes()}
        </Router>
    </Provider>
), document.getElementById('container'))

