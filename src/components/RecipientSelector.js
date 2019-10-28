import React from 'react';
import currencies from '../currencies.js'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Translate } from 'react-translated';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));


export default class RecipientSelector extends React.Component{
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
    this.props.onChange({currentTarget: {name: 'recipientType', value: value}})
    this.setState({recipients: result})
  }

  render(){
    return(
      <FormControl component="fieldset" className={useStyles.formControl}>
        <FormLabel component="legend"><Translate text="Recipient type"/></FormLabel>
        <RadioGroup aria-label="recipient type" name="recipientType" value={this.props.value} onChange={this.props.onChange}>
          {
            this.state.recipients.map(recipient => 
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
    )}
}
