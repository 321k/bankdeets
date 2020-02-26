import React from 'react';
import TextField from '@material-ui/core/TextField'

import { Button } from '@storybook/react/demo'

import {
  SwiftRecipient,
  SingaporeanRecipient,
  NotAvaialableRecipient
} from '../src/bankdetails/BankDetails.js'

export default {
  title: 'Recipients',
  component: Button
}

export const NotAvaialableRecipientContainer = () => <NotAvaialableRecipient/>

NotAvaialableRecipientContainer.story = {
  name: 'Not available'
}

export const SwiftRecipientContainer = () => <SwiftRecipient />

SwiftRecipientContainer.story = {
  name: 'SWIFT'
}

export const SingaporeanRecipientContainer = () => <SingaporeanRecipient />

SingaporeanRecipientContainer.story = {
  name: 'Singapore'
}