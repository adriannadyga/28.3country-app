//(2a)scalanie ze sobą zdefiniowanych reducerów
import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

//metoda combineReducers przyjmuje jako parametr obiekt z dostępnymi w aplikacji reducerami
const reducers = combineReducers({
    countriesReducer
});

export default reducers;