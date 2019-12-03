import React from 'react';
import currencies from '../currencies.js'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Translate } from 'react-translated';
import useStyles from '../styles.js'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class CurrencySelectorContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      currencies: []
    };
    this.loadCurrencies = this.loadCurrencies.bind(this);
  }

  componentDidMount(){
    this.loadCurrencies()
  }

  componentDidUpdate(prevProps){
    if( prevProps.country !== this.props.country ){
      this.loadCurrencies()  
    }
  }

  loadCurrencies(){
    let availableCurrencies = (
      currencies
      .filter(currency => currency.country_iso_3_char_code === this.props.country)
      .map(row => ({key: row.currency_iso_3_char_code, value: row.currency_name}))
    )

    const result = [];
    const map = new Map();
    for (const currency of availableCurrencies) {
        if(!map.has(currency.value)){
            map.set(currency.value, true);    // set any value to Map
            result.push({
                key: currency.key,
                value: currency.value
            });
        }
    }

    const value = result[0] ? result[0].key : ''

    this.props.onChange({currentTarget: {name: 'currency', value: value}})
    this.setState({currencies: result})
  }
    
  render(){
    return(
        <CurrencySelector
          currencies={this.state.currencies}
          value={this.props.value}
          onChange={this.props.onChange}
        />
    )
  }
}

function CurrencySelector (props){
  const classes = useStyles();

  if(props.currencies.length > 1){
    return (
      <Box className={classes.box}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}><Translate text="Currency"/></FormLabel>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup aria-label="currency" name="currency" value={props.value} onChange={props.onChange}>
            {
              props.currencies.map(currency => 
                <FormControlLabel
                  value={currency.key}
                  key={currency.key}
                  control={<Radio />}
                  label={currency.value}
                />
              )
            }
          </RadioGroup>
        </FormControl>
      </Box>
    )
  } else if (props.currencies.length === 1){
    return (
      <Box className={classes.box}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}><Translate text="Currency"/></FormLabel>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="body1" gutterBottom>
            {props.currencies[0].value} ({props.currencies[0].key})
          </Typography>
        </FormControl>
      </Box>
    )
  } else {
    return (
      <Box className={classes.box}>
        <FormControl component="fieldset" className={classes.formControl}>
          <div>No currency available</div>
        </FormControl>
      </Box>
    )
  }
}