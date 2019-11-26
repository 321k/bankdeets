import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class SortCodeRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.validateSortCode = this.validateSortCode.bind(this);
    this.validateAccountNumber = this.validateAccountNumber.bind(this);
    this.state={
      sortCodeError: false,
      accountNumberError: false
    }
  }

  validateSortCode(event){
    fetch('https://api.transferwise.com/v1/validators/sort-code?sortCode=' + event.target.value)
    .then(res => this.setState({sortCodeError: !res.ok}))
  }

  validateAccountNumber(event){
    fetch('https://api.transferwise.com/v1/validators/sort-code-account-number?accountNumber=' + event.target.value)
    .then(res => this.setState({accountNumberError: !res.ok}))
  }

  render(){
    return(
      <SortCodeRecipient
        sortCode={this.props.sortCode}
        accountNumber={this.props.accountNumber}
        onChange={this.props.onChange}
        validateSortCode={this.validateSortCode}
        validateAccountNumber={this.validateAccountNumber}
        sortCodeError={this.state.sortCodeError}
        accountNumberError={this.state.accountNumberError}
      />
    )
  }
}

function SortCodeRecipient (props){
  const classes = useStyles();
  const sortCode = props.sortCode ? props.sortCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
              name="sortCode"
              placeholder="202020"
              value={sortCode}
              description={<Translate text="Sort code"/>}
              onChange={props.onChange}
              onBlur={props.validateSortCode}
              error={props.sortCodeError}
              helperText="Incorrect sort code."
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput
              placeholder="12345678"
              description={<Translate text="Account number"/>}
              name="accountNumber"
              value={accountNumber}
              onBlur={props.validateAccountNumber}
              onChange={props.onChange}
              error={props.accountNumberError}
              helperText="Incorrect account number."
          />
        </FormControl>
      </React.Fragment>
  );
}