import { connect } from 'react-redux';
import changeLanguage from '../../../Redux/Language/actions';
import Language from './Language';

const mapStateToProps = ({ language }: any) => ({
  selectedLanguage: language.selectedLanguage,
  languages: language.languages,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSelectLanguage: ({ target }: any) => {
    dispatch(changeLanguage(target.value));
  },
});

const LanguageContainer = connect(mapStateToProps, mapDispatchToProps)(Language);

export default LanguageContainer;
