import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from './FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class IbanRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.validateIban = this.validateIban.bind(this);
    this.state={
      ibanError: false,
    }
  }

  validateIban(event){
    fetch('https://api.transferwise.com/v1/validators/iban?iban=' + event.target.value)
    .then(res => this.setState({ibanError: !res.ok}))
  }

  render(){
    return(
      <IbanRecipient
        iban={this.props.iban}
        onChange={this.props.onChange}
        validateIban={this.validateIban}
        ibanError={this.state.ibanError}
      />
    )
  }
}

function IbanRecipient (props){
  const classes = useStyles();
  const iban = props.iban ? props.iban : ''
  return(
    <FormControl className={classes.formControl}>
      <FormInput
          name="iban" value={iban} 
          description="IBAN" 
          onChange={props.onChange} 
          error={props.ibanError}
          onBlur={props.validateIban}
          helperText="Invalid IBAN"
      />
    </FormControl>
  );
}