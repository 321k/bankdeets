import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormInput from '../components/FormInput.js'
import { Translate } from 'react-translated'
import useStyles from '../styles.js'
import FormDropdown from '../components/FormDropdown.js'

export default class PhilippinesMobileRecipientContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PhilippinesMobileRecipient
        accountNumber={this.props.accountNumber}
        bankCode = {this.props.bankCode}
        onChange={this.props.onChange}
      />
    )
  }
}

function PhilippinesMobileRecipient(props) {
  const classes = useStyles()
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const bankCode = props.bankCode ? props.bankCode : ''
  return (
    <FormControl className={classes.formControl}>
      <FormInput
        name='accountNumber'
        value={accountNumber}
        description={<Translate text='Account number'/>}
        onChange={props.onChange}
      />
      <FormControl className={classes.formControl}>
        <FormDropdown
          className={classes.formInput}
          name='bankCode'
          value={bankCode}
          description='E-money wallet'
          onChange={props.onChange}
          items={
            [
              { key: 'PAYMAYA', value: 'PayMaya' },
              { key: 'GCASH', value: 'GCash' }
            ]
          }
        />
      </FormControl>
    </FormControl>
  )
}
