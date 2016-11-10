import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import HomePage from './pages/Home';
import People from './pages/People'
import Self from './pages/Self'


export default function createRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/people" component={People}/>
            <Route path="/self" component={Self}/>
        </Route>
    );
}
