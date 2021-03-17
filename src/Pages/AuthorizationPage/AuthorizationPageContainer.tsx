import { connect } from 'react-redux';
import AutorizationPage from './AuthorizationPage';

const mapStateToProps = (state:any) => ({
    language:state.language.selectedLanguage.lan,
  });

const AuthorizationPageContainer = connect(mapStateToProps)(AutorizationPage);

export default AuthorizationPageContainer;