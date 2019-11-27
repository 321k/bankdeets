import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class PolishLocalRecipientContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      accountNumberError: false
    }
    this.validateAccountNumber=this.validateAccountNumber.bind(this)
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/polish-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return (
      <PolishLocalRecipient
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        accountNumberError={this.state.accountNumberError}
        validateAccountNumber={this.validateAccountNumber}
        bic={this.props.bic}
      />
    )
  }
}


function PolishLocalRecipient (props){
  const classes = useStyles();  
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bic = props.bic ? props.bic : '';
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
            placeholder="12345678901234567890123456"
            helperText={<Translate text="Invalid account number"/>}
        />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput name="bic" value={bic} description={<Translate text="BIC (optional)"/>} onChange={props.onChange}  />
        </FormControl>
      </React.Fragment>
  );
}

