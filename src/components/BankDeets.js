import React from 'react';
import CountrySelector from './CountrySelector.js'
import CurrencySelector from './CurrencySelector.js'
import RecipientSelector from './RecipientSelector.js';
import BankDetails from './BankDetails.js'
import { Provider, Translate } from 'react-translated';
import translation from '../translation.js';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import PersonalOrBusiness from './PersonalOrBusiness.js'
import Success from './Success.js'
import StepLabel from '@material-ui/core/StepLabel';
import Address from './Address.js'
import currencies from '../currencies.js'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    margin: theme.spacing(1),
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default class BankDeetsContainer extends React.Component {
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

    console.log(alpha2Country)

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
    return (
      <Provider language={this.props.language} translation={translation}>
        <BankDeetsStepper
          handleChange={this.handleChange}
          handleCountryChange={this.handleCountryChange}
          handleBankDetailsChange={this.handleBankDetailsChange}
          validateBankDetails={this.validateBankDetails}
          firstName={this.state.beneficiaryDetails.firstName}
          lastName={this.state.beneficiaryDetails.lastName}
          email={this.state.beneficiaryDetails.email}
          phoneNumber={this.state.beneficiaryDetails.phoneNumber}
          country={this.state.beneficiaryDetails.country}
          countryHelper={this.state.countryHelper}
          currency={this.state.beneficiaryDetails.currency}
          bankDetailsType={this.state.beneficiaryDetails.bankDetailsType}
          bankDetails={this.state.bankDetails}
          beneficiaryDetails={this.state.beneficiaryDetails}
          clearBankDetails={this.clearBankDetails}
          handleSubmit={this.handleSubmit}
          response={this.state.response}
          validationSuccess={this.state.validationSuccess}
          validationError={this.state.validationError}
          submitSuccess={this.state.submitSuccess}
          submitError={this.state.submitError}
          loading={this.state.loading}
        />
      </Provider>
    );
  }
}



class BankDeetsStepper extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeStep: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setStep = this.setStep.bind(this);
  }

  handleNext(){
    const step = this.state.activeStep + 1
    this.setState({activeStep: step})
  };

  handleBack() {
    const step = this.state.activeStep - 1
    this.setState({activeStep:  step})
  };

  handleReset() {
    this.setState({activeStep: 0})
    this.props.clearBankDetails()
  };

  setStep(event) {
    console.log(event.currentTarget.value)
    this.setState({activeStep: parseInt(event.currentTarget.value)})
  };

  render(){
    const steps = ['Beneficiary', 'Country and currency', 'Bank details'];
    return(
      <div>
        <CssBaseline />
        <Container maxWidth="sm" style={{minHeight: 400}}>
          <Stepper alternativeLabel activeStep={this.state.activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>  
                <StepButton value={index} onClick={this.setStep}>
                  <StepLabel value={index} error={(this.state.activeStep===3 && index===2) ? this.props.error : false}>
                    <Translate text={label}/>
                  </StepLabel>
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Grid container spacing={3} alignItems="center" justify="center" direction="column">
            <Body
              {...this.props} 
              activeStep={this.state.activeStep} 
              handleNext={this.handleNext} 
              handleBack={this.handleBack} 
              handleReset={this.handleReset}
            />
          </Grid>
        </Container>
        <Container maxWidth="sm">
          <Grid container spacing={3} alignItems="flex-end" justify="center" direction="row">
              <Footer 
                {...this.props} 
                activeStep={this.state.activeStep} 
                handleNext={this.handleNext} 
                handleBack={this.handleBack} 
                handleReset={this.handleReset}
              />
            </Grid>
        </Container>
      </div>
    )
  }
}


function Body(props){
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
            value={props.country}
            language={props.language}
          />
          <Address
            onChange={props.handleChange}
            cisty={props.city}
            postCode={props.postCode}
            addressLine1={props.addressLine1}
            addressLine2={props.addressLine2}
          />
        </React.Fragment>
      )
      break;
    case(2):
      return (
        <React.Fragment>
            <CurrencySelector
              onChange={props.handleChange}
              value={props.currency}
              country={props.country}
            />
            <RecipientSelector 
              onChange={props.handleChange}
              value={props.bankDetailsType}
              country={props.country}
              currency={props.currency}
            />
            <BankDetails
              bankDetailsType={props.bankDetailsType}
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






function Footer(props){
  const classes = useStyles();
  switch(props.activeStep){
    case(0):
      return (
            <Button
              className={classes.button}
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
            <Translate text="Next"/>
            </Button>
      )
      break;
    case(1):
      return (
        <React.Fragment>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={props.handleBack}
              color="primary"
            >
            <Translate text="Previous"/>
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
            <Translate text="Next"/>
            </Button>
        </React.Fragment>
      )
      break;
    case(2):
      return (
        <React.Fragment>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
          <Translate text="Previous"/>
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={props.handleNext}
            color="primary"
          >
          <Translate text="Submit"/>
          </Button>
        </React.Fragment>
      )
      break;
    case(3):
      return (
            <SubmitButton
              submitSuccess={props.submitSuccess}
              loading={props.loading}
              validationError={props.validationError}
              submitError={props.submitError}
              handleBack={props.handleBack}
              handleReset={props.handleReset}
            />
      )
      break;
    default:
      return <div></div>
  }
}


function SubmitButton(props){
  const classes = useStyles();

  if(props.loading){
    return(
      <React.Fragment>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={props.handleReset}
          color="primary"
        >
          <Translate text="Start over"/>
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={props.handleSubmit}
          color="primary"
          disabled={true}
        >
          <Translate text="Submit"/>
          <CircularProgress size={24} className={classes.buttonProgress}/>
        </Button>
      </React.Fragment>
    )
  } else if (props.submitSuccess){
    return(
      <React.Fragment>
        <Button
          variant="contained"
          className={classes.buttonSuccess}
          color="primary"
          onClick={props.handleReset}
          disabled={false}
        >
          <Translate text="Add another"/>
        </Button>
      </React.Fragment>
    )
  } else if (props.submitError){
    return (
      <React.Fragment>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
            <Translate text="Previous"/>
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleReset}
            color="primary"
          >
            <Translate text="Start over"/>
          </Button>
        </React.Fragment>
    )
  } else if (props.validationError){
    return (
      <React.Fragment>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleBack}
            color="primary"
          >
            <Translate text="Previous"/>
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleReset}
            color="primary"
          >
            <Translate text="Start over"/>
          </Button>
        </React.Fragment>
    )
  } else {
    return(
       <React.Fragment>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={props.handleBack}
          color="primary"
        >
          <Translate text="Previous"/>
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={props.handleSubmit}
          color="primary"
          disabled={false}
        >
          <Translate text="Submit"/>
        </Button>
      </React.Fragment>
    )
  }
}