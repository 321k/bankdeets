import React from 'react';
import CountrySelector from './CountrySelector.js'
import CurrencySelector from './CurrencySelector.js'
import RecipientSelector from './RecipientSelector.js';
import PersonalDetails from './PersonalDetails.js'
import BankDetails from './BankDetails.js'
import { Provider, Translate, Translator } from 'react-translated';
import UserContext from "../userContext.js";
import translation from '../translation.js';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import LanguageSelector from './LanguageSelector.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import UserContext, { ConfigProvider}  from "./configContext.jsx";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    margin: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  }
}));



export default class BankDeetsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      payload: {country: 'USA', currency: 'USD', recipientType: 'ABA'},
      bankDetails: {test: 'test'},
      countryHelper: {value: 'USA', label: 'United States of America'}
    }
    this.handleReactSelectChange = this.handleReactSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBankDetailsChange = this.handleBankDetailsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearBankDetails = this.clearBankDetails.bind(this);
  }

  handleReactSelectChange (newVal, actionMeta) {
    let name = actionMeta.name
    let payload = this.state.payload;
    payload[name] = newVal.value;
    this.setState({
      payload: payload,
      [name]: newVal
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

  handleSubmit(){
    console.log('submitting')
    const x = {...this.state.payload, ...this.state.bankDetails}
    console.log(x)
  }

  render () {
    return (
      <ConfigProvider>
        <BankDeets
          language={this.context.language}
          setLanguage={this.context.setLanguage}
          translation={translation}
          handleChange={this.handleChange}
          handleReactSelectChange={this.handleReactSelectChange}
          handleBankDetailsChange={this.handleBankDetailsChange}
          country={this.state.payload.country}
          countryHelper={this.state.countryHelper}
          currency={this.state.payload.currency}
          recipientType={this.state.payload.recipientType}
          bankDetails={this.state.bankDetails}
          clearBankDetails={this.clearBankDetails}
          handleSubmit={this.handleSubmit}
        />
      </ConfigProvider>
    );
  }
}


// Context assignment based on this article
// https://reactjs.org/docs/context.html#contextconsumer
BankDeetsContainer.contextType = UserContext;

function BankDeets(props){
  return(
    <Provider language={props.language} translation={props.translation}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper className={useStyles().paper}>
          <Grid container spacing={3} alignItems="center" justify="flex-end">
            <Grid item xs={4}>
              <LanguageSelector language={props.language} setLanguage={props.setLanguage}/>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={12}>
              <h2><Translate text="Personal details"/></h2>
              <PersonalDetails onChange={props.handleChange} />
            </Grid>
            <Grid item xs={10} >
              <h2><Translate text="Country and currency"/></h2>
                <CountrySelector
                  onChange={props.handleReactSelectChange}
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
              <Button variant="contained" onClick={props.handleSubmit}><Translate text="Submit"/></Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  </Provider>
  )
}