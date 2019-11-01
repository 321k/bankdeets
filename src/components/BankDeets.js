import React from 'react';
import CountrySelector from './CountrySelector.js'
import CurrencySelector from './CurrencySelector.js'
import RecipientSelector from './RecipientSelector.js';
import PersonalDetails from './PersonalDetails.js'
import BusinessDetails from './BusinessDetails.js'
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

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';



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
    this.state = {
      payload: {
        country: 'USA',
        currency: 'USD',
        recipientType: 'ABA',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        businessName: '',
        beneficiaryType: 'PRIVATE',
      },
      bankDetails: {test: 'test'},
      loading: false,
      success: false
    }
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBankDetailsChange = this.handleBankDetailsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearBankDetails = this.clearBankDetails.bind(this);
    this.delayState = this.delayState.bind(this);
  }

  handleCountryChange (newVal, actionMeta) {
    let name = 'country'
    let payload = this.state.payload;
    payload[name] = newVal.value;
    this.setState({
      payload: payload,
      countryHelper: newVal
    });
  }

  handleChange(event){
    const target = event.target ? event.target : event.currentTarget
    const name = target.name ? target.name : target.id
    let payload = this.state.payload
    payload[name] = target.value
    this.setState({
      payload: payload
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

  delayState() {
    setTimeout(() => {
        this.setState({
        loading: false,
        success: true
      });
    }, 1000);
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({loading: true})

    if(this.props.submitURL !== undefined){
      fetch(this.props.submitURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          payload: this.state.payload,
          bankDetails: this.state.bankDetails,
          language: this.props.language
        })
      })
      .then(
        res => {
          if(res.ok){
            this.setState({success: true});
            return res;
          } else {
            this.setState({success: false});
            return res;
          }
        }
      )
      .then(res => res.json())
      .then(this.delayState())
    } else {
      const payload = {...this.state}
      this.delayState()
      console.log(payload)
    }
  }

  render () {
    return (
      <Provider language={this.props.language} translation={translation}>
        <BankDeetsStepper
          handleChange={this.handleChange}
          handleCountryChange={this.handleCountryChange}
          handleBankDetailsChange={this.handleBankDetailsChange}
          firstName={this.state.payload.firstName}
          lastName={this.state.payload.lastName}
          email={this.state.payload.email}
          phoneNumber={this.state.payload.phoneNumber}
          country={this.state.payload.country}
          countryHelper={this.state.countryHelper}
          currency={this.state.payload.currency}
          recipientType={this.state.payload.recipientType}
          bankDetails={this.state.bankDetails}
          clearBankDetails={this.clearBankDetails}
          handleSubmit={this.handleSubmit}
          loading={this.state.loading}
          success={this.state.success}
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
                  <Translate text={label}/>
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
          <Grid item xs={12}>
            <PersonalOrBusiness {...props}/>
          </Grid>
      )
      break;
    case(1):
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <CountrySelector
              onChange={props.handleChange}
              value={props.country}
              language={props.language}
            />
          </Grid>
          <Grid item xs={12}>
            <CurrencySelector
              onChange={props.handleChange}
              value={props.currency}
              country={props.country}
            />
          </Grid>
        </React.Fragment>
      )
      break;
    case(2):
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <RecipientSelector 
              onChange={props.handleChange}
              value={props.recipientType}
              country={props.country}
              currency={props.currency}
            />
          </Grid>
          <Grid item xs={12}>
            <BankDetails
              recipientType={props.recipientType}
              onChange={props.handleBankDetailsChange}
              clearBankDetails={props.clearBankDetails}
              {...props.bankDetails}
            />
          </Grid>
        </React.Fragment>
      )
      break;
    default:
      return <div></div>
  }
}



class PersonalOrBusiness extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.a11yProps = this.a11yProps.bind(this);
  }

  handleTabChange(event, newValue){
    this.setState({value: newValue})
    this.props.handleChange(
      {target: {name: 'beneficiaryType', value: newValue === 0 ? 'PRIVATE' : 'BUSINESS' }}
    )
  }

  a11yProps(index) {
    return {
      id: `beneficiary-tab-${index}`,
      'aria-controls': `beneficiary-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <div>
        <AppBar position="static" elevation={0}>
          <Box style={{backgroundColor: 'white', dropShadow: 0}}>
            <Tabs 
              value={this.state.value} 
              onChange={this.handleTabChange} 
              aria-label="Beneficiary type"
              indicatorColor="primary"
              textColor="primary" 
              variant="fullWidth"
            >
              <Tab label={<Translate text="Personal"/>} {...this.a11yProps(0)} />
              <Tab label={<Translate text="Business"/>} {...this.a11yProps(1)} />
            </Tabs>
          </Box>
        </AppBar>
        <TabPanel name="personalDetails" value={this.state.value} index={0}>
          <PersonalDetails
              onChange={this.props.handleChange} 
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              email={this.props.email}
              phoneNumber={this.props.phoneNumber}
            />
        </TabPanel>
        <TabPanel name="businessDetails" value={this.state.value} index={1}>
          <BusinessDetails
              onChange={this.props.handleChange} 
              businessName={this.props.businessName}
              email={this.props.email}
              phoneNumber={this.props.phoneNumber}
            />
        </TabPanel>
      </div>
    );
  } 
}


class TabPanel extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={this.props.value !== this.props.index}
        id={`beneficiary-tabpanel-${this.props.index}`}
        aria-labelledby={`beneficiary-tab-${this.props.index}`}
      >
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
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
            Next
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
            Previous
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={props.handleNext}
              color="primary"
            >
            Next
            </Button>
        </React.Fragment>
      )
      break;
    case(2):
      return (
            <SubmitButton
              handleSubmit={props.handleSubmit}
              loading={props.loading}
              success={props.success}
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
  } else if (props.success){
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