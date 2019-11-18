import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Translate } from 'react-translated';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from '../styles.js'
import PropTypes from 'prop-types';


export default class CountriesDropdownContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        }
    );
  }

  render(){
    return <CountriesDropdown {...this.props} items={this.state.items}/>
  }
}


CountriesDropdownContainer.propTypes = {
  city: PropTypes.string,
  postCode: PropTypes.string,
  addressLine: PropTypes.string
};



function CountriesDropdown(props){
  const classes = useStyles();

  return(
      <FormControl className={classes.formControl}>
        <InputLabel shrink={true} htmlFor="age-native-simple"><Translate text="Country"/></InputLabel>
        <NativeSelect
          value={props.value} 
          onChange={props.onChange}
          inputProps={{
            name: 'country',
            id: 'country'
          }}
        >
          {
            props.items.map((item) => <option key={item.alpha3Code} value={item.alpha3Code}>{item.name}</option>)
          }
        </NativeSelect>
      </FormControl>
  )
}

