import { FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR, FILTER_COUNTRIES, SET_CURRENT_COUNTRY } from './actionsType';


export const fetchCountriesPending = () => ({
    type: FETCH_COUNTRIES_PENDING
});

export const fetchCountriesSuccess = (Countries:any) =>({
    type: FETCH_COUNTRIES_SUCCESS,
    countries: Countries,
})

export const fetchCountriesError = (Error: string | null) => ({
    type: FETCH_COUNTRIES_ERROR,
    error: Error,
});

export const filterCountries = (Input: string) => ({
    type: FILTER_COUNTRIES,
    input:Input,
});

export const setCurrentCountry = (currentCountry: any) => ({
    type: SET_CURRENT_COUNTRY,
    currentCountry,
});
