import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage'
import SelfPage from './pages/SelfPage'
import LevelEntryPage from './pages/LevelEntryPage'


export default function createRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/people" component={PeoplePage}/>
            <Route path="/self" component={SelfPage}/>
            <Route path="/levelEntry" component={LevelEntryPage}/>
        </Route>
    );
}
