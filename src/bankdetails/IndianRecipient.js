import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'


export default class IbanRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.validateIfscCode = this.validateIfscCode.bind(this);
    this.validateAccountNumber = this.validateAccountNumber.bind(this);
    this.state={
      ifscError: false,
      accountNumberError: false
    }
  }

  validateIfscCode(event){
    fetch('https://api.transferwise.com/v1/validators/ifsc-code?ifscCode=' + event.target.value)
    .then(res => this.setState({ifscError: !res.ok}))
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/indian-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return(
      <IndianRecipient
        ifscCode={this.props.ifscCode}
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        validateIfscCode={this.validateIfscCode}
        validateAccountNumber={this.validateAccountNumber}
        ifscError={this.state.ifscError}
        accountNumberError={this.state.accountNumberError}
      />
    )
  }
}


function IndianRecipient (props){
  const classes = useStyles();
  const ifscCode = props.ifscCode ? props.ifscCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
            name="ifscCode"
            value={ifscCode}
            description={<Translate text="IFSC code"/>}
            onChange={props.onChange}  
            onBlur={props.validateIfscCode}
            error={props.ifscError}
            helperText={<Translate text="Incorrect IFSC code" />}
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
            helperText={<Translate text="Incorrect account number"/>}
          />
        </FormControl>
      </React.Fragment>
  );
}
