import { connect } from 'react-redux';
import { fetchUpdateError, fetchUpdatePasswordSuccess } from '../../../Redux/UpdateAuth/actions';
import UserPasswordPage from './index';

const mapStateToProps = (state) => ({
  mail: state.auth.eMail,
  err: state.update.err,
  message: state.update.message,
});

const mapDispatchToProps = (dispatch) => ({
  onFetch: (mail, password) => {
    fetch(`https://api-travel-app.herokuapp.com/auth/${mail}`, {
      method: 'PUT',
      body: JSON.stringify({
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error('something was wrong')
      }
      return res.json();
    })
      .then(() => dispatch(fetchUpdatePasswordSuccess('Update success')))
      .catch((err) => dispatch(fetchUpdateError(err)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordPage);