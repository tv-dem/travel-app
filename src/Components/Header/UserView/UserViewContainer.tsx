import { connect } from 'react-redux';
import UserView from './UserView';
import { logout } from '../../../Redux/Auth/actions';

const mapStateToProps = ({language, auth}) => {
  console.log(auth)
  return {
    language: language.selectedLanguage.lan,
    name: auth.userName,
    lastname: auth.lastName,
    photoUrl: auth.photoUrl ? auth.photoUrl : 'https://avatarko.ru/img/kartinka/19/muzhchina_galstuk_18230.jpg',
  };
}
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
  })

const UserViewContainer = connect(mapStateToProps, mapDispatchToProps)(UserView);

export default UserViewContainer;
