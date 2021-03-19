import { connect } from 'react-redux';
import SignInPage from './SignInPage';
import {
  clearMessages,
  fetchSignInError,
  fetchSignInSuccess,
  removeSignInError,
  removeSignInSuccess,
  setSignInError,
} from '../../../Redux/Auth/actions';

const mapDispatchToProps = (dispatch) => ({
  onFetch: ( username,lastname,password,email) => {
    fetch('https://api-travel-app.herokuapp.com/auth/registration', {
      method: 'POST',
      body: JSON.stringify({
        username,
        lastname,
        password,
        email
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
      .then(({message}) => {
        dispatch(fetchSignInSuccess(message));
      })
      .catch((err) => dispatch(fetchSignInError(err)));
  },
  removeSignInError: () => dispatch(removeSignInError()),
  setSignInError: (error) => dispatch(setSignInError(error)),
  removeSignInSuccess: () => dispatch(removeSignInSuccess()),
  clearState: () => dispatch(clearMessages()),
})

const mapStateToProps = ({auth}) => ({
  isError: auth.isErrorSignIn,
  isSuccess: auth.isSuccessSignIn,
})

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInPage);

export default SignInContainer;
