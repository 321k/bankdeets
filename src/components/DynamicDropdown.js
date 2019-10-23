import React from 'react';
import Select from 'react-select';

export default class DynamicDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.formatSelectedValue = this.formatSelectedValue.bind(this);
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });

            // First value as selected
            if (result.length !== 0){
                if(typeof(this.props.value)==='undefined'){
                    const newVal = {value: result[0].key}
                    const actionMeta = {name: this.props.name}
                    this.props.onChange(newVal, actionMeta);
                } else {
                    const newVal = {value: this.props.value}
                    const actionMeta = {name: this.props.name}
                    this.props.onChange(newVal, actionMeta);
                }                
            }
                
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.depends_on !== prevProps.depends_on) {
            fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                        error: undefined
                    });

                    // First value as selected
                    if (result.length !== 0){
                        const newVal = {value: result[0].key}
                        const actionMeta = {name: this.props.name}
                        this.props.onChange(newVal, actionMeta);
                    } else {
                        const newVal = {value: this.props.value}
                        const actionMeta = {name: this.props.name}
                        this.props.onChange(newVal, actionMeta);
                    }                
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                    console.log(error);
                }
            );
        }
    }

    // Values need to be massaged to match the component
    formatSelectedValue (items, value) {
        var newSelectedValue = items.filter(function(i) {
            return i.key === value;
        });
        
        if(newSelectedValue.length > 0 ){
            newSelectedValue = newSelectedValue[0];
            newSelectedValue = {'value': newSelectedValue.key, 'label': newSelectedValue.value};
            return newSelectedValue;
        } else {
            return {'value': '', 'label': ''};
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.description}</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        id={this.props.id} disabled 
                        value={"Failed to load."} />
                </div>
                
            );
        } else if (!isLoaded){
            return <div>Loading...</div>;
        } else if (items.length>1) {
            const selectedValue = this.formatSelectedValue(this.state.items, this.props.value);
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.description}</label>
                    <Select
                        optionClassName="needsclick"
                        onBlur={event => event.preventDefault()}
                        name={this.props.name}
                        value={selectedValue}
                        onChange={this.props.onChange}
                        options={
                           items.map((item) => 
                                ({
                                    'value': item.key,
                                    'label': item.value
                                }) 
                            )
                        }
                    />
                </div>
            );
        } else if (items.length === 1) {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.name}</label>
                    <input 
                        disabled
                        value={items[0].value}
                        onChange={this.props.onChange}
                        className="form-control" 
                    />
               </div>
            ) ;
        } else {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id}>{this.props.description}</label>
                    <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        id={this.props.id} disabled 
                        value={"No data available."} 
                    />
                </div>
            );
        }
    }
}