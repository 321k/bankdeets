import React from "react";
import Grid from '@material-ui/core/Grid';
import BankDeets from './components/BankDeets.js'
import LanguageSelector from './components/LanguageSelector.js'
import CountrySelector from './components/CountrySelector.js'
import CurrencySelector from './components/CurrencySelector.js'
import RecipientSelector from './components/RecipientSelector.js'
import PersonalDetails from './components/PersonalDetails.js'
import BusinessDetails from './components/BusinessDetails.js'
import Address from './components/Address.js'
import BankDetailsSelector from './components/BankDetailsSelector.js'
import BankDeetsStepper from './stepper/BankDeetsStepper.js'
import {IbanFormContainer} from './simple/SimpleForm.js'
import {BangladeshFormContainer} from './simple/SimpleForm.js'
import SortCodeRecipient from './bankdetails/SortCodeRecipient.js'
import IbanRecipient from  './bankdetails/IbanRecipient.js'
import AbaRecipient from './bankdetails/AbaRecipient.js'
import {
  SwiftRecipient,
  SwedishLocalRecipient,
  AustralianLocalRecipient,
  AustralianBusinessRecipient,
  CanadianRecipient,
  PolishLocalRecipient,
  HungarianLocalRecipient,
  IndianRecipient,
  SingaporeanRecipient,
  HongkongRecipient,
  NewzealandRecipient,
  CzechLocalRecipient,
  BangladeshRecipient,
  ChineseCardRecipient,
  VietnamEarthportRecipient,
  SwissLocalRecipient,
  MalaysianLocalRecipient,
  ArgentinaRecipient,
  BrazilRecipient,
  ChileRecipient,
  ThailandRecipient,
  EgyptLocalRecipient,
  GhanaLocalRecipient,
  KenyaLocalRecipient,
  MexicanRecipient,
  IndonesianRecipient,
  JapaneseRecipient,
  SriLankaRecipient,
  MoroccoRecipient,
  NigeriaRecipient,
  NepalRecipient,
  PeruRecipient,
  PhilippinesRecipient,
  SouthAfricaRecipient,
  BotswanaLocalRecipient,
  NotAvaialableRecipient
} from './bankdetails/BankDetails.js'

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
        <BankDeets language={this.state.language} {...this.props} render={props => <BankDeetsStepper {...props}/>} />
      </div>
    )
  }
}

export default BankDeetsWrapper
export {
BankDeets,
LanguageSelector,
CountrySelector,
CurrencySelector,
RecipientSelector,
PersonalDetails,
BusinessDetails,
Address,
BankDetailsSelector,
BankDeetsStepper,
IbanFormContainer,
BangladeshFormContainer,
IbanRecipient,
SwiftRecipient,
SortCodeRecipient,
SwedishLocalRecipient,
AbaRecipient,
AustralianLocalRecipient,
AustralianBusinessRecipient,
CanadianRecipient,
PolishLocalRecipient,
HungarianLocalRecipient,
IndianRecipient,
SingaporeanRecipient,
HongkongRecipient,
NewzealandRecipient,
CzechLocalRecipient,
BangladeshRecipient,
ChineseCardRecipient,
VietnamEarthportRecipient,
SwissLocalRecipient,
MalaysianLocalRecipient,
ArgentinaRecipient,
BrazilRecipient,
ChileRecipient,
ThailandRecipient,
EgyptLocalRecipient,
GhanaLocalRecipient,
KenyaLocalRecipient,
MexicanRecipient,
IndonesianRecipient,
JapaneseRecipient,
SriLankaRecipient,
MoroccoRecipient,
NigeriaRecipient,
NepalRecipient,
PeruRecipient,
PhilippinesRecipient,
NotAvaialableRecipient
}