import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles.js'
import PropTypes from 'prop-types';
import FormDropdown from './FormDropdown.js'
import Tooltip from '@material-ui/core/Tooltip';
import FormInput from './FormInput.js'

export default function Address (props){
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <Tooltip title="Go to previous step to edit">
          <TextField
            id="country"
            label={<Translate text='Country'/>}
            className={classes.textField}
            value={props.countryTwoCharCode}
            margin="normal"
            disabled={true}
          />
        </Tooltip>
      </FormControl>
      {['CA', 'US', 'BR', 'AU'].includes(props.countryTwoCharCode) ? <StateContainer onChange={props.onChange} addressState={props.addressState} countryTwoCharCode={props.countryTwoCharCode}/> : ''}
      <FormControl className={classes.formControl}>
        <TextField
          id="city"
          label={<Translate text='City'/>}
          className={classes.textField}
          value={props.city}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="postCode"
          label={<Translate text='Post code'/>}
          className={classes.textField}
          value={props.postCode}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="addressLine"
          label={<Translate text='Address'/>}
          className={classes.textField}
          value={props.addressLine}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
    </React.Fragment>
  )
}

Address.propTypes = {
  city: PropTypes.string,
  postCode: PropTypes.string,
  addressLine: PropTypes.string,
};


class StateContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      states: []
    }
    this.mapStates=this.mapStates.bind(this)
  }

  componentDidMount(){
    fetch('http://payspresso.io/api/v1/states/' + this.props.countryTwoCharCode)
    .then(res => res.json())
    .then(
      (result) => {
        const states = Array.isArray(result.values) ? result.values.map(item => this.mapStates(item)) : ''
        this.setState({states: states})
      },
      (error) => {
        console.log(error)
      })
  }

    mapStates(item){
      return {key: item.code, value: item.name}
    }

  render(){
    return (
      <State 
        onChange={this.props.onChange}
        states={this.state.states}
        addressState={this.props.addressState}
      />
    )
  }
}

function State (props){
  const classes = useStyles();
  const addressState = props.addressState ? props.addressState : '';

  if(Array.isArray(props.states) && props.states[0] !== undefined){
    return (
      <FormControl className={classes.formControl}>
        <FormDropdown
          name="addressState"
          value={addressState}
          description={<Translate text="State"/>}
          onChange={props.onChange}
          items={props.states}
        />
      </FormControl>
    )
  } else {
    return (
      <FormControl className={classes.formControl}>
        <FormInput 
          className={classes.formInput}
          name="addressState" 
          value={addressState} 
          description="State" 
          onChange={props.onChange}
          placeholder="TX"
        />
      </FormControl>
    )
  }  
}