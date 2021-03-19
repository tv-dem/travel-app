import { connect } from 'react-redux';
import UserPage from './UserPage';

const mapStateToProps = (state:any) => ({
    language:state.language.selectedLanguage.lan,
  });

const UserPageContainer = connect(mapStateToProps)(UserPage);

export default UserPageContainer;