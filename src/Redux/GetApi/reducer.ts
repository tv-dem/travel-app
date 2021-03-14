import { FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR, FILTER_COUNTRIES, SET_CURRENT_COUNTRY } from './actionsType';
import { stateType } from './types'

const initialState: stateType = {
    pending: false,
    countries: [],
    countriesFind: [],
    currentCountry: null,
    error: null
}

export function countriesReducer(state = initialState, action: any): stateType {
console.log(state)
    switch (action.type) {
        case FETCH_COUNTRIES_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                pending: false,
                countries: action.countries,
                countriesFind: action.countries
            };
        case SET_CURRENT_COUNTRY:
            return {
                ...state,
                currentCountry: action.currentCountry
            };
        case FILTER_COUNTRIES:
            return {
                ...state,
                countriesFind: state.countries.filter(country =>
                    String(action.input).trim().toLocaleLowerCase() === String(country.localizations[0].name).substr(0, action.input.length).trim().toLocaleLowerCase())
            };
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getCountries = (state: any) => state.countries;
export const getCountriesFilter = (state: any) => state.countriesFind;
export const getCurrentCountry = (state: any) => state.currentCountry;
export const getCountriesPending = (state: any) => state.pending;
export const getCountriesError = (state: any) => state.error;