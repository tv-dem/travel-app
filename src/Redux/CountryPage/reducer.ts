import ON_TIME_CHANGE from './actionTypes';

const initialState = {
  date: new Date(),
}

const CountryPageReducer = (state = initialState, action:any) => {
  switch(action.type){
    case ON_TIME_CHANGE: {
      return {...state, date: action.date}
    }
    default:
      return state
  }
}

export default CountryPageReducer;
