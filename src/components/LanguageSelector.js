import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Translate} from 'react-translated';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageSelector (props){
  const classes = useStyles();
  const supportedLanguages = [
    {'key': 'en', 'value': '🇬🇧'},
    {'key': 'se', 'value': '🇸🇪'},
    {'key': 'dk', 'value': '🇩🇰'},
    {'key': 'no', 'value': '🇳🇴'},
    {'key': 'fi', 'value': '🇫🇮'},
    {'key': 'fr', 'value': '🇫🇷'},
    // {'key': 'br', 'value': '🇧🇷'},
    // {'key': 'de', 'value': '🇩🇪'},
    // {'key': 'es', 'value': '🇪🇸'},
    // {'key': 'fa', 'value': '🇮🇷'},
    // {'key': 'hr', 'value': '🇭🇷'},
    // {'key': 'it', 'value': '🇮🇹'},
    // {'key': 'ja', 'value': '🇯🇵'},
    // {'key': 'nl', 'value': '🇳🇱'},
    // {'key': 'pt', 'value': '🇵🇹'}

  ]
  return (
    <FormControl component="fieldset" className={classes.formControl} variant="outlined">
      <InputLabel htmlFor="language"><Translate text='Language'/></InputLabel>
      <Select
        value={props.language}
        name='language'
        onChange={props.setLanguage}
        labelWidth={70}
        inputProps={{
          name: 'language',
          id: 'Language',
        }}
      >
        {
          supportedLanguages.map((item) => 
              <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
          )
        }
      </Select>
    </FormControl>
  );
}
