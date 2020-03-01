import React from 'react'
import { Provider } from 'react-translated'
import translation from '../src/translation.js'
import { Button } from '@storybook/react/demo'

import {
  SwiftRecipient,
  SingaporeanRecipient,
  NotAvaialableRecipient
} from '../src/bankdetails/BankDetails.js'
import AbaRecipientContainer from '../src/bankdetails/AbaRecipient.js'
import IbanRecipientContainer from '../src/bankdetails/IbanRecipient.js'


export default {
  title: 'Recipients',
  component: Button
}

export const NotAvaialableRecipientStory = () => (
  <NotAvaialableRecipient/>
)

NotAvaialableRecipientStory.story = {
  name: 'Not available'
}

export const SwiftRecipientStory = () => <SwiftRecipient />

SwiftRecipientStory.story = {
  name: 'SWIFT'
}

export const SingaporeanRecipientStory = () => (
  <Provider language='en' translation={translation}>
    <SingaporeanRecipient />
  </Provider>
)

SingaporeanRecipientStory.story = {
  name: 'Singapore'
}

export const AbaRecipientStory = () => (
  <Provider language='en' translation={translation}>
    <AbaRecipientContainer onChange={ (e) => console.log(e) } />
  </Provider>
)

AbaRecipientStory.story = {
  name: 'Aba Recipient'
}

export const IbanRecipientStory = () => (
  <Provider language='en' translation={translation}>
    <IbanRecipientContainer/>
  </Provider>
)

IbanRecipientStory.story = {
  name: 'IBAN Recipient'
}
