//(3)stworzenie store'a
import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';

//przekazanie reducera jako argument funkcji createStore a następnie jego wyeksportowanie
const store = createStore(
    reducers,
    DevTools.instrument());

export default store;