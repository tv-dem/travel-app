import {FETCH_COUNTRIES_PENDING,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_ERROR} from './actionsType';
import {stateType} from './types'

const initialState: stateType = {
    pending: false,
    countries: [],
    error: null
}

export function countriesReducer(state = initialState, action:any): stateType{
   
    switch(action.type) {
        case FETCH_COUNTRIES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                pending: false,
                countries: action.countries
            }
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getCountries = (state:any) => state.countries;
export const getCountriesPending = (state:any) => state.pending;
export const getCountriesError = (state:any) => state.error;