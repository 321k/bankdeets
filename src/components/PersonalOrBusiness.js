
import React from 'react';
import PersonalDetails from './PersonalDetails.js'
import BusinessDetails from './BusinessDetails.js'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Translate } from 'react-translated';


export default class PersonalOrBusiness extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.a11yProps = this.a11yProps.bind(this);
  }

  handleTabChange(event, newValue){
    this.setState({value: newValue})
    this.props.handleChange(
      {target: {name: 'beneficiaryType', value: newValue === 0 ? 'PRIVATE' : 'BUSINESS' }}
    )
  }

  a11yProps(index) {
    return {
      id: `beneficiary-tab-${index}`,
      'aria-controls': `beneficiary-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static" elevation={0}>
          <Box style={{backgroundColor: 'white', dropShadow: 0}}>
            <Tabs 
              value={this.state.value} 
              onChange={this.handleTabChange} 
              aria-label="Beneficiary type"
              indicatorColor="primary"
              textColor="primary" 
              variant="fullWidth"
            >
              <Tab label={<Translate text="Personal"/>} {...this.a11yProps(0)} />
              <Tab label={<Translate text="Business"/>} {...this.a11yProps(1)} />
            </Tabs>
          </Box>
        </AppBar>
        <TabPanel name="personalDetails" value={this.state.value} index={0}>
          <PersonalDetails
              onChange={this.props.handleChange} 
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              email={this.props.email}
              phoneNumber={this.props.phoneNumber}
            />
        </TabPanel>
        <TabPanel name="businessDetails" value={this.state.value} index={1}>
          <BusinessDetails
              onChange={this.props.handleChange} 
              businessName={this.props.businessName}
              email={this.props.email}
              phoneNumber={this.props.phoneNumber}
            />
        </TabPanel>
      </React.Fragment>
    );
  } 
}


class TabPanel extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={this.props.value !== this.props.index}
        id={`beneficiary-tabpanel-${this.props.index}`}
        aria-labelledby={`beneficiary-tab-${this.props.index}`}
      >
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}

