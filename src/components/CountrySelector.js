import React from 'react';
import Select from 'react-select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Translate } from 'react-translated';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    margin: theme.spacing(2)
  },
}));


export default class CountriesDropdown extends React.Component{
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
    return(
      <div>
        <FormLabel className={useStyles.root} component="legend"><Translate text="Country"/></FormLabel>
        <Select
          optionClassName="needsclick"
          onBlur={event => event.preventDefault()}
          name='country'
          value={this.props.value}
          onChange={this.props.onChange}
          options={
            this.state.items.map((item) => 
              ({
                'value': item.alpha3Code,
                'label': item.name
              }) 
            )
          }
        />
      </div>
    )
  }
}