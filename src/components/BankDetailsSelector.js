import React from "react";
import SortCodeRecipient from '../bankdetails/SortCodeRecipient.js'
import IbanRecipient from '../bankdetails/IbanRecipient.js'
import AbaRecipient from '../bankdetails/AbaRecipient.js'
import IndianRecipient from '../bankdetails/IndianRecipient.js'
import AustralianLocalRecipient from '../bankdetails/AustralianLocalRecipient.js'
import AustralianBusinessRecipient from '../bankdetails/AustralianBusinessRecipient.js'
import {
  SwiftRecipient,
  SwedishLocalRecipient,
  CanadianRecipient,
  PolishLocalRecipient,
  HungarianLocalRecipient,
  SingaporeanRecipient,
  HongkongRecipient,
  NewzealandRecipient,
  CzechLocalRecipient,
  BangladeshRecipient,
  ChineseCardRecipient,
  VietnamEarthportRecipient,
  SwissLocalRecipient,
  MalaysianLocalRecipient,
  ArgentinaRecipient,
  BrazilRecipient,
  ChileRecipient,
  ThailandRecipient,
  EgyptLocalRecipient,
  GhanaLocalRecipient,
  KenyaLocalRecipient,
  MexicanRecipient,
  IndonesianRecipient,
  JapaneseRecipient,
  SriLankaRecipient,
  MoroccoRecipient,
  NigeriaRecipient,
  NepalRecipient,
  PeruRecipient,
  PhilippinesRecipient,
  SouthAfricaRecipient,
  BotswanaLocalRecipient,
  NotAvaialableRecipient
} from '../bankdetails/BankDetails.js'

export default class BankDetailsSelectorContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps){
      if(prevProps.bankDetailsType !== this.props.bankDetailsType){
        this.props.clearBankDetails()
      }
    }

    render(){
        return (
          <BankDetailsSelector {...this.props} />
        );
    }
}


function BankDetailsSelector(props){
  switch(props.bankDetailsType){
    case 'IBAN':
        return (
          <IbanRecipient 
            iban={props.iban} 
            onChange={props.onChange}
          />
        );
    case 'SWIFT_CODE':
        return (
          <SwiftRecipient 
             accountNumber={props.accountNumber} 
             bic={props.bic}
             onChange={props.onChange}
          />
        );
    case 'SORT_CODE':
        return (
          <SortCodeRecipient 
            sortCode={props.sortCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'SWEDEN_LOCAL':
        return (
          <SwedishLocalRecipient 
            clearingNumber={props.clearingNumber} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'ABA':
        return (
          <AbaRecipient 
            accountType={props.accountType} 
            abartn={props.abartn}
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'AUSTRALIAN':
        return (
          <AustralianLocalRecipient 
            bsbCode={props.bsbCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'AUSTRALIAN_BUSINESS':
        return (
          <AustralianBusinessRecipient 
            bsbCode={props.bsbCode} 
            accountNumber={props.accountNumber}
            businessNumber={props.businessNumber}
            onChange={props.onChange}
          />
        );
    case 'CANADIAN':
        return (
          <CanadianRecipient 
            institutionNumber={props.institutionNumber} 
            transitNumber={props.transitNumber}
            accountNumber={props.accountNumber}
            accountType={props.accountType}
            onChange={props.onChange}
          />
        );
    case 'POLISH':
        return (
          <PolishLocalRecipient 
            accountNumber={props.accountNumber} 
            bic={props.bic}
            onChange={props.onChange}
          />
        );
    case 'HUNGARIAN':
        return (
          <HungarianLocalRecipient 
            accountNumber={props.accountNumber} 
            onChange={props.onChange}
          />
        );
    case 'INDIAN':
        return (
          <IndianRecipient 
            ifscCode={props.ifscCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'SINGAPORE':
        return (
          <SingaporeanRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'HONGKONG':
        return (
          <HongkongRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'NEWZEALAND':
        return (
          <NewzealandRecipient 
            accountNumber={props.accountNumber} 
            onChange={props.onChange}
          />
        );
    case 'CZECH':
        return (
          <CzechLocalRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'BANGLADESH':
        return (
          <BangladeshRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode} branchCode={props.branchCode}
            onChange={props.onChange} 
          />
        );
    case 'CHINESE_CARD':
        return (
          <ChineseCardRecipient 
            cardNumber={props.cardNumber} 
            onChange={props.onChange}
          />
        );
    case 'VIETNAME_EARTHPORT':
        return (
          <VietnamEarthportRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode} branchCode={props.branchCode}
            onChange={props.onChange}
          />
        );
    case 'SWISS':
        return (
          <SwissLocalRecipient 
            accountNumber={props.accountNumber} 
            branchCode={props.branchCode}
            onChange={props.onChange}
          />
        );
    case 'MALAYSIAN':
        return (
          <MalaysianLocalRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'ISRAELI_LOCAL':
        return (
          <IbanRecipient 
            iban={props.iban} 
            onChange={props.onChange}
          />
        );
    case 'TURKISH_EARTHPORT':
        return (
          <IbanRecipient 
            iban={props.iban} 
            onChange={props.onChange}
          />
        );
    case 'EMIRATES':
        return (
          <IbanRecipient 
            iban={props.iban} 
            onChange={props.onChange}
          />
        );
    case 'ARGENTINA':
        return (
          <ArgentinaRecipient 
            accountNumber={props.accountNumber} 
            taxId={props.taxId}
            onChange={props.onChange}
          />
        );
    case 'BRAZIL':
        return (
          <BrazilRecipient 
            accountNumber={props.accountNumber} 
            cpf={props.cpf}
            accountType={props.accountType}
            bankCode={props.bankCode}
            branchCode={props.branchCode}
            onChange={props.onChange}
          />
        );
    case 'CHILE':
        return (
          <ChileRecipient 
            accountNumber={props.accountNumber} 
            rut={props.rut}
            accountType={props.accountType}
            bankCode={props.bankCode}
            branchCode={props.branchCode}
            onChange={props.onChange}
          />
        );
    case 'THAILAND':
        return (
          <ThailandRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'EGYPT_LOCAL':
        return (
          <EgyptLocalRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'BULGARIA':
        return (
          <IbanRecipient 
            iban={props.iban} 
            onChange={props.onChange}
          />
        );
    case 'GHANA_LOCAL':
        return (
          <GhanaLocalRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'KENYA_LOCAL':
        return (
          <KenyaLocalRecipient 
            accountNumber={props.accountNumber} 
            bankCode={props.bankCode}
            onChange={props.onChange}
          />
        );
    case 'MEXICAN':
        return (
          <MexicanRecipient 
            clabe={props.clabe} 
            onChange={props.onChange}
          />
        );
    case 'INDONESIAN':
        return (
          <IndonesianRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'JAPANESE':
        return (
          <JapaneseRecipient 
            accountNumber={props.accountNumber} 
            accountType={props.accountType}
            bankCode={props.bankCode}
            branchCode={props.branchCode}
            onChange={props.onChange}
          />
        );
    case 'SRILANKA':
        return (
          <SriLankaRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'MOROCCO':
        return (
          <MoroccoRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'NIGERIA':
        return (
          <NigeriaRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'NEPAL':
        return (
          <NepalRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'PERU':
        return (
          <PeruRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            accountType={props.accountType}
            idDocumentType={props.idDocumentType}
            idDocumentNumber={props.idDocumentNumber}
            phoneNumber={props.phoneNumber}
            onChange={props.onChange}
          />
        );
    case 'PHILIPPINES':
        return (
          <PhilippinesRecipient 
            bankCode={props.bankCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'SOUTHAFRICA':
        return (
          <SouthAfricaRecipient 
            swiftCode={props.swiftCode} 
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    case 'BOTSWANA_LOCAL':
        return (
          <BotswanaLocalRecipient 
            bankCode={props.bankCode} 
            branchCode={props.branchCode}
            accountNumber={props.accountNumber}
            onChange={props.onChange}
          />
        );
    default:  
        return (
          <NotAvaialableRecipient 
             onChange={props.onChange}
          />
        );
  }
}
