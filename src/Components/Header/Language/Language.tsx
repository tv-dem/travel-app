import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const Language:React.FC = ({languages, selectedLanguage, onSelectLanguage}:any) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={selectedLanguage.lan}
          onChange={onSelectLanguage}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {languages.map(({val, lan}: any) => <MenuItem value={lan}>{val}</MenuItem>)}
        </Select>
        <FormHelperText>set language</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Language;
