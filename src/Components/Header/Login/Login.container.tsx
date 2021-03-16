import { connect } from 'react-redux';
import Login from './Login.module';

const mapStateToProps = (state:any) => ({
    language:state.language.selectedLanguage.lan,
  });

const LanguageContainer = connect(mapStateToProps)(Login);

export default LanguageContainer;
