import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    width: `80%`,
  },
}));



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
          value={props.city}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="addressLine1"
          label={<Translate text='Address (line 1)'/>}
          className={classes.textField}
          value={props.city}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="addressLine1"
          label={<Translate text='Address (line 2)'/>}
          className={classes.textField}
          value={props.city}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
    </React.Fragment>
  )
}