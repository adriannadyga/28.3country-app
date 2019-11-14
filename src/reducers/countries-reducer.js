//(2)stworzenie reducera
//import potrzebnej akcji
import { GET_COUNTRIES } from '../actions/countries';
//import danych z pliku json
import countriesData from '../data/countries.json';

//stworzenie inicjalnego stanu aplikacji
const initialState = {
    countries: countriesData
};

//stworzenie i import reducera
//state = initialState - zabezpieczenie w razie wartości undefined przypisanie do state initialState
const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        //po wywołaniu metody reducer tworzy kopię obiektu state i do pola countries przypisuje obecną wartość pola
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
    }

    return state;
};

export default countriesReducer;