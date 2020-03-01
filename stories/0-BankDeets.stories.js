import React from 'react'
import { Welcome } from '@storybook/react/demo'
import BankDeetsStepper from '../src/stepper/BankDeetsStepper.js'
import BankDeets from '../src/components/BankDeets.js'

export default {
  title: 'Main component',
  component: Welcome
}

export const BankDeetsStepperContainer = () => (
  <BankDeets language='en' render={props => <BankDeetsStepper {...props}/>} />
)


BankDeetsStepperContainer.story = {
  name: 'BankDeets'
}
