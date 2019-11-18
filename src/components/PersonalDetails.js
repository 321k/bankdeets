import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles.js'

export default function PersonalDetails(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <TextField
          id="firstName"
          label={<Translate text='First name'/>}
          className={classes.textField}
          value={props.firstName}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="lastName"
          label={<Translate text='Last name'/>}
          className={classes.textField}
          value={props.lastName}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="email"
          type="email"
          label={<Translate text='Email'/>}
          className={classes.textField}
          value={props.email}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="phoneNumber"
          label={<Translate text='Phone number'/>}
          className={classes.textField}
          value={props.phoneNumber}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
    </React.Fragment>
  );
}    