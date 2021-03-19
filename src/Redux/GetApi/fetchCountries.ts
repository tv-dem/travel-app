import {fetchCountriesPending, fetchCountriesSuccess, fetchCountriesError} from './actions';

const MAIN_URL="https://api-travel-app.herokuapp.com/countries"


const fetchCountries=()=> 
     (dispatch:any) => {
        dispatch(fetchCountriesPending());
        fetch(MAIN_URL)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCountriesSuccess(res.countries));
            console.log(res.countries)
            return res.countries;
        })
        .catch(error => {
            dispatch(fetchCountriesError(error));
        })
    }


export default fetchCountries;