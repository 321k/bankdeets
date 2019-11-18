import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormInput from './FormInput.js'


export default class GetBranchCode extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      success: false,
      loading: false,
      error: false,
      result: []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate(prevProps){
    if(prevProps.bankCode !== this.props.bankCode){
      this.fetchData()
    }
  }

  fetchData(){
    this.setState({loading: true})
    fetch('http://payspresso.io/api/v1/bank-codes?country=' + this.props.country + '&bankCode=' + this.props.bankCode)
    .then(res => res.json())
    .then(
      (res) => {
        this.setState({success: true, loading: false, errror: false, result: res.values});
        if(res.values && res.values.length > 0){
          this.props.onChange({target: {name: this.props.name, value: res.values[0].code}}) 
        }
      },
      (error) => {
        this.setState({success: false, loading: false, error: true, error})
      }
    )
  }

  render(){
    const branchCode = Array.isArray(this.state.result) ? this.state.result : []

    if(branchCode.length > 0){
      return(
        <React.Fragment>
          <InputLabel shrink={true} htmlFor={this.props.name}>{this.props.description}</InputLabel>
          <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
            {
              branchCode.map((item) => 
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
          id="branchCode"
          description="Bank code"
          onChange={this.props.onChange} 
        />
      )
    }
    
  }
}