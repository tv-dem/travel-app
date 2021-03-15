import React from 'react';
import {Link} from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


const Login: React.FC = () => {
  const styles = useStyles();
  return <div className={styles.root}>
    <Link to="/authorization"><Button variant="contained">Sign in</Button></Link>
    <Link to="/reset"><Button variant="contained">Sign up</Button></Link>
    </div>
};

export default Login;
