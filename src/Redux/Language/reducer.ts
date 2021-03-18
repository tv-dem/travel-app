import CHANGE_LANGUAGE from './actionsType';
import { stateType } from './types';

const initialState: stateType = {
  selectedLanguage: {
    lan: 'ru',
    val: 'Русский',
  },
  languages: [
    {
      lan: 'ru',
      val: 'Русский',
    },
    {
      lan: 'en',
      val: 'English',
    },
    {
      lan: 'ukr',
      val: 'Український',
    },
  ],
};

const languageReducer = (state = initialState, action: any):stateType => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      console.log(state);
      return {
        ...state, selectedLanguage: state.languages.find(({ lan }) => lan === action.lan)!,
      };
    }
    default:
      return state;
  }
};

export default languageReducer;
