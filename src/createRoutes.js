import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage'
import SelfPage from './pages/SelfPage'
import LevelEntryPage from './pages/LevelPage'
import ReasonEntryPage from './pages/ReasonPage'
import QuestionsEntryPage from './pages/QuestionsPage'

export default function createRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="/people" component={PeoplePage}/>
            <Route path="/self" component={SelfPage}/>
            <Route path="/level" component={LevelEntryPage}/>
            <Route path="/reason" component={ReasonEntryPage}/>
            <Route path="/questions" component={QuestionsEntryPage}/>
        </Route>
    );
}
