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


export default class RecipientSelectorContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      recipients: []
    }
    this.loadRecipients = this.loadRecipients.bind(this);
  }

  componentDidMount(){
    this.loadRecipients()
  }

  componentDidUpdate(prevProps){
    if(prevProps.country !== this.props.country || prevProps.currency !== this.props.currency){
      this.loadRecipients()
    }
  }

  loadRecipients(){
    let availableRecipients = (
      currencies
       .filter(currency => currency.country_iso_3_char_code === this.props.country && currency.currency_iso_3_char_code === this.props.currency)
      .map(row => ({key: row.recipient_type, value: row.recipient_name}))
    )

    const result = [];
    const map = new Map();
    for (const recipient of availableRecipients) {
        if(!map.has(recipient.value)){
            map.set(recipient.value, true);    // set any value to Map
            result.push({
                key: recipient.key,
                value: recipient.value
            });
        }
    }
    const value = result[0] ? result[0].key : ''
    this.props.onChange({currentTarget: {name: 'bankDetailsType', value: value}})
    this.setState({recipients: result})
  }

  render(){
    return(
      <CurrencySelector
        value={this.props.value}
        onChange={this.props.onChange}
        recipients={this.state.recipients}
      />
    )}
}


function CurrencySelector(props){
  const classes = useStyles();

  if(props.recipients.length > 1){
    return (
      <Box className={classes.box}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}><Translate text="Bank details format"/></FormLabel>
          <RadioGroup aria-label="Bank details type" name="bankDetailsType" value={props.value} onChange={props.onChange}>
            {
              props.recipients.map(recipient => 
                <FormControlLabel
                  value={recipient.key}
                  key={recipient.key}
                  control={<Radio />}
                  label={recipient.value} 
                />
              )
            }
          </RadioGroup>
        </FormControl>
      </Box>
    )
  } else if (props.recipients.length === 1){
    return (
      <Box className={classes.box}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}><Translate text="Bank details format"/></FormLabel>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="body1" gutterBottom>
            {props.recipients[0].value}
          </Typography>
        </FormControl>
      </Box>
    )
  } else {
    return (
      <Box>
        <FormControl className={classes.box}>
          No recipient avialable
        </FormControl>
      </Box>
    )
  }
}