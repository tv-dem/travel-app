import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }),
);

const Search:React.FC = ({input, onChangeInput}:any) => {

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          autoFocus
          type="search"          
          onChange={onChangeInput}
          value={input}
          id="standard-password-input"
          label="search country..."
          variant="standard"         
        />
      </div>
    </form>
  );
}

export default Search;
