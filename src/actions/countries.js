//(1)akcje
//listowanie dostępnych państw
export const GET_COUNTRIES = 'GET_COUNTRIES';
//wyświetlanie info o danym państwie
export const GET_COUNTRY = 'GET_COUNTRY';
//usuwanie państwa
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
//wyszukiwanie państwa po nazwie
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
//wyszukiwanie państw konkretnego kontynentu
export const SET_CONTINENT = 'SET_CONTINENT';

//(1a)kreatory akcji
//listowanie wszystkich dostępnych państw
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}
//usuwanie państwa - parametr id do identyfikacji
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

//parametr searchText charakteryzuje substring czyli zwracanie stringu zawierającego wpisane znaki
export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}