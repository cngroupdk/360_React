import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const initialState = new Immutable.Map();

const rootStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware
    )
);

export default rootStore;
