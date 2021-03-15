import React from 'react';
import {Link} from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }   
    },
    paper_login:{
      margin: '10px 0 0',
      alignItems: 'center',
      width: '100%',
    }
  }),
);


const Login: React.FC = () => {
  const styles = useStyles();
  return  ( <Paper className={styles.paper_login}>
    <div className={styles.root}>
    <Link to="/authorization"><Button variant="contained">Sign in</Button></Link>
    <Link to="/reset"><Button variant="contained">Sign up</Button></Link>
    </div>
    </Paper>)
};

export default Login;
