import { connect } from 'react-redux';
import Login from './Login.module';

const mapStateToProps = ({auth, language}) => ({
    language:language.selectedLanguage.lan,
    isLogIn: auth.isLogIn,
  });

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
