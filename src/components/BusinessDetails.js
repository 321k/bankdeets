import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: `80%`,
  },
}));


export default function PersonalDetails(props) {
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