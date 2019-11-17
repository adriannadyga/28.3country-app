//(2)stworzenie reducera
//import potrzebnej akcji
import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/countries';
//import danych z pliku json
import countriesData from '../data/countries.json';

//stworzenie inicjalnego stanu aplikacji
const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

//stworzenie i import reducera
//state = initialState - zabezpieczenie w razie wartości undefined przypisanie do state initialState
const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id != action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});
    }

    return state;
};

export default countriesReducer;