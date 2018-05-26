import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { playersReducer } from './players';

const reducers = combineReducers({
  players: playersReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
