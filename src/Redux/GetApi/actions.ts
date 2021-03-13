import { FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from './actionsType';

export const fetchCountriesPending = () => ({
    type: FETCH_COUNTRIES_PENDING
});

export const fetchCountriesSuccess = (Countries: any) =>({
    type: FETCH_COUNTRIES_SUCCESS,
    countries: Countries,
})

export const fetchCountriesError = (Error: string) => ({
    type: FETCH_COUNTRIES_ERROR,
    error: Error,
});
