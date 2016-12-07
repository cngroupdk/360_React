import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = new Immutable.Map();

const rootStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunk
    )
);

export default rootStore;
