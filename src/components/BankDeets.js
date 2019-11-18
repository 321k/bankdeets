import React from 'react';
import { Provider, Translate } from 'react-translated';
import currencies from '../currencies.js'
import translation from '../translation.js';



export default class BankDeets extends React.Component {
  constructor(props){
    super(props)
    let home = window.location.href
    if(home.includes("home")){
      home = home.split('home')
      home = home[home.length-1]
      home = home.substring(1, home.length)
    } else {
      home = undefined
    }
    
    
    this.state = {
      beneficiaryDetails: {
        country: 'USA',
        currency: 'USD',
        bankDetailsType: 'ABA',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        businessName: '',
        legalType: 'PRIVATE',
      },
      bankDetails: {},
      response: '',
      validationSuccess: false,
      validationError: false,
      submitSuccess: false,
      submitError: false,
      error: false,
      loading: false,
      home: home
    }

    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBankDetailsChange = this.handleBankDetailsChange.bind(this);
    this.clearBankDetails = this.clearBankDetails.bind(this);
    this.validateBankDetails = this.validateBankDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCountryChange (newVal, actionMeta) {
    let name = 'country'
    let beneficiaryDetails = this.state.beneficiaryDetails;
    beneficiaryDetails[name] = newVal.value;
    this.setState({
      beneficiaryDetails: beneficiaryDetails,
      countryHelper: newVal
    });
  }

  handleChange(event){
    const target = event.target ? event.target : event.currentTarget
    const name = target.name ? target.name : target.id
    let beneficiaryDetails = this.state.beneficiaryDetails
    beneficiaryDetails[name] = target.value
    this.setState({
      beneficiaryDetails: beneficiaryDetails
    })
  }

  handleBankDetailsChange(event){
    const target = event.currentTarget ? event.currentTarget : event.target
    const name = target.name ? target.name : target.id
    let bankDetails = this.state.bankDetails
    bankDetails[name] = target.value
    this.setState({
      bankDetails: bankDetails
    })
  }

  clearBankDetails(){
    this.setState({
      bankDetails: {},
      success: false
    })
  }


  validateBankDetails(){
    this.setState({loading: true})
    let details = this.state.bankDetails
    const alpha3Country = this.state.beneficiaryDetails.country
    const alpha2Country = currencies.filter(country => (
      country.country_iso_3_char_code === alpha3Country
    ))[0].country_iso_2_char_code

    details['legalType'] = this.state.beneficiaryDetails.legalType
    details['address'] = {
      country: alpha2Country,
      city: this.state.beneficiaryDetails.city,
      postCode: this.state.beneficiaryDetails.postCode,
      firstLine: this.state.beneficiaryDetails.addressLine
    }

    let accountHolderName = ''
    if(this.state.beneficiaryDetails.legalType === 'PRIVATE'){
      accountHolderName = this.state.beneficiaryDetails.firstName + ' ' + this.state.beneficiaryDetails.lastName
    } else {
      accountHolderName = this.state.beneficiaryDetails.businessName
    } 
    const payload = {
      currency: this.state.beneficiaryDetails.currency,
      type: this.state.beneficiaryDetails.bankDetailsType,
      accountHolderName: accountHolderName,
      details: details,
    }

    this.setState({loading: true})
    fetch('http://payspresso.io/api/v1/validate-bank-details', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
 
    .then(res => {
      this.setState({
        validationSuccess: res.ok,
        loading: false,
        validationError: !res.ok
      });
      return res;
    })
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({response: res});
      },
      (error) => {
        console.log(error)
      }
    )
  }

  handleSubmit(){
    this.setState({loading: true})

    const payload = {
      beneficiaryDetails: this.state.beneficiaryDetails,
      bankDetails: this.state.bankDetails,
      language: this.props.language,
      home: this.state.home
    }

    if(this.props.submitURL !== undefined){
      fetch(this.props.submitURL, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(payload)
      })
      .then(
        res => {
          if(res.ok){
            this.setState({submitSuccess: true, loading: false, submitError: false});
          } else {
            this.setState({submitSuccess: false, loading: false, submitError: true});
          }
        }
      )
    } else {
      console.log(payload);
      this.setState({submitSuccess: true, loading: false, submitError: false});
    }  
  }

  render () {
    let values = {...this.props, ...this.state}
    values.handleCountryChange = this.handleCountryChange
    values.handleChange = this.handleChange
    values.handleBankDetailsChange = this.handleBankDetailsChange
    values.clearBankDetails = this.clearBankDetails
    values.validateBankDetails = this.validateBankDetails
    values.handleSubmit = this.handleSubmit

    return (
      <Provider language={this.props.language} translation={translation}>
        {this.props.render(values)}
      </Provider>
    );
  }
}
