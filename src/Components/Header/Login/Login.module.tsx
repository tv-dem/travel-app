import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import langData from '../../../langData/langData.json'
import UserViewContainer from '../UserView/UserViewContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper_login: {
      margin:"10px 0",
      padding: '20px',
      alignItems: 'center',
    },
  }),
);

const Login: React.FC = ({isLogIn, language}:any) => {
  const styles = useStyles();
  return !isLogIn ? (
    <Paper className={styles.paper_login}>
      <div className={styles.root}>
        <Link to="/authorization">
          <Button variant="contained">{langData[language].mainPage_Login_sign_in}</Button>
        </Link>
        <Link to="/authorization/registration">
          <Button variant="contained">{langData[language].mainPage_Login_sign_up}</Button>
        </Link>
      </div>
    </Paper>
  ) : <UserViewContainer/>;
};

export default Login;
