import { FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR, FILTER_COUNTRIES, SET_CURRENT_COUNTRY } from './actionsType';
import { stateType } from './types'

const initialState: stateType = {
    pending: false,
    countries: [],
    countriesFind: [],
    currentCountry: null,
    error: null
}

const fixStr = (str: string) => str.trim().toLocaleLowerCase()

export function countriesReducer(state = initialState, action: any): stateType {

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
                countriesFind: state.countries.filter(country => {
                    const { name, capital } = country.localizations[0]

                    if (fixStr(action.input) === fixStr(name).substr(0, action.input.length)
                        || fixStr(action.input) === fixStr(capital).substr(0, action.input.length)) return true
                    return false
                })
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