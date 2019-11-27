import React from 'react';
import currencies from '../currencies.js'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Translate } from 'react-translated';
import useStyles from '../styles.js'


export default class CurrencySelector extends React.Component{
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
        <FormControl component="fieldset" className={useStyles.formControl}>

          <FormLabel component="legend"><Translate text="Currency"/></FormLabel>
          <RadioGroup aria-label="currency" name="currency" value={this.props.value} onChange={this.props.onChange}>
            {
              this.state.currencies.map(currency => 
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
    )
  }
}


