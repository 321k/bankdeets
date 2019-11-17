import React from "react";
import { Translate } from 'react-translated';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from '../styles.js'

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
    fetch('http://payspresso.io/api/v1/bank-codes?country=' + this.props.country)
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
      <React.Fragment>
        <InputLabel shrink={true} htmlFor={this.props.name}>{this.props.description}</InputLabel>
        <NativeSelect name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
          {
            bankCodes.map((item) => 
              <option value={item.code} key={item.code}>{item.title}</option>
            )
          }
        </NativeSelect>
      </React.Fragment>
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


class FormDropdown extends React.Component {

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


export function IbanRecipient (props){
  const classes = useStyles();
  const iban = props.iban ? props.iban : ''
  return(
    <FormControl className={classes.formControl}>
      <FormInput
          name="iban" value={iban} 
          description="IBAN" 
          onChange={props.onChange} 

      />
    </FormControl>
  );
}

export function SwiftRecipient (props){
  const classes = useStyles();
  const iban = props.iban ? props.iban : ''
  const swift_code = props.swift_code ? props.swift_code : ''
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput 
              name="iban" value={iban} 
              description="IBAN" 
              onChange={props.onChange} 

          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput
              name="swift_code" value={swift_code} 
              description="SWIFT Code" 
              onChange={props.onChange} 
          />
        </FormControl>
      </React.Fragment>
  );
}

export function SortCodeRecipient (props){
  const classes = useStyles();
  const sortCode = props.sortCode ? props.sortCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
              name="sortCode"
              placeholder="202020"
              value={sortCode}
              description={<Translate text="Sort code"/>}
              onChange={props.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput
              placeholder="12345678"
              description={<Translate text="Account number"/>}
              name="accountNumber"
              value={accountNumber}
              onChange={props.onChange}
          />
        </FormControl>
      </React.Fragment>
  );
}

export function SwedishLocalRecipient (props){
  const classes = useStyles();
  const clearingNumber = props.clearingNumber ? props.clearingNumber : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput 
            name="clearingNumber" 
            value={clearingNumber}
            description={<Translate text="Clearing number" />}
            onChange={props.onChange}  
            placeholder="1234"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
            name="accountNumber" 
            value={accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange}  
            placeholder="1234567"
        />
      </FormControl>
    </React.Fragment> 
  );
}

export function AbaRecipient (props){
  const classes = useStyles();
  const abartn = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const accountType = props.accountType ? props.accountType : ''
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput 
          className={classes.formInput}
          name="abartn" 
          value={abartn} 
          description="ACH routing number" 
          onChange={props.onChange}
          placeholder="111000025"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput 
          className={classes.formInput}
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}  
          placeholder="12345678"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          className={classes.formInput}
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}

export function AustralianLocalRecipient (props){
  const classes = useStyles();
  const bsbCode = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="bsbCode" value={bsbCode} description="BSB code" onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
      </React.Fragment>
  );
}

export function AustralianBusinessRecipient (props){
  const classes = useStyles();
  const bsbCode = props.abartn ? props.abartn : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const businessNumber = props.businessNumber ? props.businessNumber : '';
    
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput name="bsbCode" value={bsbCode} description="BSB code" onChange={props.onChange}  />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput name="businessNumber" value={businessNumber} description="Business number" onChange={props.onChange}  />
      </FormControl>
    </React.Fragment>
  );
}

export function CanadianRecipient (props){
  const classes = useStyles();
  const institutionNumber = props.institutionNumber ? props.institutionNumber : '';
  const transitNumber = props.transitNumber ? props.transitNumber : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const accountType = props.accountType ? props.accountType : '';
    
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="institutionNumber"
          value={institutionNumber}
          description={<Translate text="Institution number"/>} 
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="transitNumber"
          value={transitNumber}
          description={<Translate text="Transit number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown
          name="accountType"
          value={accountType}
          description={<Translate text="Account type"/>}
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}

export function PolishLocalRecipient (props){
  const classes = useStyles();  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bic = props.bic ? props.bic : '';
  return(
      <React.Fragment>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="bic" value={bic} description={<Translate text="BIC (optional)"/>} onChange={props.onChange}  />
      </React.Fragment>
  );
}

export function HungarianLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
    <FormControl className={classes.formControl}>
      <FormInput
        name="accountNumber"
        value={accountNumber}
        description={<Translate text="Account number"/>}
        onChange={props.onChange}  
      />
    </FormControl>
  );
}

export function IndianRecipient (props){
  const classes = useStyles();
  const ifscCode = props.ifscCode ? props.ifscCode : '';
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <React.Fragment>
          <FormInput
            name="ifscCode"
            value={ifscCode}
            description="IFSC code"
            onChange={props.onChange}  />
          <FormInput
            name="accountNumber"
            value={accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange}  />
      </React.Fragment>
  );
}

export function SingaporeanRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <React.Fragment>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <GetBankCode country="SG" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </React.Fragment>
  );
}

export function HongkongRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <React.Fragment>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}  />
        <GetBankCode country="HK" name="bankCode" onChange={props.onChange} value={bankCode}/>
      </React.Fragment>
  );
}

export function NewzealandRecipient (props) {
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  return(
      <FormInput
        name="accountNumber"
        value={accountNumber}
        description={<Translate text="Account number"/>}
        onChange={props.onChange}
      />
  );
}

export function CzechLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  return(
      <React.Fragment>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
          <FormInput name="bankCode" value={bankCode} description="Bank code" onChange={props.onChange}  />
      </React.Fragment>
  );
}

export function BangladeshRecipient (props){
  const classes = useStyles();
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput
            default={props.default}
            name="accountNumber"
            value={props.accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange} 
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="BD"
            name="bankCode"
            description={<Translate text="Bank code"/>}
            onChange={props.onChange}
            value={bankCode}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="BD"
            name="branchCode"
            description={<Translate text="Branch code"/>}
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
          />
        </FormControl>
      </React.Fragment>
  );
}

export function ChineseCardRecipient (props){
  const classes = useStyles();
  const cardNumber = props.cardNumber ? props.cardNumber : '';
  return(
    <FormControl className={classes.formControl}>
      <FormInput name="cardNumber" value={cardNumber} description="UnionPay card number" onChange={props.onChange}  />
    </FormControl>
  );
}

export function VietnamEarthportRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';

  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="VN"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBranchCode
          country="VN"
          name="branchCode"
          description={<Translate text="Branch code"/>}
          onChange={props.onChange}
          value={branchCode}
          bankCode={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function SwissLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="branchCode"
          value={branchCode}
          description={<Translate text="Branch code"/>}
          onChange={props.onChange}  
        />
      </FormControl>
    </React.Fragment>
  );
}

export function MalaysianLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="MY"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function ArgentinaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const taxId = props.taxId ? props.taxId : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput name="taxId" value={taxId} description={<Translate text="Tax ID"/>} onChange={props.onChange}  />
      </FormControl>
    </React.Fragment>
  );
}

export function BrazilRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const cpf = props.cpf ? props.cpf : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormInput name="cpf" value={cpf} description={<Translate text="Tax registration number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="BR"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="BR"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description="Account type"
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
          />
        </FormControl>
      </React.Fragment>
  );
}

export function ChileRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const rut = props.rut ? props.rut : '';
  
  return(
    <React.Fragment>  
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="rut"
          value={rut}
          description={<Translate text="Rol Único Tributario"/>}
          onChange={props.onChange}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="CL"
          name="bankCode"
          onChange={props.onChange}
          value={bankCode}
          description={<Translate text="Bank code"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBranchCode
          country="CL"
          name="branchCode"
          onChange={props.onChange}
          value={branchCode}
          bankCode={bankCode}
          description={<Translate text="Branch code"/>}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="accountType"
          value={accountType}
          description={<Translate text="Account type"/>}
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}, {'key': 'CUENTA_VISTA', 'value': 'Cuenta vista'}]} 
        />
      </FormControl>
    </React.Fragment>
  );
}

export function ThailandRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="TH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function EgyptLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="EG"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function GhanaLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="GH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function KenyaLocalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="KE"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function MexicanRecipient (props){
  const classes = useStyles();
  const clabe = props.clabe ? props.clabe : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="clabe"
          value={clabe}
          description={<Translate text="Clabe"/>}
          onChange={props.onChange} 
        />
      </FormControl>
    </React.Fragment>
  );
}

export function IndonesianRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="ID"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function JapaneseRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  const accountType = props.accountType ? props.accountType : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="JP"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="JP"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormDropdown 
            name="accountType"
            value={accountType}
            description="Account type"
            onChange={props.onChange}
            items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'CURRENT', 'value': 'Current account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
          />
        </FormControl>
      </React.Fragment>
  );
}


export function SriLankaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const branchCode = props.branchCode ? props.branchCode : '';
  
  return(
      <React.Fragment>
        <FormControl className={classes.formControl}>
          <FormInput name="accountNumber" value={accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBankCode
            country="JP"
            name="bankCode"
            onChange={props.onChange}
            value={bankCode}
            description={<Translate text="Bank code"/>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <GetBranchCode
            country="JP"
            name="branchCode"
            onChange={props.onChange}
            value={branchCode}
            bankCode={bankCode}
            description={<Translate text="Branch code"/>}
          />
        </FormControl>
      </React.Fragment>
  );
}


export function MoroccoRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="MA"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}


export function NigeriaRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="NG"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}

export function NepalRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="NP"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}



export function PeruRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  const accountType = props.accountType ? props.accountType : '';
  const idDocumentType = props.idDocumentType ? idDocumentType : '';
  const idDocumentNumber = props.idDocumentNumber ? idDocumentNumber : '';
  const phoneNumber = props.phoneNumber ? phoneNumber : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="PE"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormDropdown 
          name="idDocumentType"
          value={idDocumentType}
          description={<Translate text="ID document type"/>}
          onChange={props.onChange}
          items={[
            {'key': 'DNI', 'value': 'National Identity Document'},
            {'key': 'RUC', 'value': 'Tax ID number (RUC)'},
            {'key': 'C_EXT', 'value': 'Carnet de Extranjería'},
            {'key': 'PASSP', 'value': 'Passport'}
          ]} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="idDocumentNumber"
          value={idDocumentNumber}
          description={<Translate text="ID document number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormInput
          name="phoneNumber"
          value={phoneNumber}
          description={<Translate text="Phone number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
    </React.Fragment>
  );
}


export function PhilippinesRecipient (props){
  const classes = useStyles();
  const accountNumber = props.accountNumber ? props.accountNumber : '';
  const bankCode = props.bankCode ? props.bankCode : '';
  
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <FormInput
          name="accountNumber"
          value={accountNumber}
          description={<Translate text="Account number"/>}
          onChange={props.onChange} 
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <GetBankCode
          country="PH"
          name="bankCode"
          description={<Translate text="Bank code"/>}
          onChange={props.onChange}
          value={bankCode}
        />
      </FormControl>
    </React.Fragment>
  );
}



export function NotAvaialableRecipient(props){
  const classes = useStyles();
  return(
    <FormControl className={classes.formControl}>
      This recipient type is not yet avaialble.
    </FormControl>
  );
}

