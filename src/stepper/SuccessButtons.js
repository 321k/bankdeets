import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Translate } from 'react-translated';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../styles.js'


export default function SuccessButtons(props){
  const classes = useStyles();

  if(props.loading){
    return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleReset}
            color="primary"
          >
            <Translate text="Start over"/>
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={props.handleSubmit}
            color="primary"
            disabled={true}
          >
            <Translate text="Submit"/>
            <CircularProgress size={24} className={classes.buttonProgress}/>
          </Button>
        </FormControl>
      </React.Fragment>
    )
  } else if (props.submitSuccess){
    return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            variant="contained"
            className={classes.buttonSuccess}
            onClick={props.handleReset}
            disabled={false}
          >
            <Translate text="Add another one"/>
          </Button>
        </FormControl>
      </React.Fragment>
    )
  } else if (props.submitError){
    return (
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
            <Translate text="Previous"/>
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleReset}
            color="primary"
          >
            <Translate text="Start over"/>
          </Button>
        </FormControl>
      </React.Fragment>
    )
  } else if (props.validationError){
    return (
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
            <Translate text="Previous"/>
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleReset}
            color="primary"
          >
            <Translate text="Start over"/>
          </Button>
        </FormControl>
      </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
            <Translate text="Previous"/>
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={props.handleSubmit}
            color="primary"
            disabled={false}
          >
            <Translate text="Submit"/>
          </Button>
        </FormControl>
      </React.Fragment>
    )
  }
}