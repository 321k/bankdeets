import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'
import FormDropdown from '../components/FormDropdown.js'


export default class CanadianRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      institutionNumberError: false,
      transitNumberError: false,
      accountNumberError: false
    }
    this.validateInstutitutionNumber = this.validateInstutitutionNumber.bind(this);
    this.validateTransitNumber = this.validateTransitNumber.bind(this);
    this.validateAccountNumber = this.validateAccountNumber.bind(this);
  }

  validateInstutitutionNumber(event){
    fetch('https://api.transferwise.com/v1/validators/canadian-institution-number?institutionNumber=' + event.target.value)
    .then(res => this.setState({institutionNumberError: !res.ok}))
  }

  validateTransitNumber(event){
    fetch('https://api.transferwise.com/v1/validators/canadian-transit-number?institutionNumber=' + this.props.institutionNumber + '&transitNumber=' + event.target.value)
    .then(res => this.setState({transitNumberError: !res.ok}))
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/canadian-account-number?institutionNumber=' + this.props.institutionNumber + '&transitNumber=' + this.props.transitNumber + '&accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return (
      <CanadianRecipient
        institutionNumber={this.props.institutionNumber}
        transitNumber={this.props.transitNumber}
        accountNumber={this.props.accountNumber}
        accountType={this.props.accountType}
        institutionNumberError={this.state.institutionNumberError}
        transitNumberError={this.state.transitNumberError}
        accountNumberError={this.state.accountNumberError}
        validateInstutitutionNumber={this.validateInstutitutionNumber}
        validateTransitNumber={this.validateTransitNumber}
        validateAccountNumber={this.validateAccountNumber}
        onChange={this.props.onChange}
      />
    )
  }
}

function CanadianRecipient (props){
  const classes = useStyles();
  const institutionNumber = props.institutionNumber ? props.institutionNumber : '';
  const transitNumber = props.transitNumber ? props.transitNumber : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const accountType = props.accountType ? props.accountType : '';
    
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="institutionNumber"
          value={institutionNumber}
          description={<Translate text="Institution number"/>} 
          onChange={props.onChange}
          onBlur={props.validateInstutitutionNumber}
          error={props.institutionNumberError}
          helperText={<Translate text="Invalid institution number"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="transitNumber"
          value={transitNumber}
          description={<Translate text="Transit number"/>}
          onChange={props.onChange}
          onBlur={props.validateTransitNumber}
          error={props.transitNumberError}
          helperText={<Translate text="Invalid transit number"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
          onBlur={props.validateAccountNumber}
          error={props.accountNumberError}
          helperText={<Translate text="Invalid account number"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown
          name="accountType"
          value={accountType}
          description={<Translate text="Account type"/>}
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}