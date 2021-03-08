import CHANGE_LANGUAGE from './actionsType';

const changeLanguage = (lan:string) => ({
  type: CHANGE_LANGUAGE,
  lan,
})

export default changeLanguage;

