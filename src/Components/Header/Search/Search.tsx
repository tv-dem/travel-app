import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import langData from '../../../langData/langData.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30ch',
        [theme.breakpoints.up('sm')]: {
          width: '50ch',
        },
      },
    },
  }),
);

const Search:React.FC = ({input, onChangeInput,language}:any) => {

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          autoFocus
          type="search"          
          onChange={onChangeInput}
          value={input}
          placeholder={langData[language].mainPage_Search_enter_country}
          id="standard-password-input"
          label={langData[language].mainPage_Search_search_country}
          variant="standard"         
        />
      </div>
    </form>
  );
}

export default Search;
