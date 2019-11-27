import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';



export default class SuccessScreenContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.validateBankDetails()
  }

  componentDidUpdate(prevProps){
    if(prevProps.validationSuccess !== this.props.validationSuccess){
      this.props.handleSubmit()
    }
  }

  render(){
    return (
      <SuccessScreen {...this.props}/>
    )
  }
}

function SuccessScreen (props){  
  if (props.loading){
    return <CircularProgress/>
  } else if(props.validationError){
    return <Error {...props}/>
  } else if (props.submitSuccess){
    return <Success {...props}/> 
  } else if (props.submitError){
    return <SubmitError {...props}/> 
  } else if (props.validationSuccess){
    return <ValidatedContainer {...props}/> 
  } else {
    return <Default {...props}/>
  }
}

function Error (props){
  return (
    <div>
    <h2>Invalid bank details</h2>
      {
        props.response.errors ? props.response.errors.map(error => (
          <div key={error.message} styles={{margin: 10, padding: 10}}>
            <div>{error.message}</div>
            <br/>
          </div>
        )) : ''
    }
    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfq8MQgdbNuPB6o-Y0_6eQcUEAaHd90PyRE_qlTqiN1mzb5Zg/viewform?usp=sf_link">Report a problem with the form</a></p>
  </div>
  )      
}



function SubmitError (props){
  return (
    <div>
    <h2>Failed to submit</h2>
    Something went wrong when we tried to submit the data.
  </div>
  )      
}


class ValidatedContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <Validated {...this.props} />
  }
}

function Validated (props) {
  return (
    <div>
      <h2>The bank details are valid</h2>
      Submitting data...
    </div>
  )
}

function Success (props) {
  return (
    <div>
      <h2>Bank details submitted</h2>
      Thank you
    </div>
  )
}

function Default (props){
  const beneficiaryDetails = props.beneficiaryDetails
  const bankDetails = props.bankDetails
  return(
    <div>
    <h2>Beneficiary</h2>
    {
      Object.keys(beneficiaryDetails).map((key, i) => (
        beneficiaryDetails[key] !== '' ?
        <TextField
          id={key}
          label={key}
          key={i}
          value={beneficiaryDetails[key]}
          margin="normal"
        /> : ''
      ))
    }

    <h2>Bank information</h2>
    {
      Object.keys(bankDetails).map((key, i) => (
        bankDetails[key] !== '' ?
        <TextField
          id={key}
          label={key}
          key={i}
          value={bankDetails[key]}
          margin="normal"
        /> : ''
      ))
    }
    </div>
  )
}