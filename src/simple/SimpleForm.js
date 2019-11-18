import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BankDeets from '../components/BankDeets.js'
import {IbanRecipient, BangladeshRecipient} from '../bankdetails/BankDetails.js'
import PersonalDetails from '../components/PersonalDetails.js'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../styles.js'
import FormControl from '@material-ui/core/FormControl';
import { Translate } from 'react-translated';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export function IbanFormContainer (props){
  return (
    <BankDeets language="en" render={props => <IbanForm {...props}/>} />
  )
}

function IbanForm(props){
  return (
    <div>
      <CssBaseline />
      <PersonalDetails {...props}/>
      <IbanRecipient
        iban={props.bankDetails.iban}
        onChange={props.handleBankDetailsChange}
      />
      <ButtonGroup>
        <SubmitButton {...props}/>
      </ButtonGroup>
    </div>
  )
}


export function BangladeshFormContainer (props){
  return (
    <BankDeets language="en" render={props => <BangladeshForm {...props}/>} />
  )
}

function BangladeshForm(props){
  return (
    <div>
      <CssBaseline />
      <PersonalDetails {...props}/>
      <BangladeshRecipient
        accountNumber={props.bankDetails.accountNumber}
        bankCode={props.bankDetails.bankCode}
        onChange={props.handleBankDetailsChange}
      />
      <ButtonGroup>
        <SubmitButton {...props}/>
      </ButtonGroup>
    </div>
  )
}


function SubmitButton(props){
  const classes = useStyles();

  if(props.loading){
    return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.clearBankDetails}
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
            onClick={props.clearBankDetails}
            color="primary"
            disabled={false}
          >
            <Translate text="Thank you"/>
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
            onClick={props.clearBankDetails}
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
            onClick={props.clearBankDetails}
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