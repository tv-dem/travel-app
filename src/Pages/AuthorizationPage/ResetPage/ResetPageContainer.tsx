import { connect } from 'react-redux';
import ResetPage from './ResetPage';

const mapStateToProps = (state:any) => ({
    language:state.language.selectedLanguage.lan,
  });

const ResetPageContainer = connect(mapStateToProps)(ResetPage);

export default ResetPageContainer;