import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles.js'
import PropTypes from 'prop-types';


export default function Address (props){
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <TextField
          id="city"
          label={<Translate text='City'/>}
          className={classes.textField}
          value={props.city}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="postCode"
          label={<Translate text='Post code'/>}
          className={classes.textField}
          value={props.postCode}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="addressLine"
          label={<Translate text='Address'/>}
          className={classes.textField}
          value={props.addressLine}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
    </React.Fragment>
  )
}

Address.propTypes = {
  city: PropTypes.string,
  postCode: PropTypes.string,
  addressLine: PropTypes.string
};