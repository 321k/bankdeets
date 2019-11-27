import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class HungarianLocalRecipientContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      accountNumberError: false
    }
    this.validateAccountNumber=this.validateAccountNumber.bind(this)
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/hungarian-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return (
      <HungarianLocalRecipient
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        accountNumberError={this.state.accountNumberError}
        validateAccountNumber={this.validateAccountNumber}
      />
    )
  }
}

function HungarianLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <FormControl className={classes.formControl}>
      <FormInput
        name="accountNumber"
        value={accountNumber}
        description={<Translate text="Account number"/>}
        onChange={props.onChange}
        onBlur={props.validateAccountNumber}
        error={props.accountNumberError}
        placeholder="120000001234567800000000"
        helperText={<Translate text="Invalid account number"/>}
      />
    </FormControl>
  );
}
