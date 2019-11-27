import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class AustralianLocalRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.validateAccountNumber = this.validateAccountNumber.bind(this);
    this.validateBsbCode = this.validateBsbCode.bind(this);
    this.state={
      bsbCodeError: false,
      accountNumberError: false
    }
  }

  validateBsbCode(event){
    fetch('https://api.transferwise.com/v1/validators/bsb-code?bsbCode=' + event.target.value)
    .then(res => this.setState({bsbCodeError: !res.ok}))
  }


  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/australian-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return(
      <AustralianLocalRecipient
        bsbCode={this.props.bsbCode}
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        validateBsbCode={this.validateBsbCode}
        bsbCodeError={this.state.bsbCodeError}
        validateAccountNumber={this.validateAccountNumber}
        accountNumberError={this.state.accountNumberError}
      />
    )
  }
}

function AustralianLocalRecipient (props){
  const classes = useStyles();
  const bsbCode = props.bsbCode ? props.bsbCode : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
            name="bsbCode"
            value={bsbCode}
            description={<Translate text="BSB code"/>}
            onChange={props.onChange}
            onBlur={props.validateBsbCode}
            error={props.bsbCodeError}
            helperText={<Translate text="Invalid BSB code"/>}
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
      </React.Fragment>
  );
}