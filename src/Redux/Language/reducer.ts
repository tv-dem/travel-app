import CHANGE_LANGUAGE from './actionsType';
import { stateType } from './types';

const initialState: stateType = {
  selectedLanguage: {
    lan: 'rus',
    val: 'Русский',
  },
  languages: [
    {
      lan: 'rus',
      val: 'Русский',
    },
    {
      lan: 'eng',
      val: 'English',
    },
    {
      lan: 'deu',
      val: 'Deutsch',
    },
  ],
};

const languageReducer = (state = initialState, action: any):stateType => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state, selectedLanguage: state.languages.find(({ lan }) => lan === action.lan)!,
      };
    }
    default:
      return state;
  }
};

export default languageReducer;
