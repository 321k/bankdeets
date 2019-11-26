import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

export default class FormDropdown extends React.Component {

  componentDidMount(){
    let event = {}
    event.currentTarget = {name: this.props.name, value: this.props.items[0].key}
    this.props.onChange(event)
  }

  render(){
    return(
      <React.Fragment>
        <InputLabel shrink={true} htmlFor={this.props.name}>{this.props.description}</InputLabel>
        <NativeSelect id={this.props.name} name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
          {
            this.props.items.map((item) => 
              <option value={item.key} key={item.key}>{item.value}</option>
            )
          }
        </NativeSelect>
      </React.Fragment>
    );
  }
}
