import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';



export default class SuccessScreenContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.sendToTransferWise()
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
  } else if(props.error){
    return <Error {...props}/>
  } else if (props.success){
    return <Success {...props}/> 
  } else if (props.validated){
    return <Validated {...props}/> 
  } else {
    return <Default {...props}/>
  }
}

function Error (props){
  return (
    <div>
    <h2>Incorrect information</h2>
      {
        props.response.errors ? props.response.errors.map(error => (
          <div styles={{margin: 10, padding: 10}}>
            <div>{error.message}</div>
            <br/>
          </div>
        )) : ''
    }
  </div>
  )      
}


function Validated (props) {
  return (
    <div>
      <h2>The bank details are valid</h2>
      Verified by TransferWise, ID: {props.response.id}
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
          value={bankDetails[key]}
          margin="normal"
        /> : ''
      ))
    }
    </div>
  )
}