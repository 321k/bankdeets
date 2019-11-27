import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'


export default class NewzealandRecipientContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      accountNumberError: false
    }
    this.validateAccountNumber=this.validateAccountNumber.bind(this)
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/new-zealand-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return (
      <NewzealandRecipient
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        accountNumberError={this.state.accountNumberError}
        validateAccountNumber={this.validateAccountNumber}
      />
    )
  }
}

function NewzealandRecipient (props) {
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <FormControl className={classes.formControl}>
      <FormInput
        name="accountNumber"
        value={accountNumber}
        description={<Translate text="Account number"/>}
        onChange={props.onChange}
        error={props.accountNumberError}
        placeholder="03-1587-0050000-00"
        helperText={<Translate text="Invalid account number"/>}
      />
    </FormControl>
  );
}
