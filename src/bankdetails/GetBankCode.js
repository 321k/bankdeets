import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormInput from '../components/FormInput.js'


export default class GetBankCode extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      success: false,
      loading: false,
      error: false,
      result: []
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch('https://payspresso.io/api/v1/bank-codes?country=' + this.props.country)
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({success: true, loading: false, errror: false, result: res.values});
        this.props.onChange({target: {name: this.props.name, value: res.values[0].code}});
      },
      (error) => {
        this.setState({success: false, loading: false, error: true, error})
      }
    )
  }

  render(){
    if (Array.isArray(this.state.result)){
      return(
        <React.Fragment>
          <InputLabel shrink={true} htmlFor={this.props.name}>{this.props.description}</InputLabel>
          <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
            {
              this.state.result.map((item) => 
                <option value={item.code} key={item.code}>{item.title}</option>
              )
            }
          </NativeSelect>
        </React.Fragment>
      )
    } else {
      return (
        <FormInput
          value={this.props.value}
          name={this.props.name}
          id="bankCode"
          description="Branch code"
          onChange={this.props.onChange} 
        />
      )
    }
  }
}