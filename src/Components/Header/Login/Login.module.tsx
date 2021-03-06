import React from 'react';
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
      <Button variant="contained">Sign in</Button>
      <Button variant="contained">Sign up</Button>
    </div>
};

export default Login;
