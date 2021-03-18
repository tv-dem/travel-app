import { connect } from 'react-redux';
import {
  clearMessages,
  fetchLogInError,
  fetchLogInSuccess,
  removeLogInError,
} from '../../../Redux/Auth/actions';
import LogInPage from './LogInPage';

const mapDispatchToProps = (dispatch) => ({
  onFetch: (mail, password) => {
    fetch('https://api-travel-app.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: mail,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(!res.ok){
        throw new Error('something was wrong')
      }
      return res.json();
    })
      .then(({username, lastname, email, photoUrl, token}) => {
        dispatch(fetchLogInSuccess(username, lastname, email, photoUrl, token));
      })
      .catch((err) => dispatch(fetchLogInError(err)));
  },
  removeLogInError: () => dispatch(removeLogInError()),
  clearState: () => dispatch(clearMessages()),
})

const mapStateToProps = ({auth}) => ({
  isError: auth.isErrorLogIn,
  isLogIn: auth.isLogIn,
})

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogInPage);

export default  LogInContainer;
