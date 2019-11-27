import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated';
import useStyles from '../styles.js'

export default class SwedishLocalRecipientContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bankGiroError: false
    }
    this.validateBankGiro=this.validateBankGiro.bind(this);
  }

  validateBankGiro(event){
    fetch('https://api.transferwise.com/v1/validators/bankgiro-number?bankgiroNumber=' + event.target.value)
    .then(res => this.setState({bankGiroError: !res.ok}))
  }

  render(){
    return (
      <SwedishLocalRecipient
        bankGiro={this.props.bankGiro}
        onChange={this.props.onChange}
        bankGiroError={this.state.bankGiroError}
        validateBankGiro={this.validateBankGiro}
      />
    )
  }
}

function SwedishLocalRecipient (props){
  const classes = useStyles();
  const bankGiro = props.bankGiro ? props.bankGiro : '';
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput 
            name="bankGiro" 
            value={bankGiro}
            description={<Translate text="Bankgiro number" />}
            onChange={props.onChange}  
            placeholder="12345678"
            onBlur={props.validateBankGiro}
            error={props.bankGiroError}
            helperText={<Translate text="Invalid bankgiro number" />}
        />
      </FormControl>
    </React.Fragment> 
  );
}
