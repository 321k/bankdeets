import React from 'react';
import PersonalOrBusiness from './PersonalOrBusiness.js'
import CountrySelector from './CountrySelector.js'
import Address from './Address.js'
import CurrencySelector from './CurrencySelector.js'
import RecipientSelector from './RecipientSelector.js';
import BankDetailsSelector from './BankDetailsSelector.js'
import Success from './Success.js'

export default function Body(props){
  switch(props.activeStep){
    case(0):
      return (
            <PersonalOrBusiness {...props}/>
      )
      break;
    case(1):
      return (
        <React.Fragment>
          <CountrySelector
            onChange={props.handleChange}
            value={props.beneficiaryDetails.country}
            language={props.language}
          />
          <Address
            onChange={props.handleChange}
            cisty={props.beneficiaryDetails.city}
            postCode={props.beneficiaryDetails.postCode}
            addressLine={props.beneficiaryDetails.addressLine}
          />
        </React.Fragment>
      )
      break;
    case(2):
      return (
        <React.Fragment>
            <CurrencySelector
              onChange={props.handleChange}
              value={props.beneficiaryDetails.currency}
              country={props.beneficiaryDetails.country}
            />
            <RecipientSelector 
              onChange={props.handleChange}
              value={props.beneficiaryDetails.bankDetailsType}
              country={props.beneficiaryDetails.country}
              currency={props.beneficiaryDetails.currency}
            />
            <BankDetailsSelector
              bankDetailsType={props.beneficiaryDetails.bankDetailsType}
              onChange={props.handleBankDetailsChange}
              clearBankDetails={props.clearBankDetails}
              {...props.bankDetails}
            />
        </React.Fragment>
      )
      break;
    case(3):
      return (
        <React.Fragment>
            <Success
              submitSuccess={props.submitSuccess}
              validationSuccess={props.validationSuccess}
              submitError={props.submitError}
              validationError={props.validationError}
              loading={props.loading}
              response={props.response}
              bankDetails={props.bankDetails}
              beneficiaryDetails={props.beneficiaryDetails}
              validateBankDetails={props.validateBankDetails}
              handleSubmit={props.handleSubmit}
            />
        </React.Fragment>
      )
      break;
    default:
      return <div></div>
  }
}