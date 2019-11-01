import React from "react";
import BankDeets from './components/BankDeets.js'
import LanguageSelector from './components/LanguageSelector.js'
import Grid from '@material-ui/core/Grid';
import CountrySelector from './components/CountrySelector.js'
import CurrencySelector from './components/CurrencySelector.js'
import RecipientSelector from './components/RecipientSelector.js'
import PersonalDetails from './components/PersonalDetails.js'
import BankDetails from './components/BankDetails.js'

class BankDeetsWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      language: 'en'
    }
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(event){
    this.setState({
      language: event.target.value
    });
  }

  render(){
    return(
      <div>
        <Grid container direction="row" justify="flex-end">
          <LanguageSelector language={this.state.language} setLanguage={this.setLanguage} />
        </Grid>
        <BankDeets language={this.state.language} {...this.props}/>
      </div>
    )
  }
}

export default BankDeetsWrapper
export {BankDeets, CountrySelector, CurrencySelector, RecipientSelector, PersonalDetails, BankDetails}