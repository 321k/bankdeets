import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Translate } from 'react-translated';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../styles.js'
import SuccessButtons from './SuccessButtons.js'

export default function Footer(props){
  const classes = useStyles();
  switch(props.activeStep){
    case(0):
      return (
          <FormControl className={classes.formControl}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
              <Translate text="Next"/>
            </Button>
          </FormControl>
      )
    case(1):
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
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
              <Translate text="Next"/>
            </Button>
          </FormControl>
        </React.Fragment>
      )
    case(2):
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
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
              <Translate text="Submit"/>
            </Button>
          </FormControl>
        </React.Fragment>
      )
    case(3):
      return (
            <SuccessButtons
              submitSuccess={props.submitSuccess}
              loading={props.loading}
              validationError={props.validationError}
              submitError={props.submitError}
              handleBack={props.handleBack}
              handleReset={props.handleReset}
            />
      )
    default:
      return <div></div>
  }
}


