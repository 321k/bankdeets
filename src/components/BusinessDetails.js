import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles.js'
import PropTypes from 'prop-types';


export default function BusinessDetails(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <TextField
          id="businessName"
          label={<Translate text='Business name'/>}
          className={classes.textField}
          value={props.businessName}
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

BusinessDetails.propTypes = {
  businessName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string
};