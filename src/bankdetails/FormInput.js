import React from "react";
import TextField from '@material-ui/core/TextField';
import useStyles from '../styles.js'

export default function FormInput (props) {
    const classes = useStyles();
    return(
         <TextField
            id={props.name}
            label={props.description}
            className={classes.textField}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} 
            margin="normal"
            disabled={props.disable} 
          />
    );
}
