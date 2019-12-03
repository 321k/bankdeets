import React from 'react';
import PersonalDetails from '../components/PersonalDetails.js'
import BusinessDetails from '../components/BusinessDetails.js'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Translate } from 'react-translated';
import useStyles from '../styles.js'


export default class PersonalOrBusinessContainer extends React.Component {
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
      {target: {name: 'legalType', value: newValue === 0 ? 'PRIVATE' : 'BUSINESS' }}
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
      <PersonalOrBusiness
        value={this.state.value}
        handleTabChange={this.handleTabChange}
        a11yProps={this.a11yProps}
        {...this.props}

      />
    );
  } 
}


function PersonalOrBusiness (props){
  const classes = useStyles();

  return(
    <React.Fragment>
        <AppBar position="static" elevation={0}>
          <Box style={{backgroundColor: 'white', dropShadow: 0}}>
            <Tabs 
              value={props.value} 
              onChange={props.handleTabChange} 
              aria-label="Beneficiary type"
              indicatorColor="primary"
              textColor="primary" 
              variant="fullWidth"
            >
              <Tab label={<Translate text="Personal"/>} {...props.a11yProps(0)} />
              <Tab label={<Translate text="Business"/>} {...props.a11yProps(1)} />
            </Tabs>
          </Box>
        </AppBar>
        <TabPanel name="personalDetails" value={props.value} index={0} className={classes.tabPanel}>
          <PersonalDetails
            onChange={props.handleChange} 
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            phoneNumber={props.phoneNumber}
          />
        </TabPanel>
        <TabPanel name="businessDetails" value={props.value} index={1} className={classes.tabPanel}>
          <BusinessDetails
            onChange={props.handleChange} 
            businessName={props.businessName}
            email={props.email}
            phoneNumber={props.phoneNumber}
          />
        </TabPanel>
      </React.Fragment>
  )
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

