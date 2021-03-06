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

const Language:React.FC = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('Русский');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='Русский'>Русский</MenuItem>
          <MenuItem value='English'>English</MenuItem>
          <MenuItem value='Deutch'>Deutch</MenuItem>
        </Select>
        <FormHelperText>set language</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Language;
