import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import BankDeetsStepper from '../src/stepper/BankDeetsStepper.js'
import BankDeets from '../src/components/BankDeets.js'

export default {
  title: 'Welcome',
  component: Welcome
}

export const BankDeetsStepperContainer = () => (
  <BankDeets language='en' render={props => <BankDeetsStepper {...props}/>} />
)


BankDeetsStepperContainer.story = {
  name: 'BankDeets'
}