import React from 'react';
import { Translate, Translator } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


export default function PersonalDetails(props) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        id="firstName"
        label={<Translate text='First name'/>}
        className={classes.textField}
        value={props.firstName}
        onChange={props.onChange} 
        margin="normal"
      />

      <TextField
        id="lastName"
        label={<Translate text='Last name'/>}
        className={classes.textField}
        value={props.lastName}
        onChange={props.onChange} 
        margin="normal"
      />

      <TextField
        id="email"
        label={<Translate text='Email'/>}
        className={classes.textField}
        value={props.email}
        onChange={props.onChange} 
        margin="normal"
      />

      <TextField
        id="phoneNumber"
        label={<Translate text='Phone number'/>}
        className={classes.textField}
        value={props.firstName}
        onChange={props.onChange} 
        margin="normal"
      />
    </div>
  );
    }    