import { connect } from 'react-redux';
import UserView from './UserView';

const mapStateToProps = (state:any) => ({
    language:state.language.selectedLanguage.lan,
  });

const UserViewContainer = connect(mapStateToProps)(UserView);

export default UserViewContainer;
