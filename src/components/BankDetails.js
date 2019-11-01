import React from "react";
import Cleave from "cleave.js/react";
import { Translate } from 'react-translated';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


const sanboxApiToken = '157bca0a-e206-4593-af98-eb816d6eca11'

export default class BankDetails extends React.Component{
    constructor(props){
        super(props);
        this.renderBankDetails = this.renderBankDetails.bind(this);
    }

    componentDidUpdate(prevProps){
      if(prevProps.recipientType !== this.props.recipientType){
        this.props.clearBankDetails()
      }
    }

    renderBankDetails(recipientType){
        switch(recipientType){
            case 'IBAN':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange}/>;
                break;
            case 'SWIFT_CODE':
                return <SwiftRecipient iban={this.props.iban}  swift_code={this.props.swift_code} onChange={this.props.onChange}/>;
                break;
            case 'SORT_CODE':
                return <SortCodeRecipient sortCode={this.props.sortCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'SWEDEN_LOCAL':
                return <SwedishLocalRecipient clearingNumber={this.props.clearingNumber} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'ABA':
                return <AbaRecipient accountType={this.props.accountType} abartn={this.props.abartn} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'AUSTRALIAN':
                return <AustralianLocalRecipient bsbCode={this.props.bsbCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'AUSTRALIAN_BUSINESS':
                return <AustralianBusinessRecipient bsbCode={this.props.bsbCode} accountNumber={this.props.accountNumber} businessNumber={this.props.businessNumber} onChange={this.props.onChange}/>;
                break;
            case 'CANADIAN':
                return <CanadianRecipient institutionNumber={this.props.institutionNumber} transitNumber={this.props.transitNumber} accountNumber={this.props.accountNumber} accountType={this.props.accountType} onChange={this.props.onChange}/>;
                break;
            case 'POLISH':
                return <PolishLocalRecipient accountNumber={this.props.accountNumber} bic={this.props.bic} onChange={this.props.onChange}/>;
                break;
            case 'HUNGARIAN':
                return <HungarianLocalRecipient accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'INDIAN':
                return <IndianRecipient ifscCode={this.props.ifscCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'SINGAPORE':
                return <SingaporeanRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange}/>;
                break;
            case 'HONGKONG':
                return <HongkongRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange}/>;
                break;
            case 'NEWZEALAND':
                return <NewzealandRecipient accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'CZECH':
                return <CzechLocalRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange}/>;
                break;
            case 'BANGLADESH':
                return <BangladeshRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange} />;
                break;
            case 'CHINESE_CARD':
                return <ChineseCardRecipient cardNumber={this.props.cardNumber} onChange={this.props.onChange}/>;
                break;
            case 'VIETNAME_EARTHPORT':
                return <VietnamEarthportRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange}/>;
                break;
            case 'SWISS':
                return <SwissLocalRecipient accountNumber={this.props.accountNumber} branchCode={this.props.branchCode} onChange={this.props.onChange}/>;
                break;
            case 'MALAYSIAN':
                return <MalaysianLocalRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange}/>;
                break;
            case 'ISRAELI_LOCAL':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange}/>;
                break;
            case 'TURKISH_EARTHPORT':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange}/>;
                break;
            case 'EMIRATES':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange}/>;
                break;
            case 'ARGENTINA':
                return <ArgentinaRecipient accountNumber={this.props.accountNumber} taxId={this.props.taxId} onChange={this.props.onChange}/>;
                break;
            case 'BRAZIL':
                return <BrazilRecipient accountNumber={this.props.accountNumber} cpf={this.props.cpf} accountType={this.props.accountType} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange}/>;
                break;
            case 'CHILE':
                return <ChileRecipient accountNumber={this.props.accountNumber} rut={this.props.rut} accountType={this.props.accountType} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange}/>;
                break;
            default:  
                return <NotAvaialableRecipient  onChange={this.props.onChange}/>  ;
        }
    }

    render(){
        return (
            this.renderBankDetails(this.props.recipientType)
        );
    }
}


class GetBankCode extends React.Component{
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
    fetch('https://api.sandbox.transferwise.tech/v1/banks?country=' + this.props.country, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': 'Bearer ' + sanboxApiToken
      }
    })
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
    const bankCodes = Array.isArray(this.state.result) ? this.state.result : []
    return(
      <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
        {
          bankCodes.map((item) => 
            <option value={item.code} key={item.code}>{item.title}</option>
          )
        }
      </NativeSelect>
    )
  }
}


class GetBranchCode extends React.Component{
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
      fetch('https://api.sandbox.transferwise.tech/v1/bank-branches?country=' + this.props.country + '&bankCode=' + this.props.bankCode, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain',
          'Authorization': 'Bearer ' + sanboxApiToken
        }
    })
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
        <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
          {
            branchCode.map((item) => 
              <option value={item.code} key={item.code}>{item.title}</option>
            )
          }
        </NativeSelect>
      )  
    } else {
      return (
        <FormInput
          value={this.props.value}
          name={this.props.name}
          description="Bank code"
          onChange={this.props.onChange} 
        />
      )
    }
    
  }
}



function FormInput (props) {
    const classes = useStyles();
    return(
         <TextField
            id={props.name}
            label={props.description}
            className={classes.textField}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} 
            margin="normal"
            disabled={props.disable} 
          />
    );
}


export class OldDynamicDropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }

    componentDidMount(){
        fetch(this.props.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result,
                });

                // Initialize the value of the dropdown
                if (result.length !== 0){
                    const name = this.props.name
                    const defaultValue = {[name]: result[0].key}
                    this.props.default(defaultValue);
                }
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            }
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.depends_on !== prevProps.depends_on) {
            fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                    // Update the value of the dropdown
                    if (result.length !== 0){
                        const name = this.props.name
                        const defaultValue = {[name]: result[0].key}
                        this.props.default(defaultValue);
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                    console.log(error);
                }
            )
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <TextField
                  id={this.props.id}
                  label={this.props.description}
                  value={this.props.value}
                  onChange={this.props.onChange} 
                  margin="normal"
                />
                
            )
        } else if (!isLoaded){
            return <div>Loading...</div>
        } else if (items.length>=1) {
            return (
              <div>
                <label htmlFor={this.props.id}>{this.props.description}</label>
                <FormDropdown
                  name={this.props.description}
                  items={this.props.items}
                  value={this.props.value}
                />
              </div>
            );
        } else if (items.length === 1) {
            return (
              <div>
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input 
                    disabled
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className="form-control" 
                    name={this.props.name}
                    id={this.props.id}
                />
             </div>
            ) 
        } else {
            return (
                <div className="form-group">
                    No values found
                </div>
                )
        }
    }
}

class FormDropdown extends React.Component {

  componentDidMount(){
    let event = {}
    event.currentTarget = {name: this.props.name, value: this.props.items[0].key}
    this.props.onChange(event)
  }

  render(){
    return(
      <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
        {
          this.props.items.map((item) => 
            <option value={item.key} key={item.key}>{item.value}</option>
          )
        }
      </NativeSelect>
    );
  }
}


function IbanRecipient (props){
  const iban = props.iban ? props.iban : ''
  return(
    <div>
      <FormInput
          name="iban" value={iban} 
          description="IBAN" 
          onChange={props.onChange} 

      />
    </div>
  );
}

function SwiftRecipient (props){
  const iban = props.iban ? props.iban : ''
  const swift_code = props.swift_code ? props.swift_code : ''
  return(
      <div>
          <FormInput 
              name="iban" value={iban} 
              description="IBAN" 
              onChange={props.onChange} 

          />
          <FormInput
              name="swift_code" value={swift_code} 
              description="SWIFT Code" 
              onChange={props.onChange} 
          />
      </div>
  );
}

function SortCodeRecipient (props){
  const sortCode = props.sortCode ? props.sortCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <div>
          <div className="form-group">
              <label htmlFor="sortCode">{<Translate text="Sort code"/>}</label>
              <Cleave
                  placeholder="20-20-20"
                  options={{blocks: [2,2,2], delimiter: '-', numericOnly: true}}
                  name="sortCode" value={sortCode}
                  onChange={props.onChange}
                  className="form-control"
              />
          </div>

          <div className="form-group">
              <label htmlFor="accountNumber"><Translate text="Account number"/></label>
              <Cleave
                  placeholder="12345678"
                  options={{numericOnly: true, stripLeadingZeroes: false}}
                  name="accountNumber" value={accountNumber}
                  onChange={props.onChange}
                  className="form-control"
              />
          </div>
      </div>
  );
}

function SwedishLocalRecipient (props){
  const clearingNumber = props.clearingNumber ? props.clearingNumber : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <div>
        <FormInput 
            name="clearingNumber" value={clearingNumber}
            description={<Translate text="Swedish clearing number" />}
            onChange={props.onChange}  
            placeholder="1234"
        />
        <FormInput
            name="accountNumber" value={accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange}  
            placeholder="1234567"
        />
    </div>
  );
}

function AbaRecipient (props){
  const abartn = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const accountType = props.accountType ? props.accountType : ''
  return(
    <Grid container>
      <Grid item xs={12}>
        <FormInput 
            name="abartn" value={abartn} 
            description="ACH routing number" 
            onChange={props.onChange}
            placeholder="111000025"
        />
      </Grid>
      <Grid item xs={12}>
        <FormInput 
            name="accountNumber" value={accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange}  
            placeholder="12345678"
        />
      </Grid>
      <Grid item xs={12}>
        <FormDropdown 
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </Grid>
    </Grid>
  );
}

function AustralianLocalRecipient (props){
  const bsbCode = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  return(
      <Grid container>
        <Grid item xs={12}>
          <FormInput name="bsbCode" value={bsbCode} description="BSB code" onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </Grid>
      </Grid>
  );
}

function AustralianBusinessRecipient (props){
  const bsbCode = props.abartn ? props.abartn : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const businessNumber = props.businessNumber ? props.businessNumber : '';
    
  return(
    <Grid container>
      <Grid item xs={12}>
        <FormInput name="bsbCode" value={bsbCode} description="BSB code"  />
      </Grid>
      <Grid item xs={12}>
        <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
      </Grid>
      <Grid item xs={12}>
        <FormInput name="businessNumber" value={businessNumber} description="Business number" onChange={props.onChange}  />
      </Grid>
    </Grid>
  );
}

function CanadianRecipient (props){
  const institutionNumber = props.institutionNumber ? props.institutionNumber : '';
  const transitNumber = props.transitNumber ? props.transitNumber : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const accountType = props.accountType ? props.accountType : '';
    
  return(
      <Grid container>
        <Grid item xs={12}>
          <FormInput name="institutionNumber" value={institutionNumber} description={<Translate text="Institution number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormInput name="transitNumber" value={transitNumber} description={<Translate text="Transit number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormDropdown name="accountType" value={accountType} description={<Translate text="Account type"/>} onChange={props.onChange} items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} />
        </Grid>
      </Grid>
  );
}

function PolishLocalRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bic = props.bic ? props.bic : '';
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="bic" value={bic} description={<Translate text="BIC (optional)"/>} onChange={props.onChange}  />
      </div>
  );
}


function HungarianLocalRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <div>
      <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
    </div>
  );
}


function IndianRecipient (props){
  const ifscCode = props.ifscCode ? props.ifscCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <div>
          <FormInput name="ifscCode" value={ifscCode} description="IFSC code" onChange={props.onChange}  />
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
      </div>
  );
}

function SingaporeanRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <GetBankCode country="SG" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </div>
  );
}


function HongkongRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <div>
        <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        <GetBankCode country="HK" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </div>
  );
}


function NewzealandRecipient (props) {
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <div>
      <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
    </div>
  );
}

function CzechLocalRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="bankCode" value={bankCode} description="Bank code" onChange={props.onChange}  />
      </div>
  );
}

function BangladeshRecipient (props){
  const classes = useStyles();
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
      <Grid container>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <FormInput default={props.default} name="accountNumber" value={props.accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          </FormControl>
          <FormControl className={classes.formControl}>
            <GetBankCode country="BD" name="bankCode" onChange={props.onChange} value={bankCode}/>
          </FormControl>
          <FormControl className={classes.formControl}>
            <GetBranchCode country="BD" name="branchCode" onChange={props.onChange} value={branchCode} bankCode={bankCode}/>
          </FormControl>
        </Grid>
      </Grid>
  );
}

function ChineseCardRecipient (props){
  const cardNumber = props.cardNumber ? props.cardNumber : '';
  return(
      <div>
          <FormInput name="cardNumber" value={cardNumber} description="UnionPay card number" onChange={props.onChange}  />
      </div>
  );
}

function VietnamEarthportRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <GetBankCode country="VN" name="bankCode" onChange={props.onChange} value={bankCode}/>
          <GetBranchCode country="VN" name="branchCode" onChange={props.onChange} value={branchCode} bankCode={bankCode}/>
      </div>
  );
}

function SwissLocalRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="branchCode" value={branchCode} description={<Translate text="Branch code"/>} onChange={props.onChange}  />
      </div>
  );
}


function MalaysianLocalRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <GetBankCode country="MY" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </div>
  );
}


function ArgentinaRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const taxId = props.taxId ? props.taxId : '';
  
  return(
      <div>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="taxId" value={taxId} description={<Translate text="Tax ID"/>} onChange={props.onChange}  />
      </div>
  );
}


function BrazilRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const cpf = props.cpf ? props.cpf : '';
  
  return(
      <Grid container>
        <Grid item xs={12}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormInput name="cpf" value={cpf} description={<Translate text="Tax registration number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <GetBankCode country="BR" name="bankCode" onChange={props.onChange} value={bankCode}/>
        </Grid>
        <Grid item xs={12}>
          <GetBranchCode country="BR" name="branchCode" onChange={props.onChange} value={branchCode} bankCode={bankCode}/>
        </Grid>
        <Grid item xs={12}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description="Account type"
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
          />
        </Grid>
      </Grid>
  );
}


function ChileRecipient (props){
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const rut = props.rut ? props.rut : '';
  
  return(
      <Grid container>
        <Grid item xs={12}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <FormInput name="rut" value={rut} description={<Translate text="Rol Único Tributario"/>} onChange={props.onChange}  />
        </Grid>
        <Grid item xs={12}>
          <GetBankCode country="CL" name="bankCode" onChange={props.onChange} value={bankCode}/>
        </Grid>
        <Grid item xs={12}>
          <GetBranchCode country="CL" name="branchCode" onChange={props.onChange} value={branchCode} bankCode={bankCode}/>
        </Grid>
        <Grid item xs={12}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description={<Translate text="Account type"/>}
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}, {'key': 'CUENTA_VISTA', 'value': 'Cuenta vista'}]} 
          />
        </Grid>
      </Grid>
  );
}


function NotAvaialableRecipient(props){
    return(
        <div>
            This recipient type is not yet avaialble.
        </div>
    );
}

