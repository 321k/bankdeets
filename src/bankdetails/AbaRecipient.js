import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'
import FormDropdown from '../components/FormDropdown.js'


export default class AbaRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.validateAbartn = this.validateAbartn.bind(this);
    this.validateAccountNumber = this.validateAccountNumber.bind(this);
    this.state={
      abartnError: false,
      accountNumberError: false
    }
  }

  validateAbartn(event){
    fetch('https://api.transferwise.com/v1/validators/abartn?abartn=' + event.target.value)
    .then(res => this.setState({abartnError: !res.ok}))
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/aba-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }


  render(){
    return(
      <AbaRecipient
        abartn={this.props.abartn}
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        validateAbartn={this.validateAbartn}
        validateAccountNumber={this.validateAccountNumber}
        abartnError={this.state.abartnError}
        accountNumberError={this.state.accountNumberError}
      />
    )
  }
}


function AbaRecipient (props){
  const classes = useStyles();
  const abartn = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const accountType = props.accountType ? props.accountType : ''
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput 
          className={classes.formInput}
          name="abartn" 
          value={abartn} 
          description="ACH routing number" 
          onChange={props.onChange}
          placeholder="111000025"
          error={props.abartnError}
          onBlur={props.validateAbartn}
          helperText="Invalid routing number"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput 
          className={classes.formInput}
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}  
          placeholder="12345678"
          error={props.accountNumberError}
          onBlur={props.validateAccountNumber}
          helperText="Invalid account number"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          className={classes.formInput}
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}