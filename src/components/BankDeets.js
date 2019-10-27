import React from 'react';
import CountrySelector from './CountrySelector.js'
import CurrencySelector from './CurrencySelector.js'
import RecipientSelector from './RecipientSelector.js';
import PersonalDetails from './PersonalDetails.js'
import BankDetails from './BankDetails.js'
import { Provider, Translate, Translator } from 'react-translated';
import UserContext, { ConfigProvider} from "../userContext.js";
import translation from '../translation.js';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LanguageSelector from './LanguageSelector.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column'
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
}));



export default function BankDeetsConfig(props){
  return (
    <ConfigProvider>
      <BankDeetsContainer {...props}/>
    </ConfigProvider>
  )
}

class BankDeetsContainer extends React.Component {
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
        phoneNumber: ''
      },
      bankDetails: {test: 'test'},
      countryHelper: {value: 'USA', label: 'United States of America'},
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
    const target = event.target ? event.target : event.currentTarget
    const name = target.name ? target.name : target.id
    let bankDetails = this.state.bankDetails
    bankDetails[name] = target.value
    this.setState({
      bankDetails: bankDetails
    })
  }

  clearBankDetails(){
    this.setState({
      bankDetails: {}
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
          language: this.context.language
        })
      })
      .then(
        res => {
          if(res.ok){
            var section = {currentTarget: {value: 'success'}};
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
      <BankDeets
        language={this.context.language}
        setLanguage={this.context.setLanguage}
        translation={translation}
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
    );
  }
}


// Context assignment based on this article
// https://reactjs.org/docs/context.html#contextconsumer
BankDeetsContainer.contextType = UserContext;

function BankDeets(props){
  const classes = useStyles();

  return(
    <Provider language={props.language} translation={props.translation}>
      <CssBaseline />
      <Container maxWidth="sm">
          <Grid container spacing={3} alignItems="center" justify="flex-end">
            <Grid item>
              <LanguageSelector language={props.language} setLanguage={props.setLanguage}/>
            </Grid>
          </Grid>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12}>
            <h2><Translate text="Personal details"/></h2>
            <PersonalDetails
              onChange={props.handleChange} 
              firstName={props.firstName}
              lastName={props.lastName}
              email={props.email}
              phoneNumber={props.phoneNumber}
            />
          </Grid>
          <Grid item xs={10} >
            <h2><Translate text="Country and currency"/></h2>
              <CountrySelector
                onChange={props.handleCountryChange}
                value={props.countryHelper}
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
          <Grid item xs={12}>
      
            <RecipientSelector 
              onChange={props.handleChange}
              value={props.recipientType}
              country={props.country}
              currency={props.currency}
            />
          </Grid>

          <Grid item xs={12}>
            <h2><Translate text="Bank details"/></h2>
            <BankDetails
              recipientType={props.recipientType}
              onChange={props.handleBankDetailsChange}
              clearBankDetails={props.clearBankDetails}
              {...props.bankDetails}
            />
          </Grid>
          
          <Grid item xs={12}>
            <SubmitButton
              handleSubmit={props.handleSubmit}
              loading={props.loading}
              success={props.success}
            />
          </Grid>
        </Grid>
      </Container>
  </Provider>
  )
}

function SubmitButton(props){
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.success,
  });

  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        className={buttonClassname}
        onClick={props.handleSubmit}
        color="primary"
        disabled={props.loading}
      >
        {props.success ? <Translate text="Thank you"/> : <Translate text="Submit"/>}
      </Button>
      {props.loading ? <CircularProgress size={24} className={classes.buttonProgress}/> : ''}
    </div>
  )
}