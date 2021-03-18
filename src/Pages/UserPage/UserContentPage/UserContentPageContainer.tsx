import { connect } from 'react-redux';
import { fetchUpdateError } from '../../../Redux/UpdateAuth/actions';
import { fetchUpdateSuccess } from '../../../Redux/Auth/actions';
import UserContentPage from './index';
import StateT from '../../../Redux/UpdateAuth/interface';

const mapStateToProps = (state) => ({
  mail: state.auth.eMail,
  userName: state.auth.userName,
  lastName: state.auth.lastName,
  photoUrl: state.auth.photoUrl,
  err: state.update.err,
});

const mapDispatchToProps = (dispatch) => ({
  onFetch: (mail, username, lastname, photoUrl) => {
    if(!mail){
      dispatch(fetchUpdateError(mail));
      return;
    }
    fetch(`https://api-travel-app.herokuapp.com/auth/${mail}`, {
      method: 'PUT',
      body: JSON.stringify({
        email: mail,
        username,
        lastname,
        photoUrl
      } as StateT),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error('something was wrong')
      }
      return res.json();
    })
      .then(() => {
        dispatch(fetchUpdateSuccess(
          username,
          lastname,
          mail,
          photoUrl));
      })
      .catch((err) => dispatch(fetchUpdateError(err)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContentPage);
