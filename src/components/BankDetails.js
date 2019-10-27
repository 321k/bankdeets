import React from "react";
import Cleave from "cleave.js/react";
import { Provider, Translate, Translator } from 'react-translated';
import Select from '@material-ui/core/Select';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'SWIFT_CODE':
                return <SwiftRecipient iban={this.props.iban}  swift_code={this.props.swift_code} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'SORT_CODE':
                return <SortCodeRecipient sortCode={this.props.sortCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'BANKGIRO':
                return <SwedishLocalRecipient clearingNumber={this.props.clearingNumber} accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'ABA':
                return <AbaRecipient accountType={this.props.accountType} abartn={this.props.abartn} accountNumber={this.props.accountNumber} onChange={this.props.onChange}/>;
                break;
            case 'AUSTRALIAN':
                return <AustralianLocalRecipient bsbCode={this.props.bsbCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'AUSTRALIAN_BUSINESS':
                return <AustralianBusinessRecipient bsbCode={this.props.bsbCode} accountNumber={this.props.accountNumber} businessNumber={this.props.businessNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'CANADIAN':
                return <CanadianRecipient institutionNumber={this.props.institutionNumber} transitNumber={this.props.transitNumber} accountNumber={this.props.accountNumber} accountType={this.props.accountType} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'POLISH':
                return <PolishLocalRecipient iban={this.props.iban} bic={this.props.bic} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'HUNGARIAN':
                return <HungarianLocalRecipient accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'INDIAN':
                return <IndianRecipient ifscCode={this.props.ifscCode} accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'SINGAPORE':
                return <SingaporeanRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'HONGKONG':
                return <HongkongRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'NEWZEALAND':
                return <NewzealandRecipient accountNumber={this.props.accountNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'CZECH':
                return <CzechLocalRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'BANGLADESH':
                return <BangladeshRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange} default={this.props.default} bankCode={this.props.bankCode}/>;
                break;
            case 'CHINESE_CARD':
                return <ChineseCardRecipient cardNumber={this.props.cardNumber} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'VIETNAME_EARTHPORT':
                return <VietnamEarthportRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} branchCode={this.props.branchCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'SWISS':
                return <SwissLocalRecipient accountNumber={this.props.accountNumber} branchCode={this.props.branchCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'MALAYSIAN':
                return <MalaysianLocalRecipient accountNumber={this.props.accountNumber} bankCode={this.props.bankCode} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'ISRAELI_LOCAL':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            case 'TURKISH_EARTHPORT':
                return <IbanRecipient iban={this.props.iban} onChange={this.props.onChange} default={this.props.default}/>;
                break;
            default:  
                return <NotAvaialableRecipient  onChange={this.props.onChange} default={this.props.default}/>  ;
        }
    }

    render(){
        return (
            this.renderBankDetails(this.props.recipientType)
        );
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
  constructor(props){
    super(props); 
  }

  componentDidMount(){
    let event = {}
    event.currentTarget = {name: this.props.name, value: this.props.items[0].key}
    this.props.onChange(event)
  }

  render(){
    return(
      <Select name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
        {
          this.props.items.map((item) => 
            <MenuItem value={item.key} key={item.key}>{item.value}</MenuItem>
          )
        }
      </Select>
    );
  }
}


class IbanRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} 
                    name="iban" value={this.props.iban} 
                    description="IBAN" 
                    onChange={this.props.onChange} 

                />
            </div>
        );
    }
}

class SwiftRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      const iban = this.props.iban ? this.props.iban : ''
      const swift_code = this.props.swift_code ? this.props.swift_code : ''
      return(
          <div>
              <FormInput default={this.props.default} 
                  name="iban" value={iban} 
                  description="IBAN" 
                  onChange={this.props.onChange} 

              />
              <FormInput default={this.props.default} 
                  name="swift_code" value={swift_code} 
                  description="SWIFT Code" 
                  onChange={this.props.onChange} 
              />
          </div>
      );
    }
}

class SortCodeRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="sortCode">{<Translate text="Sort code"/>}</label>
                    <Cleave
                        placeholder="20-20-20"
                        options={{blocks: [2,2,2], delimiter: '-', numericOnly: true}}
                        name="sortCode" value={this.props.sortCode}
                        onChange={this.props.onChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="accountNumber"><Translate text="Account number"/></label>
                    <Cleave
                        placeholder="12345678"
                        options={{numericOnly: true, stripLeadingZeroes: false}}
                        name="accountNumber" value={this.props.accountNumber}
                        onChange={this.props.onChange}
                        className="form-control"
                    />
                </div>
            </div>
        );
    }
}

class SwedishLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput 
                    default={this.props.default} 
                    name="clearingNumber" value={this.props.clearingNumber} 
                    description={<Translate text="Swedish clearing number" />}
                    onChange={this.props.onChange}  
                    placeholder="1234"
                />
                <FormInput
                    default={this.props.default}
                    name="accountNumber" value={this.props.accountNumber}
                    description={<Translate text="Account number"/>}
                    onChange={this.props.onChange}  
                    placeholder="1234567"
                />
            </div>
        );
    }
}

function AbaRecipient (props){
  const abartn = props.abartn ? props.abartn : ''
  const accountNumber = props.accountNumber ? props.accountNumber : ''
  const accountType = props.accountType ? props.accountType : ''
  return(
    <div>
        <FormInput 
            name="abartn" value={abartn} 
            description="ACH routing number" 
            onChange={props.onChange}
            placeholder="111000025"
        />
        <FormInput 
            name="accountNumber" value={accountNumber}
            description={<Translate text="Account number"/>}
            onChange={props.onChange}  
            placeholder="12345678"
        />
        <FormDropdown 
          name="accountType"
          value={accountType}
          description="Account type"
          onChange={props.onChange}
          items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} 
        />
    </div>
  );
}

class AustralianLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="bsbCode" value={this.props.bsbCode} description="BSB code" onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}

class AustralianBusinessRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="bsbCode" value={this.props.bsbCode} description="BSB code"  />
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="businessNumber" value={this.props.businessNumber} description="Business number" onChange={this.props.onChange}  />
            </div>

        );
    }
}

class CanadianRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="institutionNumber" value={this.props.institutionNumber} description="Institution number" onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="transitNumber" value={this.props.transitNumber} description="Transit number" onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormDropdown default={this.props.default} name="accountType" value={this.props.accountType} description="Account type" onChange={this.props.onChange} items={[{'key': 'CHECKING', 'value': 'Checking account'}, {'key': 'SAVINGS', 'value': 'Savings account'}]} />
            </div>
        );
    }
}

class PolishLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="bic" value={this.props.bic} description={<Translate text="BIC (optional)"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}


function NotAvaialableRecipient(props){
    return(
        <div>
            This recipient type is not yet avaialble.
        </div>
    );
}

class HungarianLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}

class IndianRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="ifscCode" value={this.props.ifscCode} description="IFSC code" onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}

class SingaporeanRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const bankCodes = [
            {'key':'7931', 'value': 'Australia & New Zealand Banking Group Ltd'},
            {'key':'9999', 'value': 'BANK OF SINGAPORE LIMITED'},
            {'key':'7418', 'value': 'BNP Paribas'},
            {'key':'7047', 'value': 'Bangkok Bank Public Company Ltd'},
            {'key':'7065', 'value': 'Bank of America, NA'},
            {'key':'7083', 'value': 'Bank of China Limited (BOC)'},
            {'key':'7108', 'value': 'Bank of India'},
            {'key':'7986', 'value': 'CIMB Bank Berhad'},
            {'key':'9353', 'value': 'Chinatrust Commercial Bank Co., Ltd'},
            {'key':'7214', 'value': 'Citibank NA'},
            {'key':'8606', 'value': 'Commerzbank AG'},
            {'key':'7135', 'value': 'Credit Agricole Corporate and Investment Bank'},
            {'key':'7171', 'value': 'DBS Bank Ltd POSB Bank'},
            {'key':'7463', 'value': 'Deutsche Bank AG'},
            {'key':'7737', 'value': 'DnB NOR Bank ASA'},
            {'key':'7199', 'value': 'Far Eastern Bank Ltd'},
            {'key':'7764', 'value': 'First Commercial Bank'},
            {'key':'7287', 'value': 'HL Bank'},
            {'key':'7232', 'value': 'HSBC Bank (Corporate)'},
            {'key':'9548', 'value': 'HSBC Bank (Personal)'},
            {'key':'9186', 'value': 'ICICI Bank Limited'},
            {'key':'7241', 'value': 'Indian Bank'},
            {'key':'7250', 'value': 'Indian Overseas Bank'},
            {'key':'8712', 'value': 'Industrial & Commercial Bank of China'},
            {'key':'8350', 'value': 'Intesa Sanpaolo S.P.A.'},
            {'key':'7153', 'value': 'JPMorgan Chase Bank, N.A.'},
            {'key':'7490', 'value': 'Korea Exchange Bank'},
            {'key':'8873', 'value': 'Landesbank Baden-Wurttemberg'},
            {'key':'7126', 'value': 'MUFG Bank, Ltd.'},
            {'key':'7302', 'value': 'Malayan Banking Berhad'},
            {'key':'7621', 'value': 'Mizuho Corporate Bank, Ltd'},
            {'key':'8077', 'value': 'National Australia Bank Ltd'},
            {'key':'8518', 'value': 'Nordea Bank Finland Plc'},
            {'key':'7339', 'value': 'Oversea-Chinese Banking Corporation Ltd (OCBC)'},
            {'key':'7056', 'value': 'P.T. Bank Negara Indonesia (Persero) Tbk'},
            {'key':'7366', 'value': 'RHB Bank Berhad'},
            {'key':'8527', 'value': 'Skandinaviska Enskilda Banken AB (publ)'},
            {'key':'7852', 'value': 'Societe Generale'},
            {'key':'7144', 'value': 'Standard Chartered Bank (SCB)'},
            {'key':'7791', 'value': 'State Bank of India'},
            {'key':'7472', 'value': 'Sumitomo Mitsui Banking Corporation'},
            {'key':'8493', 'value': 'Svenska Handelsbanken AB (publ)'},
            {'key':'7010', 'value': 'THE ROYAL BANK OF SCOTLAND N.V.'},
            {'key':'7092', 'value': 'The Bank of East Asia Ltd'},
            {'key':'7685', 'value': 'UBS AG'},
            {'key':'7357', 'value': 'UCO Bank'},
            {'key':'7375', 'value': 'United Overseas Bank Ltd (UOB)'}
        ];

        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormDropdown default={this.props.default} name="bankCode" value={this.props.bankCode} description={<Translate text="Bank code"/>} onChange={this.props.onChange} items={bankCodes} />
            </div>
        );
    }
}


class HongkongRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const bankCodes = [
            {'key': '552', 'value': 'AAREAL BANK AG, WIESBADEN, GERMANY [552]'},
            {'key': '307', 'value': 'ABN AMRO BANK N.V. [307]'},
            {'key': 'A10', 'value': 'AGRICULTURAL BANK OF CHINA LIMITED FRANKFURT BRANCH [A10]'},
            {'key': '222', 'value': 'AGRICULTURAL BANK OF CHINA LIMITED [222]'},
            {'key': '340', 'value': 'AGRICULTURAL BANK OF CHINA LIMITED, SINGAPORE BRANCH [340]'},
            {'key': '400', 'value': 'AGRICULTURAL BANK OF CHINA, BEIJING [400]'},
            {'key': '256', 'value': 'ALLAHABAD BANK [256]'},
            {'key': '402', 'value': 'ALLIED BANKING CORPORATION (HK) LTD. [402]'},
            {'key': '152', 'value': 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LTD [152]'},
            {'key': '404', 'value': 'AUTORIDADE MONETARIA DE MACAU, MACAU [404]'},
            {'key': '261', 'value': 'AXIS BANK LIMITED [261]'},
            {'key': '234', 'value': 'BANCA MONTE DEI PASCHI DI SIENA S.P.A. - HONG KONG BRANCH [234]'},
            {'key': '147', 'value': 'BANCO BILBAO VIZCAYA ARGENTARIA, S.A. [147]'},
            {'key': '356', 'value': 'BANCO DO BRASIL S. A., TOKYO BRANCH [356]'},
            {'key': '406', 'value': 'BANCO NACIONAL ULTRAMARINO S.A. MACAU BRANCH [406]'},
            {'key': '267', 'value': 'BANCO SANTANDER, S.A. [267]'},
            {'key': '049', 'value': 'BANGKOK BANK PUBLIC COMPANY LTD [049]'},
            {'key': '553', 'value': 'BANK FOR FOREIGN TRADE OF VIETNAM [553]'},
            {'key': '278', 'value': 'BANK J. SAFRA SARASIN LTD [278]'},
            {'key': '320', 'value': 'BANK JULIUS BAER & CO. LTD. [320]'},
            {'key': '055', 'value': 'BANK OF AMERICA, NATIONAL ASSOCIATION [055]'},
            {'key': '259', 'value': 'BANK OF BARODA  [259]'},
            {'key': '315', 'value': 'BANK OF CHINA (AUSTRALIA) LIMITED [315]'},
            {'key': '326', 'value': 'BANK OF CHINA (BRASIL) S.A. [326]'},
            {'key': '310', 'value': 'BANK OF CHINA (CANADA) [310]'},
            {'key': '283', 'value': 'BANK OF CHINA (ELUOSI) [283]'},
            {'key': '833', 'value': 'BANK OF CHINA (HK) LTD. RMB FIDUCIARY ACCOUNT [833]'},
            {'key': '838', 'value': 'BANK OF CHINA (HONG KONG) LIMITED - RMB CLEARING BANK [838]'},
            {'key': '012', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [012]'},
            {'key': '014', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [014]'},
            {'key': '019', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [019]'},
            {'key': '026', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [026]'},
            {'key': '030', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [030]'},
            {'key': '031', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [031]'},
            {'key': '033', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [033]'},
            {'key': '036', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [036]'},
            {'key': '064', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [064]'},
            {'key': '070', 'value': 'BANK OF CHINA (HONG KONG) LIMITED [070]'},
            {'key': '290', 'value': 'BANK OF CHINA (HUNGARY) CLOSE LIMITED [290]'},
            {'key': '282', 'value': 'BANK OF CHINA (MALAYSIA) BERHAD [282]'},
            {'key': 'A14', 'value': 'BANK OF CHINA (NEW ZEALAND) LIMITED [A14]'},
            {'key': '289', 'value': 'BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED  [289]'},
            {'key': '314', 'value': 'BANK OF CHINA (UK) LIMITED [314]'},
            {'key': '306', 'value': 'BANK OF CHINA (ZAMBIA) LIMITED [306]'},
            {'key': '321', 'value': 'BANK OF CHINA INTERNATIONAL LIMITED [321]'},
            {'key': '287', 'value': 'BANK OF CHINA LIMITED FRANKFURT BRANCH [287]'},
            {'key': '302', 'value': 'BANK OF CHINA LIMITED GRAND CAYMAN BRANCH [302]'},
            {'key': 'A15', 'value': 'BANK OF CHINA LIMITED HUNGARIAN BRANCH [A15]'},
            {'key': '284', 'value': 'BANK OF CHINA LIMITED JAKARTA BRANCH [284]'},
            {'key': '298', 'value': 'BANK OF CHINA LIMITED JOHANNESBURG BRANCH [298]'},
            {'key': '301', 'value': 'BANK OF CHINA LIMITED LUXEMBOURG BRANCH [301]'},
            {'key': '420', 'value': 'BANK OF CHINA LIMITED MACAU BRANCH [420]'},
            {'key': '279', 'value': 'BANK OF CHINA LIMITED MANILA BRANCH [279]'},
            {'key': '291', 'value': 'BANK OF CHINA LIMITED MILAN BRANCH [291]'},
            {'key': '304', 'value': 'BANK OF CHINA LIMITED NEW YORK BRANCH [304]'},
            {'key': '303', 'value': 'BANK OF CHINA LIMITED PARIS BRANCH [303]'},
            {'key': '327', 'value': 'BANK OF CHINA LIMITED PHNOM PENH BRANCH [327]'},
            {'key': '285', 'value': 'BANK OF CHINA LIMITED SEOUL BRANCH [285]'},
            {'key': '286', 'value': 'BANK OF CHINA LIMITED SINGAPORE BRANCH [286]'},
            {'key': '288', 'value': 'BANK OF CHINA LIMITED SYDNEY BRANCH [288]'},
            {'key': 'A00', 'value': 'BANK OF CHINA LIMITED TAIPEI BRANCH [A00]'},
            {'key': '280', 'value': 'BANK OF CHINA LIMITED TOKYO BRANCH [280]'},
            {'key': '414', 'value': 'BANK OF CHINA LIMITED, HEAD OFFICE [414]'},
            {'key': '338', 'value': 'BANK OF CHINA LIMITED, HONG KONG BRANCH [338]'},
            {'key': '311', 'value': 'BANK OF CHINA LIMITED, PANAMA BRANCH [311]'},
            {'key': '292', 'value': 'BANK OF CHINA LONDON BRANCH [292]'},
            {'key': 'A12', 'value': 'BANK OF CHINA LTD. - ABU DHABI [A12]'},
            {'key': '369', 'value': 'BANK OF CHINA MIDDLE EAST (DUBAI) LIMITED [369]'},
            {'key': '348', 'value': 'BANK OF CHINA, HO CHI MINH CITY BRANCH [348]'},
            {'key': '300', 'value': 'BANK OF CHINA, LUXEMBOURG S.A. [300]'},
            {'key': '428', 'value': 'BANK OF COMMUNICATIONS CO., LTD. HEAD OFFICE, SHANGHAI [428]'},
            {'key': '429', 'value': 'BANK OF COMMUNICATIONS CO., LTD. SHENZHEN BRANCH [429]'},
            {'key': '027', 'value': 'BANK OF COMMUNICATIONS CO., LTD. [027]'},
            {'key': '349', 'value': 'BANK OF COMMUNICATIONS SEOUL BRANCH [349]'},
            {'key': '555', 'value': 'BANK OF HANGZHOU, HANGZHOU [555]'},
            {'key': '058', 'value': 'BANK OF INDIA [058]'},
            {'key': '506', 'value': 'BANK OF JIANGSU CO. LTD., NANJING [506]'},
            {'key': '086', 'value': 'BANK OF MONTREAL [086]'},
            {'key': '542', 'value': 'BANK OF MONTREAL, GUANGZHOU BRANCH [542]'},
            {'key': '478', 'value': 'BANK OF NINGBO CO. LTD., ZHEJIANG [478]'},
            {'key': '372', 'value': 'BANK OF SHANGHAI (HONG KONG) LIMITED [372]'},
            {'key': '272', 'value': 'BANK OF SINGAPORE LIMITED [272]'},
            {'key': '201', 'value': 'BANK OF TAIWAN [201]'},
            {'key': '241', 'value': 'BANK SINOPAC [241]'},
            {'key': '244', 'value': 'BANK SINOPAC [244]'},
            {'key': '355', 'value': 'BANK SINOPAC, LOS ANGELES BRANCH [355]'},
            {'key': '431', 'value': 'BANK SINOPAC, TAIPEI [431]'},
            {'key': '074', 'value': 'BARCLAYS BANK PLC [074]'},
            {'key': '067', 'value': 'BDO UNIBANK, INC. [067]'},
            {'key': '275', 'value': 'BNP PARIBAS SECURITIES SERVICES [275]'},
            {'key': '240', 'value': 'BNP PARIBAS WEALTH MANAGEMENT [240]'},
            {'key': '056', 'value': 'BNP PARIBAS [056]'},
            {'key': '252', 'value': 'BOC CREDIT CARD (INTERNATIONAL) LIMITED [252]'},
            {'key': '350', 'value': 'BSI LTD [350]'},
            {'key': '351', 'value': 'CAMBODIA MEKONG BANK PUBLIC LIMITED [351]'},
            {'key': '092', 'value': 'CANADIAN IMPERIAL BANK OF COMMERCE [092]'},
            {'key': '366', 'value': 'CANADIAN IMPERIAL BANK OF COMMERCE, CANADA [366]'},
            {'key': '262', 'value': 'CANARA BANK [262]'},
            {'key': '263', 'value': 'CATHAY BANK  [263]'},
            {'key': '236', 'value': 'CATHAY UNITED BANK COMPANY, LIMITED [236]'},
            {'key': '206', 'value': 'CHANG HWA COMMERCIAL BANK LTD [206]'},
            {'key': '529', 'value': 'CHANGSHA CITY COMMERCIAL BANK [529]'},
            {'key': '018', 'value': 'CHINA CITIC BANK INTERNATIONAL LIMITED [018]'},
            {'key': '051', 'value': 'CHINA CITIC BANK INTERNATIONAL LIMITED [051]'},
            {'key': '437', 'value': 'CHINA CITIC BANK, BEIJING [437]'},
            {'key': '009', 'value': 'CHINA CONSTRUCTION BANK (ASIA) CORPORATION LIMITED [009]'},
            {'key': '221', 'value': 'CHINA CONSTRUCTION BANK CORPORATION [221]'},
            {'key': '358', 'value': 'CHINA CONSTRUCTION BANK SEOUL BRANCH [358]'},
            {'key': '276', 'value': 'CHINA DEVELOPMENT BANK CORPORATION [276]'},
            {'key': '368', 'value': 'CHINA EVERBRIGHT BANK CO., LTD [368]'},
            {'key': '434', 'value': 'CHINA EVERBRIGHT BANK, BEIJING  [434]'},
            {'key': '447', 'value': 'CHINA GUANGFA BANK CO. LTD, BEIJING [447]'},
            {'key': '549', 'value': 'CHINA GUANGFA BANK CO., LTD. GUANGZHOU [549]'},
            {'key': 'A09', 'value': 'CHINA MERCHANTS BANK CO., LTD, SINGAPORE BRANCH [A09]'},
            {'key': '238', 'value': 'CHINA MERCHANTS BANK CO., LTD. [238]'},
            {'key': '435', 'value': 'CHINA MERCHANTS BANK, HEAD OFFICE, SHENZHEN [435]'},
            {'key': '353', 'value': 'CHINA MINSHENG BANKING CORP., LTD. [353]'},
            {'key': '436', 'value': 'CHINA MINSHENG BANKING CORPORATION LTD., BEIJING [436]'},
            {'key': '507', 'value': 'CHINA RESOURCES BANK OF ZHUHAI CO LTD., ZHUHAI [507]'},
            {'key': '039', 'value': 'CHIYU BANKING CORPORATION LTD [039]'},
            {'key': '041', 'value': 'CHONG HING BANK LTD [041]'},
            {'key': '374', 'value': 'CIMB BANK BERHAD [374]'},
            {'key': '343', 'value': 'CIMB THAI BANK PUBLIC COMPANY LIMITED [343]'},
            {'key': '531', 'value': 'CITIBANK (CHINA) CO LTD, SHENZHEN BRANCH [531]'},
            {'key': '250', 'value': 'CITIBANK (HONG KONG) LIMITED [250]'},
            {'key': '006', 'value': 'CITIBANK N.A. [006]'},
            {'key': '097', 'value': 'COMMERZBANK AG [097]'},
            {'key': '153', 'value': 'COMMONWEALTH BANK OF AUSTRALIA [153]'},
            {'key': '524', 'value': 'CONCORD BANK LTD., NINGBO [524]'},
            {'key': '868', 'value': 'CONTINUOUS LINKED SETTLEMENT BANK INTERNATIONAL [868]'},
            {'key': '183', 'value': 'COOPERATIEVE CENTRALE RAIFFEISEN-BOERENLEENBANK B.A.  [183]'},
            {'key': '323', 'value': 'COOPERATIEVE CENTRALE RAIFFEISEN-BOERENLEENBANK B.A. (TRADIN [323]'},
            {'key': '319', 'value': 'COOPERATIEVE CENTRALE RAIFFEISEN-BOERENLEENBANK B.A.(TRADING [319]'},
            {'key': '205', 'value': 'COUTTS & CO LTD [205]'},
            {'key': '513', 'value': 'COUTTS AND CO. LTD., SINGAPORE [513]'},
            {'key': '339', 'value': 'CREDIT AGRICOLE (SUISSE) S.A. [339]'},
            {'key': '005', 'value': 'CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK [005]'},
            {'key': '233', 'value': 'CREDIT SUISSE AG [233]'},
            {'key': '229', 'value': 'CTBC BANK CO., LTD. [229]'},
            {'key': '040', 'value': 'DAH SING BANK LTD [040]'},
            {'key': '016', 'value': 'DBS BANK (HONG KONG) LIMITED [016]'},
            {'key': '032', 'value': 'DBS BANK (HONG KONG) LIMITED [032]'},
            {'key': '052', 'value': 'DBS BANK (HONG KONG) LIMITED [052]'},
            {'key': '185', 'value': 'DBS BANK LTD, HONG KONG BRANCH [185]'},
            {'key': '054', 'value': 'DEUTSCHE BANK AG [054]'},
            {'key': '328', 'value': 'DNB NOR BANK ASA, SINGAPORE BRANCH [328]'},
            {'key': '439', 'value': 'DONGGUAN RURAL CREDIT COOPERATIVES UNION, DONGGUAN [439]'},
            {'key': '113', 'value': 'DZ BANK AG DEUTSCHE ZENTRAL-GENOSSENSCHAFTSBANK [113]'},
            {'key': '243', 'value': 'E.SUN COMMERCIAL BANK, LTD [243]'},
            {'key': '557', 'value': 'E.SUN COMMERCIAL BANK, LTD., TAIPEI [557]'},
            {'key': '258', 'value': 'EAST WEST BANK [258]'},
            {'key': '346', 'value': 'EDMOND DE ROTHSCHILD (SUISSE) S.A. [346]'},
            {'key': '237', 'value': 'EFG BANK AG [237]'},
            {'key': '227', 'value': 'ERSTE GROUP BANK AG [227]'},
            {'key': '440', 'value': 'EXPORT-IMPORT BANK OF THAILAND, BANGKOK [440]'},
            {'key': '253', 'value': 'FALCON PRIVATE BANK LTD. [253]'},
            {'key': '260', 'value': 'FAR EASTERN INTERNATIONAL BANK [260]'},
            {'key': '362', 'value': 'FINABANK N.V. [362]'},
            {'key': '203', 'value': 'FIRST COMMERCIAL BANK [203]'},
            {'key': '128', 'value': 'FUBON BANK (HONG KONG) LIMITED [128]'},
            {'key': '325', 'value': 'GRANIT BANK ZRT [325]'},
            {'key': '540', 'value': 'GUIYANG COMMERCIAL BANK, GUIYANG [540]'},
            {'key': '322', 'value': 'HABIB BANK ZURICH (HONG KONG) LIMITED [322]'},
            {'key': '112', 'value': 'HANA BANK [112]'},
            {'key': '024', 'value': 'HANG SENG BANK LTD [024]'},
            {'key': '308', 'value': 'HDFC BANK LTD. [308]'},
            {'key': '888', 'value': 'HONG KONG MONETARY AUTHORITY [888]'},
            {'key': '248', 'value': 'HONG LEONG BANK BERHAD [248]'},
            {'key': '004', 'value': 'HSBC - THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD [004]'},
            {'key': '450', 'value': 'HSBC BANGLADESH [450]'},
            {'key': '461', 'value': 'HSBC BANK (CHINA) COMPANY LIMITED [461]'},
            {'key': '464', 'value': 'HSBC BANK (TAIWAN) LIMITED [464]'},
            {'key': '457', 'value': 'HSBC BANK MALAYSIA BERHAD [457]'},
            {'key': '347', 'value': 'HSBC BANK PLC [347]'},
            {'key': '106', 'value': 'HSBC BANK USA, NATIONAL ASSOCIATION [106]'},
            {'key': '466', 'value': 'HSBC BANK VIETNAM LTD [466]'},
            {'key': '451', 'value': 'HSBC BRUNEI [451]'},
            {'key': '452', 'value': 'HSBC INDIA [452]'},
            {'key': '453', 'value': 'HSBC INDONESIA [453]'},
            {'key': '454', 'value': 'HSBC JAPAN [454]'},
            {'key': '456', 'value': 'HSBC MACAU [456]'},
            {'key': '458', 'value': 'HSBC MANILA [458]'},
            {'key': '235', 'value': 'HSBC PRIVATE BANK (SUISSE) SA [235]'},
            {'key': '460', 'value': 'HSBC SEOUL BRANCH [460]'},
            {'key': '462', 'value': 'HSBC SINGAPORE [462]'},
            {'key': '463', 'value': 'HSBC SRI LANKA [463]'},
            {'key': '465', 'value': 'HSBC THAILAND [465]'},
            {'key': '198', 'value': 'HUA NAN COMMERCIAL BANK LTD [198]'},
            {'key': '550', 'value': 'HUA NAN COMMERCIAL BANK LTD., TAIPEI [550]'},
            {'key': '468', 'value': 'HUA XIA BANK, BEIJING [468]'},
            {'key': '341', 'value': 'ICBC STANDARD BANK PLC [341]'},
            {'key': '251', 'value': 'ICICI BANK LIMITED [251]'},
            {'key': '050', 'value': 'INDIAN OVERSEAS BANK [050]'},
            {'key': '029', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LTD  [029]'},
            {'key': '072', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LTD  [072]'},
            {'key': '483', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (MACAU) LIMITED, MAC [483]'},
            {'key': '330', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (MALAYSIA) BERHAD [330]'},
            {'key': '214', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED [214]'},
            {'key': '469', 'value': 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA, BEIJING [469]'},
            {'key': '377', 'value': 'INDUSTRIAL BANK CO., LTD. [377]'},
            {'key': '445', 'value': 'INDUSTRIAL BANK COMPANY LTD., FUZHOU [445]'},
            {'key': '271', 'value': 'INDUSTRIAL BANK OF KOREA [271]'},
            {'key': '274', 'value': 'INDUSTRIAL BANK OF TAIWAN CO., LTD. [274]'},
            {'key': '470', 'value': 'INDUSTRIAL BANK OF TAIWAN, TAIPEI [470]'},
            {'key': '145', 'value': 'ING BANK N.V. [145]'},
            {'key': '161', 'value': 'INTESA SANPAOLO S.P.A. [161]'},
            {'key': '375', 'value': 'J.P. MORGAN SECURITIES (ASIA PACIFIC) LIMITED [375]'},
            {'key': '541', 'value': 'JIANG YIN RURAL COMMERCIAL BANK, JIANG YIN CITY, JIANG SU  [541]'},
            {'key': '317', 'value': 'JOINT STOCK COMMERCIAL BANK \"LANTA-BANK\" (CJSC) [317]'},
            {'key': '407', 'value': 'JOINT STOCK COMMERCIAL BANK FOR INVESTMENT AND DEVELOPMENT O [407]'},
            {'key': '007', 'value': 'JPMORGAN CHASE BANK [007]'},
            {'key': '305', 'value': 'JSC AB (BANK OF CHINA KAZAKHSTAN) [305]'},
            {'key': 'A06', 'value': 'JSC CAPITAL BANK [A06]'},
            {'key': '380', 'value': 'KASIKORNBANK PUBLIC COMPANY LIMITED [380]'},
            {'key': '178', 'value': 'KBC BANK N.V. [178]'},
            {'key': '318', 'value': 'KDB ASIA LIMITED [318]'},
            {'key': '363', 'value': 'KEB ASIA FINANCE LIMITED [363]'},
            {'key': '046', 'value': 'KOREA EXCHANGE BANK [046]'},
            {'key': 'A02', 'value': 'KOREA EXCHANGE BANK, KOREA [A02]'},
            {'key': '264', 'value': 'LAND BANK OF TAIWAN CO., LTD. [264]'},
            {'key': '342', 'value': 'LGT BANK AG [342]'},
            {'key': '473', 'value': 'LUSO INTERNATIONAL BANKING LIMITED, MACAU [473]'},
            {'key': '344', 'value': 'MACQUARIE BANK LIMITED [344]'},
            {'key': '379', 'value': 'MASHREQ BANK - PUBLIC SHAREHOLDING COMPANY [379]'},
            {'key': '352', 'value': 'MASHREQBANK PSC [352]'},
            {'key': '063', 'value': 'MAYBANK (MALAYAN BANKING BERHAD) [063]'},
            {'key': '242', 'value': 'MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD. [242]'},
            {'key': '254', 'value': 'MELLI BANK PLC [254]'},
            {'key': '295', 'value': 'METROPOLITAN BANK & TRUST COMPANY [295]'},
            {'key': '138', 'value': 'MITSUBISHI UFJ TRUST AND BANKING CORPORATION [138]'},
            {'key': '109', 'value': 'MIZUHO BANK, LTD. [109]'},
            {'key': '043', 'value': 'NANYANG COMMERCIAL BANK LTD [043]'},
            {'key': '150', 'value': 'NATIONAL AUSTRALIA BANK LTD [150]'},
            {'key': '277', 'value': 'NATIONAL BANK OF ABU DHABI [277]'},
            {'key': '331', 'value': 'NATIONAL BANK OF CANADA [331]'},
            {'key': '060', 'value': 'NATIONAL BANK OF PAKISTAN [060]'},
            {'key': '210', 'value': 'NATIXIS [210]'},
            {'key': '035', 'value': 'OCBC WING HANG BANK LIMITED [035]'},
            {'key': '044', 'value': 'OCBC WING HANG BANK LIMITED [044]'},
            {'key': '367', 'value': 'ORIENT EXPRESS BANK [367]'},
            {'key': '373', 'value': 'ORIX ASIA LIMITED [373]'},
            {'key': '022', 'value': 'OVERSEA-CHINESE BANKING CORPORATION LTD [022]'},
            {'key': '119', 'value': 'PHILIPPINE NATIONAL BANK [119]'},
            {'key': '357', 'value': 'PICTET & CIE (EUROPE) S.A. [357]'},
            {'key': '485', 'value': 'PING AN BANK CO., LTD, SHENZHEN [485]'},
            {'key': '218', 'value': 'PORTIGON AG [218]'},
            {'key': '281', 'value': 'PT BANK CENTRAL ASIA TBK, INDONESIA [281]'},
            {'key': '480', 'value': 'PT. BANK MANDIRI (PERSERO) TBK, HONG KONG BRANCH [480]'},
            {'key': '066', 'value': 'PT. BANK NEGARA INDONESIA (PERSERO) TBK. [066]'},
            {'key': '028', 'value': 'PUBLIC BANK (HONG KONG) LIMITED [028]'},
            {'key': '266', 'value': 'PUNJAB NATIONAL BANK [266]'},
            {'key': '370', 'value': 'RAIFFEISEN BANK INTERNATIONAL AG [370]'},
            {'key': '354', 'value': 'RAIFFEISEN BANK INTERNATIONAL AG, SINGAPORE BRANCH [354]'},
            {'key': '080', 'value': 'ROYAL BANK OF CANADA [080]'},
            {'key': '333', 'value': 'ROYAL BANK OF CANADA, LONDON BRANCH [333]'},
            {'key': '334', 'value': 'ROYAL BANK OF CANADA, SINGAPORE BRANCH [334]'},
            {'key': '332', 'value': 'ROYAL BANK OF CANADA, SYDNEY BRANCH [332]'},
            {'key': '335', 'value': 'ROYAL BANK OF CANADA, TOKYO BRANCH [335]'},
            {'key': '336', 'value': 'ROYAL BANK OF CANADA, TORONTO [336]'},
            {'key': '296', 'value': 'SAIGON THUONG TIN COMMERCIAL JOINT STOCK BANK [296]'},
            {'key': '025', 'value': 'SHANGHAI COMMERCIAL BANK LTD [025]'},
            {'key': '345', 'value': 'SHANGHAI PUDONG DEVELOPMENT BANK CO., LTD [345]'},
            {'key': '484', 'value': 'SHANGHAI PUDONG DEVELOPMENT BANK, SHANGHAI [484]'},
            {'key': '486', 'value': 'SHENZHEN DEVELOPMENT BANK, SHENZHEN [486]'},
            {'key': '509', 'value': 'SHENZHEN RURAL COMMERCIAL BANK [509]'},
            {'key': '273', 'value': 'SHINHAN BANK [273]'},
            {'key': '316', 'value': 'SKANDINAVISKA ENSKILDA BANKEN AB [316]'},
            {'key': '255', 'value': 'SOCIETE GENERALE BANK & TRUST [255]'},
            {'key': '081', 'value': 'SOCIETE GENERALE [081]'},
            {'key': '818', 'value': 'STANDARD CHARTERED BANK (HONG KONG) LIMITED - EURO CLEARING  [818]'},
            {'key': '003', 'value': 'STANDARD CHARTERED BANK (HONG KONG) LIMITED [003]'},
            {'key': '249', 'value': 'STANDARD CHARTERED BANK HONG KONG BRANCH [249]'},
            {'key': '536', 'value': 'STANDARD CHARTERED BANK PLC, LONDON [536]'},
            {'key': '521', 'value': 'STANDARD CHARTERED BANK, BANGKOK [521]'},
            {'key': '489', 'value': 'STANDARD CHARTERED BANK, BEIJING BRANCH [489]'},
            {'key': '515', 'value': 'STANDARD CHARTERED BANK, JAKARTA BRANCH [515]'},
            {'key': '519', 'value': 'STANDARD CHARTERED BANK, MALAYSIA BERHAD [519]'},
            {'key': '490', 'value': 'STANDARD CHARTERED BANK, NANJING BRANCH [490]'},
            {'key': '517', 'value': 'STANDARD CHARTERED BANK, PHILIPPINES BRANCH [517]'},
            {'key': '518', 'value': 'STANDARD CHARTERED BANK, SEOUL KOREA [518]'},
            {'key': '491', 'value': 'STANDARD CHARTERED BANK, SHANGHAI BRANCH [491]'},
            {'key': '492', 'value': 'STANDARD CHARTERED BANK, SHENZHEN BRANCH [492]'},
            {'key': '516', 'value': 'STANDARD CHARTERED BANK, SINGAPORE BRANCH [516]'},
            {'key': '522', 'value': 'STANDARD CHARTERED BANK, SRI LANKA [522]'},
            {'key': '520', 'value': 'STANDARD CHARTERED BANK, TAIWAN [520]'},
            {'key': '493', 'value': 'STANDARD CHARTERED BANK, TIANJIN BRANCH [493]'},
            {'key': 'A07', 'value': 'STANDARD CHARTERED BANK, TOKYO [A07]'},
            {'key': '494', 'value': 'STANDARD CHARTERED BANK, XIAMEN BRANCH [494]'},
            {'key': '495', 'value': 'STANDARD CHARTERED BANK, ZHUHAI BRANCH [495]'},
            {'key': '082', 'value': 'STATE BANK OF INDIA [082]'},
            {'key': '220', 'value': 'STATE STREET BANK AND TRUST COMPANY [220]'},
            {'key': '065', 'value': 'SUMITOMO MITSUI BANKING CORPORATION [065]'},
            {'key': '371', 'value': 'SUMITOMO MITSUI TRUST BANK, LIMITED [371]'},
            {'key': '496', 'value': 'SUNNY BANK, TAIPEI [496]'},
            {'key': '165', 'value': 'SVENSKA HANDELSBANKEN AB (PUBL) [165]'},
            {'key': '378', 'value': 'TA CHONG BANK, LTD. [378]'},
            {'key': '061', 'value': 'TAI SANG BANK LTD [061]'},
            {'key': '038', 'value': 'TAI YAU BANK LTD [038]'},
            {'key': '498', 'value': 'TAICHUNG COMMERCIAL BANK, TAICHUNG [498]'},
            {'key': '239', 'value': 'TAIPEI FUBON COMMERCIAL BANK CO., LTD. [239]'},
            {'key': '245', 'value': 'TAISHIN INTERNATIONAL BANK CO., LTD [245]'},
            {'key': '499', 'value': 'TAISHIN INTERNATIONAL BANK, TAIPEI [499]'},
            {'key': '230', 'value': 'TAIWAN BUSINESS BANK HONG KONG BRANCH [230]'},
            {'key': '265', 'value': 'TAIWAN COOPERATIVE BANK, LTD. [265]'},
            {'key': '337', 'value': 'TAIWAN SHIN KONG COMMERCIAL BANK CO., LTD. [337]'},
            {'key': '474', 'value': 'TAIWAN SHIN KONG COMMERCIAL BANK COMPANY LIMITED, TAIPEI [474]'},
            {'key': '502', 'value': 'THE BANK OF BERMUDA LIMITED, HONG KONG BRANCH [502]'},
            {'key': '015', 'value': 'THE BANK OF EAST ASIA, LTD [015]'},
            {'key': '139', 'value': 'THE BANK OF NEW YORK MELLON [139]'},
            {'key': '076', 'value': 'THE BANK OF NOVA SCOTIA [076]'},
            {'key': '329', 'value': 'THE BANK OF NOVA SCOTIA, SINGAPORE [329]'},
            {'key': '047', 'value': 'THE BANK OF TOKYO-MITSUBISHI UFJ, LTD. [047]'},
            {'key': '170', 'value': 'THE CHIBA BANK LTD [170]'},
            {'key': '202', 'value': 'THE CHUGOKU BANK LTD [202]'},
            {'key': '188', 'value': 'THE HACHIJUNI BANK, LTD [188]'},
            {'key': '828', 'value': 'THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD - USD CLEA [828]'},
            {'key': '554', 'value': 'THE HOUSING BANK FOR TRADE AND FINANCE, JORDAN [554]'},
            {'key': '224', 'value': 'THE IYO BANK LTD [224]'},
            {'key': '538', 'value': 'THE MACAU CHINESE BANK LTD, MACAU [538]'},
            {'key': '360', 'value': 'THE ROYAL BANK OF SCOTLAND N.V. [360]'},
            {'key': '008', 'value': 'THE ROYAL BANK OF SCOTLAND PLC [008]'},
            {'key': '528', 'value': 'THE RURAL CREDIT COOPERATIVES UNION OF SHUNDE [528]'},
            {'key': '269', 'value': 'THE SHANGHAI COMMERCIAL & SAVINGS BANK LTD [269]'},
            {'key': '199', 'value': 'THE SHIGA BANK, LTD. [199]'},
            {'key': '186', 'value': 'THE SHIZUOKA BANK, LTD [186]'},
            {'key': '487', 'value': 'THE SIAM COMMERCIAL BANK PUBLIC COMPANY LIMITED [487]'},
            {'key': '085', 'value': 'THE TORONTO-DOMINION BANK [085]'},
            {'key': '500', 'value': 'TMB BANK PUBLIC COMPANY LIMITED, BANGKOK [500]'},
            {'key': '501', 'value': 'TMB BANK PUBLIC COMPANY LIMITED, HONG KONG [501]'},
            {'key': '312', 'value': 'TURK EKONOMI BANKASI A.S. [312]'},
            {'key': '103', 'value': 'UBS AG, HONG KONG [103]'},
            {'key': '045', 'value': 'UCO BANK [045]'},
            {'key': '164', 'value': 'UNICREDIT BANK AG [164]'},
            {'key': '268', 'value': 'UNION BANK OF INDIA [268]'},
            {'key': '071', 'value': 'UNITED OVERSEAS BANK LTD [071]'},
            {'key': '504', 'value': 'UNITED SUBURBAN AND RURAL CREDIT COOPERATIVE WUXI, WUXI [504]'},
            {'key': '293', 'value': 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE [293]'},
            {'key': '505', 'value': 'VIETNAM TECHNOLOGICAL AND COMMERCIAL JOINT STOCK BANK, HANOI [505]'},
            {'key': '180', 'value': 'WELLS FARGO BANK, N.A. [180]'},
            {'key': '297', 'value': 'WELLS FARGO BANK, N.A., LONDON BRANCH [297]'},
            {'key': '151', 'value': 'WESTPAC BANKING CORPORATION [151]'},
            {'key': '020', 'value': 'WING LUNG BANK LTD [020]'},
            {'key': '118', 'value': 'WOORI BANK  [118]'},
            {'key': 'A05', 'value': 'WOORI BANK, KOREA [A05]'},
            {'key': '547', 'value': 'XIAMEN BANK CO., LTD., XIAMEN [547]'},
            {'key': 'A04', 'value': 'ZAO INDUSTRIAL AND COMMERCIAL BANK OF CHINA (MOSCOW) [A04]'},
            {'key': '525', 'value': 'ZIBO CITY COMMERCIAL BANK, SHANDONG [525]'}
        ];
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormDropdown default={this.props.default} name="bankCode" value={this.props.bankCode} description={<Translate text="Bank code"/>} onChange={this.props.onChange} items={bankCodes} />
            </div>
        );
    }
}


class NewzealandRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}

class CzechLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="bankCode" value={this.props.bankCode} description="Bank code" onChange={this.props.onChange}  />
            </div>
        );
    }
}

function BangladeshRecipient (props){
  const classes = useStyles();
  const bankCodes = [
      {"key": "020", "value": "AB BANK LTD."},
      {"key": "010", "value": "AGRANI BANK LTD."},
      {"key": "015", "value": "AL-ARAFAH ISLAMI BANK LTD."},
      {"key": "025", "value": "BANGLADESH BANK"},
      {"key": "030", "value": "BANGLADESH COMMERCE BANK LTD."},
      {"key": "047", "value": "BANGLADESH DEVELOPMENT BANK LTD."},
      {"key": "035", "value": "BANGLADESH KRISHI BANK"},
      {"key": "040", "value": "BANGLADESH SAMABAYA BANK LTD."},
      {"key": "065", "value": "BANK AL-FALAH LTD"},
      {"key": "070", "value": "BANK ASIA LTD."},
      {"key": "055", "value": "BASIC BANK LTD."},
      {"key": "060", "value": "BRAC BANK LTD."},
      {"key": "075", "value": "CITI BANK N A"},
      {"key": "080", "value": "COMMERCIAL BANK OF CYLON"},
      {"key": "085", "value": "DHAKA BANK LTD."},
      {"key": "090", "value": "DUTCH-BANGLA BANK LTD"},
      {"key": "095", "value": "EASTERN BANK LTD."},
      {"key": "100", "value": "EXIM BANK LTD."},
      {"key": "105", "value": "FIRST SECURITY ISLAMI BANK LTD."},
      {"key": "110", "value": "HABIB BANK LTD."},
      {"key": "115", "value": "HONGKONG & SHANGHAI BANKING CORP."},
      {"key": "230", "value": "ICB ISLAMIC BANK LTD"},
      {"key": "120", "value": "IFIC BANK LTD."},
      {"key": "125", "value": "ISLAMI BANK BANGLDESH LTD."},
      {"key": "130", "value": "JAMUNA BANK LTD."},
      {"key": "135", "value": "JANATA BANK LTD."},
      {"key": "275", "value": "MEGHNA BANK LIMITED"},
      {"key": "140", "value": "MERCANTILE BANK LTD."},
      {"key": "285", "value": "MIDLAND BANK LIMITED"},
      {"key": "295", "value": "MODHUMOTI BANK LIMITED"},
      {"key": "145", "value": "MUTUAL TRUST BANK LTD."},
      {"key": "150", "value": "NATIONAL BANK LTD."},
      {"key": "155", "value": "NATIONAL BANK OF PAKISTAN"},
      {"key": "290", "value": "NRB BANK LIMITED"},
      {"key": "260", "value": "NRB COMMERCIAL BANK LTD."},
      {"key": "300", "value": "NRB GLOBAL BANK LIMITED"},
      {"key": "165", "value": "ONE BANK LTD."},
      {"key": "170", "value": "PRIME BANK LTD."},
      {"key": "175", "value": "PUBALI BANK LTD."},
      {"key": "180", "value": "RAJSHAHI KRISHI UNNAYAN BANK"},
      {"key": "185", "value": "RUPALI BANK LTD."},
      {"key": "270", "value": "SBAC BANK LIMITED"},
      {"key": "190", "value": "SHAHJALAL ISLAMI BANK LTD."},
      {"key": "195", "value": "SOCIAL ISLAMI BANK LTD"},
      {"key": "200", "value": "SONALI BANK LTD."},
      {"key": "205", "value": "SOUTHEAST BANK LTD."},
      {"key": "210", "value": "STANDARD BANK LTD."},
      {"key": "215", "value": "STANDARD CHARTERED BANK"},
      {"key": "220", "value": "STATE BANK OF INDIA"},
      {"key": "225", "value": "THE CITY BANK LTD."},
      {"key": "280", "value": "THE FARMERS BANK LIMITED"},
      {"key": "235", "value": "THE PREMIER BANK LTD."},
      {"key": "240", "value": "TRUST BANK LTD."},
      {"key": "265", "value": "UNION BANK LTD."},
      {"key": "245", "value": "UNITED COMMERCIAL BANK LTD."},
      {"key": "250", "value": "UTTARA BANK LTD."},
      {"key": "255", "value": "WOORI BANK"}
  ];

  return(
      <Grid container>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <FormInput default={props.default} name="accountNumber" value={props.accountNumber} description={<Translate text="Account number"/>} onChange={props.onChange}  />

            <InputLabel shrink={true}  htmlFor="bankCode">Bank code</InputLabel>
            <FormDropdown
              default={props.default}
              id="bankCode"
              name="bankCode"
              value={props.bankCode}
              description={<Translate text="Bank code" />}
              onChange={props.onChange} 
              items={bankCodes} 
            />
          <OldDynamicDropdown 
              id="branchCode"
              description={<Translate text="Branch code"/>}   
              name="branchCode" value={props.branchCode}
              url={"/api/v1/bank-branches?country=BD&bank-code=" + props.bankCode}
              onChange={props.onChange}
              depends_on={ props.bankCode }
              default={props.default}
          />
          </FormControl>
        </Grid>
      </Grid>
  );
}

class ChineseCardRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="cardNumber" value={this.props.cardNumber} description="UnionPay card number" onChange={this.props.onChange}  />
            </div>
        );
    }
}

class VietnamEarthportRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const bankCodes = [
            {'key': 'ABBKVNVX', 'value': 'AN BINH COMMERCIAL JOINT STOCK BANK [ABBKVNVX]'},
            {'key': 'ANZBVNVX', 'value': 'ANZ BANK(VIETNAM) LIMITED [ANZBVNVX]'},
            {'key': 'ASCBVNVX', 'value': 'ASIA COMMERCIAL BANK [ASCBVNVX]'},
            {'key': 'BKKBVNVX', 'value': 'BANGKOK BANK PCL [BKKBVNVX]'},
            {'key': 'BKCHVNVX', 'value': 'BANK OF CHINA [BKCHVNVX]'},
            {'key': 'COMMVNVX', 'value': 'BANK OF COMMUNICATIONS CO.,LTDH [COMMVNVX]'},
            {'key': 'BOTKVNVX', 'value': 'BANK OF TOKYO-MITSUBISHI UFJ, LTD., THE [BOTKVNVX]'},
            {'key': 'BVBVVNVX', 'value': 'BAOVIET JOINT STOCK COMMERCIAL BANK [BVBVVNVX]'},
            {'key': 'BNPAVNVN', 'value': 'BNP PARIBAS VIETNAM [BNPAVNVN]'},
            {'key': 'PCBCVNVX', 'value': 'CHINA CONSTRUCTION BANK CORPORATION [PCBCVNVX]'},
            {'key': 'CITIVNVX', 'value': 'CITIBANK N.A. [CITIVNVX]'},
            {'key': 'CTBAVNVX', 'value': 'COMMONWEALTH BANK OF AUSTRALIA HO CHI MINH CITY [CTBAVNVX]'},
            {'key': 'CTCBVNVX', 'value': 'CTBC BANK CO., LTD [CTCBVNVX]'},
            {'key': 'DBSSVNVX', 'value': 'DBS BANK LTD [DBSSVNVX]'},
            {'key': 'DEUTVNVX', 'value': 'DEUTSCHE BANK [DEUTVNVX]'},
            {'key': 'EACBVNVX', 'value': 'DONGA BANK [EACBVNVX]'},
            {'key': 'FENBVNVX', 'value': 'FAR EAST NATIONAL BANK [FENBVNVX]'},
            {'key': 'FCBKVNVX', 'value': 'FIRST COMMERCIAL BANK [FCBKVNVX]'},
            {'key': 'GBNKVNVX', 'value': 'GLOBAL PETRO COMMERCIAL JOINT STOCK BANK [GBNKVNVX]'},
            {'key': 'HNBNVNVX', 'value': 'HANA BANK HO CHI MINH CITY BRANCH [HNBNVNVX]'},
            {'key': 'HDBCVNVX', 'value': 'HOCHIMINH CITY DEVELOPMENT JOINT STOCK COMMERCIAL BANK [HDBCVNVX]'},
            {'key': 'HLBBVNVX', 'value': 'HONG LEONG BANK VIETNAM LIMITED [HLBBVNVX]'},
            {'key': 'HSBCVNVX', 'value': 'HSBC BANK (VIETNAM) LTD. [HSBCVNVX]'},
            {'key': 'HNBKVNVX', 'value': 'HUA NAN COMMERCIAL BANK, LTD [HNBKVNVX]'},
            {'key': 'ICBKVNVN', 'value': 'ICBC HANOI BRANCH [ICBKVNVN]'},
            {'key': 'IABBVNVX', 'value': 'INDOVINA BANK LTD. [IABBVNVX]'},
            {'key': 'IBKOVNVX', 'value': 'INDUSTRIAL BANK OF KOREA, VIETNAM [IBKOVNVX]'},
            {'key': 'BFTVVNVX', 'value': 'JOINT STOCK COMMERCIAL BANK FOR FOREIGN TRADE OF VIETNAM [BFTVVNVX]'},
            {'key': 'BIDVVNVX', 'value': 'JOINT STOCK COMMERCIAL BANK FOR INVESTMENT AND DEVELOPMENT [BIDVVNVX]'},
            {'key': 'CHASVNVX', 'value': 'JPMORGAN CHASE BANK, N.A. [CHASVNVX]'},
            {'key': 'KLBKVNVX', 'value': 'KIEN LONG COMMERCIAL JOINT STOCK BANK [KLBKVNVX]'},
            {'key': 'CZNBVNVX', 'value': 'KOOKMIN BANK [CZNBVNVX]'},
            {'key': 'KOEXVNVX', 'value': 'KOREA EXCHANGE BANKBRANCH [KOEXVNVX]'},
            {'key': 'LVBKVNVX', 'value': 'LIEN VIET POST JOINT STOCK COMMERCIAL BANK [LVBKVNVX]'},
            {'key': 'MBBEVNVX', 'value': 'MALAYAN BANKING BERHAD [MBBEVNVX]'},
            {'key': 'ICBCVNVX', 'value': 'MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD. [ICBCVNVX]'},
            {'key': 'DABEVNVX', 'value': 'MERCEDES-BENZ VIETNAM LTD. [DABEVNVX]'},
            {'key': 'MSCBVNVX', 'value': 'MILITARY COMMERCIAL JOINT STOCK BANK [MSCBVNVX]'},
            {'key': 'MHCBVNVX', 'value': 'MIZUHO BANK, LTD. [MHCBVNVX]'},
            {'key': 'NAMAVNVX', 'value': 'NAM A COMMERCIAL JOINT STOCK BANK [NAMAVNVX]'},
            {'key': 'NVBAVNVX', 'value': 'NATIONAL CITIZEN COMMERCIAL JOINT STOCK BANK [NVBAVNVX]'},
            {'key': 'BFCEVNVX', 'value': 'NATIXIS BRANCH IN HOCHIMINH CITY [BFCEVNVX]'},
            {'key': 'NASCVNVX', 'value': 'NORTH ASIA COMMERCIAL JOINT - STOCK BANK [NASCVNVX]'},
            {'key': 'OJBAVNVX', 'value': 'OCEAN COMMERCIAL JOINT STOCK BANK [OJBAVNVX]'},
            {'key': 'ORCOVNVX', 'value': 'ORIENT COMMERCIAL JOINT STOCK BANK [ORCOVNVX]'},
            {'key': 'OCBCVNVX', 'value': 'OVERSEA-CHINESE BANKING CORPORATION LIMITED [OCBCVNVX]'},
            {'key': 'PGBLVNVX', 'value': 'PETROLIMEX GROUP COMMERCIAL JOINT STOCK BANK [PGBLVNVX]'},
            {'key': 'SHBAVNVX', 'value': 'SAI GON-HA NOI COMMERCIAL JOINT STOCK BANK [SHBAVNVX]'},
            {'key': 'SBITVNVX', 'value': 'SAIGON BANK FOR INDUSTRY AND TRADE, THE [SBITVNVX]'},
            {'key': 'SACLVNVX', 'value': 'SAIGON COMMERCIAL BANK [SACLVNVX]'},
            {'key': 'SHBKVNVX', 'value': 'SHINHAN BANK VIETNAM [SHBKVNVX]'},
            {'key': 'SEAVVNVX', 'value': 'SOUTHEAST ASIA COMMERCIAL JOINT STOCK BANK [SEAVVNVX]'},
            {'key': 'PNBKVNVX', 'value': 'SOUTHERN COMMERCIAL JOINT STOCK BANK [PNBKVNVX]'},
            {'key': 'SCBLVNVX', 'value': 'STANDARD CHARTERED BANK (VIETNAM) LIMITED [SCBLVNVX]'},
            {'key': 'SCBLVNVH', 'value': 'STANDARD CHARTERED BANK [SCBLVNVH]'},
            {'key': 'SMBCVNVX', 'value': 'SUMITOMO MITSUI BANKING CORPORATION [SMBCVNVX]'},
            {'key': 'SGTTVNVX', 'value': 'Sacombank [SGTTVNVX]'},
            {'key': 'TPBKVNVX', 'value': 'TAIPEI FUBON COMMERCIAL BANK [TPBKVNVX]'},
            {'key': 'BOTKVNV5', 'value': 'THE BANK OF TOKYO-MITSUBISHI UFJ, LTD. [BOTKVNV5]'},
            {'key': 'SCSBVNVX', 'value': 'THE SHANGHAI COMMERCIAL AND SAVINGS BANK, LTD [SCSBVNVX]'},
            {'key': 'TPBVVNVX', 'value': 'TIENPHONG COMMERCIAL JOINT STOCK BANK [TPBVVNVX]'},
            {'key': 'UOVBVNVX', 'value': 'UNITED OVERSEAS BANK LTD. [UOVBVNVX]'},
            {'key': 'VIDPVNV5', 'value': 'VID PUBLIC BANK [VIDPVNV5]'},
            {'key': 'VCBCVNVX', 'value': 'VIET CAPITAL COMMERCIAL JOINT STOCK BANK [VCBCVNVX]'},
            {'key': 'VNTTVNVX', 'value': 'VIET NAM THUONG TIN COMMERCIAL JOINT STOCK BANK [VNTTVNVX]'},
            {'key': 'VNACVNVX', 'value': 'VIETNAM ASIA COMMERCIAL JOINT-STOCK BANK [VNACVNVX]'},
            {'key': 'VBAAVNVXXXX', 'value': 'VIETNAM BANK FOR AGRIC. AND RURAL DEV. [VBAAVNVXXXX]'},
            {'key': 'GTBAVNVX', 'value': 'VIETNAM CONSTRUCTION JOINT STOCK COMMERCIAL BANK [GTBAVNVX]'},
            {'key': 'EBVIVNVX', 'value': 'VIETNAM IMPORT COMMERCIAL JOINT-STOCK BANK [EBVIVNVX]'},
            {'key': 'VNIBVNVX', 'value': 'VIETNAM INTERNATIONAL COMMERCIAL JOINT STOCK BANK [VNIBVNVX]'},
            {'key': 'ICBVVNVX', 'value': 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE [ICBVVNVX]'},
            {'key': 'MCOBVNVX', 'value': 'VIETNAM MARITIME COMMERCIAL STOCK BANK [MCOBVNVX]'},
            {'key': 'VPBKVNVX', 'value': 'VIETNAM PROSPERITY JOINT STOCK COMMERCIAL BANK [VPBKVNVX]'},
            {'key': 'WBVNVNVX', 'value': 'VIETNAM PUBLIC JOINT STOCK COMMERCIAL BANK (PVCOMBANK) [WBVNVNVX]'},
            {'key': 'VRBAVNVX', 'value': 'VIETNAM RUSSIA JOINT VENTURE BANK [VRBAVNVX]'},
            {'key': 'VTCBVNVX', 'value': 'VIETNAM TECHNOLOGICAL AND COMMERCIAL JOINT STOCK BANK [VTCBVNVX]'},
            {'key': 'VNBKVNVX', 'value': 'VINASIAM BANK HOCHIMINH CITY [VNBKVNVX]'},
            {'key': 'HVBKVNVX', 'value': 'WOORI BANK, HANOI [HVBKVNVX]'},
            {'key': 'HVBKVN2X', 'value': 'WOORIBANK HOCHIMINH [HVBKVN2X]'},
            {'key': 'ABBKVNVX', 'value': 'NHTMCP An Binh'},
            {'key': 'ABBKVNVX', 'value': 'ABBank'},
            {'key': 'ANZBVNVX', 'value': 'Australia and New Zealand Banking Group'},
            {'key': 'ANZBVNVX', 'value': 'ANZ Vietnam'},
            {'key': 'ASCBVNVX', 'value': 'NHTMCP A Chau'},
            {'key': 'ASCBVNVX', 'value': 'ACB'},
            {'key': 'BFTVVNVX', 'value': 'NHTMCP Ngoai Thuong Vietnam'},
            {'key': 'BFTVVNVX', 'value': 'VCB'},
            {'key': 'BIDVVNVX', 'value': 'NHTMCP Dau Tu va Phat Trien Vietnam'},
            {'key': 'BIDVVNVX', 'value': 'BIDV Bank'},
            {'key': 'BVBVVNVX', 'value': 'NHTMCP Bao Viet'},
            {'key': 'BVBVVNVX', 'value': 'BVB'},
            {'key': 'EACBVNVX', 'value': 'NHTMCP Dong A'},
            {'key': 'EACBVNVX', 'value': 'Dong A Bank'},
            {'key': 'EBVIVNVX', 'value': 'NHTMCP Xuat Nhap Khau Vietnam'},
            {'key': 'EBVIVNVX', 'value': 'Eximbank'},
            {'key': 'GBNKVNVX', 'value': 'NHTMCP Dau Khi Toan Cau'},
            {'key': 'GBNKVNVX', 'value': 'GP Bank'},
            {'key': 'HDBCVNVX', 'value': 'NHTMCP Phat Trien Thanh Pho HCM'},
            {'key': 'HDBCVNVX', 'value': 'HDBank'},
            {'key': 'HLBBVNVX', 'value': 'NHTNHH MTV Hongleong Vietnam'},
            {'key': 'HLBBVNVX', 'value': 'HLBVN'},
            {'key': 'KLBKVNVX', 'value': 'NHTMCP Kien Long'},
            {'key': 'KLBKVNVX', 'value': 'KienLongBank'},
            {'key': 'LVBKVNVX', 'value': 'NHTMCP Buu Dien Lien Viet'},
            {'key': 'LVBKVNVX', 'value': 'LienVietPostBank'},
            {'key': 'MSCBVNVX', 'value': 'NHTMCP Quan Doi'},
            {'key': 'MSCBVNVX', 'value': 'MBBank'},
            {'key': 'NVBAVNVX', 'value': 'NHTMCP Quoc Dan'},
            {'key': 'NVBAVNVX', 'value': 'NCB'},
            {'key': 'OJBAVNVX', 'value': 'NHTMCP Dai Duong'},
            {'key': 'OJBAVNVX', 'value': 'OceanBank'},
            {'key': 'ORCOVNVX', 'value': 'NHTMCP Phuong Dong'},
            {'key': 'ORCOVNVX', 'value': 'OCB'},
            {'key': 'PGBLVNVX', 'value': 'NHTMCP Xang Dau Petrolimex'},
            {'key': 'PGBLVNVX', 'value': 'PG Bank'},
            {'key': 'SACLVNVX', 'value': 'NHTMCP Saigon'},
            {'key': 'SACLVNVX', 'value': 'SCB'},
            {'key': 'SBITVNVX', 'value': 'NHTMCP Saigon Cong Thuong'},
            {'key': 'SBITVNVX', 'value': 'Saigonbank'},
            {'key': 'SEAVVNVX', 'value': 'NHTMCP Dong Nam A'},
            {'key': 'SEAVVNVX', 'value': 'SeABank'},
            {'key': 'SGTTVNVX', 'value': 'NHTMCP Saigon Thuong Tin'},
            {'key': 'SGTTVNVX', 'value': 'Sacombank'},
            {'key': 'SHBAVNVX', 'value': 'NHTMCP Sai Gon Ha Noi'},
            {'key': 'SHBAVNVX', 'value': 'SHB'},
            {'key': 'SHBKVNVX', 'value': 'NHTNHH MTV Shinhan Vietnam'},
            {'key': 'SHBKVNVX', 'value': 'ShinhanVN'},
            {'key': 'TPBVVNVX', 'value': 'NHTMCP Tien Phong'},
            {'key': 'TPBVVNVX', 'value': 'TPBank'},
            {'key': 'VCBCVNVX', 'value': 'NHTMCP Ban Viet'},
            {'key': 'VCBCVNVX', 'value': 'Vietcapital Bank'},
            {'key': 'VIDPVNV5', 'value': 'NHTNHH MTV Public Vietnam'},
            {'key': 'VIDPVNV5', 'value': 'Public Bank VN'},
            {'key': 'VNIBVNVX', 'value': 'NHTMCP Quoc Te Vietnam'},
            {'key': 'VNIBVNVX', 'value': 'VIB'},
            {'key': 'VNTTVNVX', 'value': 'NH Vietnam Thuong Tin'},
            {'key': 'VNTTVNVX', 'value': 'VietBank'},
            {'key': 'VPBKVNVX', 'value': 'NHTMCP Vietnam Thinh Vuong'},
            {'key': 'VPBKVNVX', 'value': 'VPBank'},
            {'key': 'VRBAVNVX', 'value': 'NH Lien Doanh Viet Nga'},
            {'key': 'VRBAVNVX', 'value': 'VRBank'},
            {'key': 'VTCBVNVX', 'value': 'NHTMCP Ky Thuong Vietnam'},
            {'key': 'VTCBVNVX', 'value': 'Techcombank'},
            {'key': 'WBVNVNVX', 'value': 'NHTMCP Dai Chung Vietnam'},
            {'key': 'WBVNVNVX', 'value': 'PVcomBank'}
        ];
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormDropdown default={this.props.default} name="bankCode" value={this.props.bankCode} description={<Translate text="Bank code"/>} onChange={this.props.onChange} items={bankCodes} />
                <FormInput default={this.props.default} name="branchCode" value={this.props.branchCode} description={<Translate text="Branch code"/>}  />

            </div>
        );
    }
}

class SwissLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormInput default={this.props.default} name="branchCode" value={this.props.branchCode} description={<Translate text="Branch code"/>} onChange={this.props.onChange}  />
            </div>
        );
    }
}


class MalaysianLocalRecipient extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const bankCodes = [
            {'key': 'PHBMMYKL', 'value': 'Affin Bank'},
            {'key': 'AIBBMYKL', 'value': 'Affin Islamic Bank'},
            {'key': 'AGISMYK1', 'value': 'Agro Bank / Bank Pertanian'},
            {'key': 'RJHIMYKL', 'value': 'Al Rajhi Banking and Investment Corporation'},
            {'key': 'MFBBMYKL', 'value': 'Alliance Bank'},
            {'key': 'ALSRMYK1', 'value': 'Alliance Islamic Bank'},
            {'key': 'ARBKMYKL', 'value': 'Ambank '},
            {'key': 'AMMBMYKL', 'value': 'Aminvestment Bank '},
            {'key': 'AISLMYKL', 'value': 'Amislamic Bank'},
            {'key': 'AFBQMYKL', 'value': 'Asian Finance Bank '},
            {'key': 'BNPAMYKA', 'value': 'BNP Paribas'},
            {'key': 'BNPAMYKL', 'value': 'BNP Paribas (Islamic)'},
            {'key': 'BIMBMYKL', 'value': 'Bank Islam'},
            {'key': 'BISLMYKA', 'value': 'Bank Islam (Labuan)'},
            {'key': 'BKRMMYKL', 'value': 'Bank Kerjasama Rakyat / Bank Rakyat'},
            {'key': 'BMMBMYKL', 'value': 'Bank Muamalat'},
            {'key': 'BOFAMY2X', 'value': 'Bank Of America '},
            {'key': 'BOTKMYKX', 'value': 'Bank Of Tokyo Mitsubishi UFJ'},
            {'key': 'BSNAMYK1', 'value': 'Bank Simpanan Nasional'},
            {'key': 'CIBBMYKL', 'value': 'CIMB Bank'},
            {'key': 'CTBBMYKL', 'value': 'CIMB Islamic Bank'},
            {'key': 'CANHMYKL', 'value': 'CIMB Principal Asset Management '},
            {'key': 'CITIMYKL', 'value': 'Citibank '},
            {'key': 'DEUTMYKL', 'value': 'Deutsche Bank'},
            {'key': 'HMABMYKL', 'value': 'HSBC Amanah'},
            {'key': 'HBMBMYKL', 'value': 'HSBC Bank'},
            {'key': 'HLBBMYKLXXX', 'value': 'Hong Leong Bank'},
            {'key': 'HLIBMYKL', 'value': 'Hong Leong Islamic Bank'},
            {'key': 'ICBKMYKL', 'value': 'Industrial and Commercial Bank Of China'},
            {'key': 'CHASMYKX', 'value': 'J.P. Morgan Chase Bank'},
            {'key': 'CHASMY2A', 'value': 'J.P. Morgan Chase Bank (Labuan)'},
            {'key': 'KFHOMYKL', 'value': 'Kuwait Finance House'},
            {'key': 'MBBEMYKL', 'value': 'Maybank / Malayan Banking'},
            {'key': 'MBBEMYKA', 'value': 'Maybank International'},
            {'key': 'MBBEMY2L', 'value': 'Maybank International (Labuan)'},
            {'key': 'MBISMYK1', 'value': 'Maybank Islamic'},
            {'key': 'MHCBMYKA', 'value': 'Mizuho Bank'},
            {'key': 'OABBMYKL', 'value': 'OCBC Al Amin Bank '},
            {'key': 'OCBCMYKL', 'value': 'OCBC Bank (Oversea Chinese Banking Corporation)'},
            {'key': 'PBLLMYKA', 'value': 'PUBLIC BANK (L) LTD'},
            {'key': 'PBBEMYKL', 'value': 'Public Bank'},
            {'key': 'PIBEMYK1', 'value': 'Public Islamic Bank'},
            {'key': 'RHBBMYKA', 'value': 'RHB BANK (L) LTD'},
            {'key': 'RHBBMYKL', 'value': 'RHB Bank'},
            {'key': 'OSKIMYKL', 'value': 'RHB Investment Bank'},
            {'key': 'RHBAMYKL', 'value': 'RHB Islamic Bank'},
            {'key': 'SCBLMYKX', 'value': 'Standard Chartered Bank'},
            {'key': 'SCSRMYK1', 'value': 'Standard Chartered Saadiq '},
            {'key': 'SMBCMYKL', 'value': 'Sumitomo Mitsui Banking Corporation'},
            {'key': ' ANAMYKL', 'value': 'The Royal Bank Of Scotland'},
            {'key': 'UOVBMYKL', 'value': 'United Overseas Bank'},
            {'key': 'UOVBMY2L', 'value': 'United Overseas Bank (Labuan)'}
        ];
        return(
            <div>
                <FormInput default={this.props.default} name="accountNumber" value={this.props.accountNumber} description={<Translate text="Account number"/>} onChange={this.props.onChange}  />
                <FormDropdown default={this.props.default} name="bankCode" value={this.props.bankCode} description={<Translate text="Bank code"/>} onChange={this.props.onChange} items={bankCodes} />
            </div>
        );
    }
}
