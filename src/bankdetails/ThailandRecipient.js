import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'
import GetBankCode from './GetBankCode.js'


export default class ThailandRecipientConatiner extends React.Component{
  constructor(props){
    super(props)
    this.validateAccountNumber=this.validateAccountNumber.bind(this);
    this.state={
      accountNumberError: false
    }
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/thailand-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return (
      <ThailandRecipient
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        accountNumberError={this.state.accountNumberError}
        validateAccountNumber={this.validateAccountNumber}
        bankCode={this.props.bankCode}
      />
    )
  }
}

function ThailandRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
          onBlur={props.validateAccountNumber}
          error={props.accountNumberError}
          placeholder="9517384260"
          helperText={<Translate text="Invalid account number"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="TH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}