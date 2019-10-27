const currencies = [
    {
        "country": "United Arab Emirates",
        "country_iso_2_char_code": "AE",
        "country_iso_3_char_code": "ARE",
        "un_m49": 784,
        "currency_iso_3_char_code": "AED",
        "currency_name": "UAE dirham",
        "recipient_type": "EMIRATES",
        "recipient_name": "Emirates local"
    },
    {
        "country": "Argentina",
        "country_iso_2_char_code": "AR",
        "country_iso_3_char_code": "ARG",
        "un_m49": 32,
        "currency_iso_3_char_code": "ARS",
        "currency_name": "Argentine peso",
        "recipient_type": "ARGENTINA",
        "recipient_name": "Argentinian Local"
    },
    {
        "country": "Australia",
        "country_iso_2_char_code": "AU",
        "country_iso_3_char_code": "AUS",
        "un_m49": 36,
        "currency_iso_3_char_code": "AUD",
        "currency_name": "Australian dollar",
        "recipient_type": "AUSTRALIAN",
        "recipient_name": "Australian local"
    },
    {
        "country": "Australia",
        "country_iso_2_char_code": "AU",
        "country_iso_3_char_code": "AUS",
        "un_m49": 36,
        "currency_iso_3_char_code": "AUD",
        "currency_name": "Australian dollar",
        "recipient_type": "AUSTRALIAN_BUSINESS",
        "recipient_name": "Australian local business"
    },
    {
        "country": "Bangladesh",
        "country_iso_2_char_code": "BD",
        "country_iso_3_char_code": "BGD",
        "un_m49": 50,
        "currency_iso_3_char_code": "BDT",
        "currency_name": "Bangladeshi taka",
        "recipient_type": "BANGLADESH",
        "recipient_name": "BANGLADESH"
    },
    {
        "country": "Bulgaria",
        "country_iso_2_char_code": "BG",
        "country_iso_3_char_code": "BGR",
        "un_m49": 100,
        "currency_iso_3_char_code": "BGN",
        "currency_name": "Bulgarian lev",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Brazil",
        "country_iso_2_char_code": "BR",
        "country_iso_3_char_code": "BRA",
        "un_m49": 76,
        "currency_iso_3_char_code": "BRL",
        "currency_name": "Brazilian real",
        "recipient_type": "BRAZIL",
        "recipient_name": "Brazil local"
    },
    {
        "country": "Canada",
        "country_iso_2_char_code": "CA",
        "country_iso_3_char_code": "CAN",
        "un_m49": 124,
        "currency_iso_3_char_code": "CAD",
        "currency_name": "Canadian dollar",
        "recipient_type": "CANADIAN",
        "recipient_name": "Canada local"
    },
    {
        "country": "Switzerland",
        "country_iso_2_char_code": "CH",
        "country_iso_3_char_code": "CHE",
        "un_m49": 756,
        "currency_iso_3_char_code": "CHF",
        "currency_name": "Swiss franc",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Switzerland",
        "country_iso_2_char_code": "CH",
        "country_iso_3_char_code": "CHE",
        "un_m49": 756,
        "currency_iso_3_char_code": "CHF",
        "currency_name": "Swiss franc",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Liechtenstein",
        "country_iso_2_char_code": "LI",
        "country_iso_3_char_code": "LIE",
        "un_m49": 438,
        "currency_iso_3_char_code": "CHF",
        "currency_name": "Swiss franc",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Chile",
        "country_iso_2_char_code": "CL",
        "country_iso_3_char_code": "CHL",
        "un_m49": 152,
        "currency_iso_3_char_code": "CLP",
        "currency_name": "Chilean peso",
        "recipient_type": "CHILE",
        "recipient_name": "Chilean local"
    },
    {
        "country": "China",
        "country_iso_2_char_code": "CN",
        "country_iso_3_char_code": "CHN",
        "un_m49": 156,
        "currency_iso_3_char_code": "CNY",
        "currency_name": "Chinese Yuan Renminbi",
        "recipient_type": "CHINESE_CARD",
        "recipient_name": "UnionPay card"
    },
    {
        "country": "Colombia",
        "country_iso_2_char_code": "CO",
        "country_iso_3_char_code": "COL",
        "un_m49": 170,
        "currency_iso_3_char_code": "COP",
        "currency_name": "Colombian peso",
        "recipient_type": "COLOMBIA",
        "recipient_name": "COLOMBIA"
    },
    {
        "country": "Czech Republic",
        "country_iso_2_char_code": "CZ",
        "country_iso_3_char_code": "CZE",
        "un_m49": 203,
        "currency_iso_3_char_code": "CZK",
        "currency_name": "Czech koruna",
        "recipient_type": "CZECH",
        "recipient_name": "Czech Local"
    },
    {
        "country": "Czech Republic",
        "country_iso_2_char_code": "CZ",
        "country_iso_3_char_code": "CZE",
        "un_m49": 203,
        "currency_iso_3_char_code": "CZK",
        "currency_name": "Czech koruna",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Denmark",
        "country_iso_2_char_code": "DK",
        "country_iso_3_char_code": "DNK",
        "un_m49": 208,
        "currency_iso_3_char_code": "DKK",
        "currency_name": "Danish krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Faroe Islands",
        "country_iso_2_char_code": "FO",
        "country_iso_3_char_code": "FRO",
        "un_m49": 234,
        "currency_iso_3_char_code": "DKK",
        "currency_name": "Danish krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Greenland",
        "country_iso_2_char_code": "GL",
        "country_iso_3_char_code": "GRL",
        "un_m49": 304,
        "currency_iso_3_char_code": "DKK",
        "currency_name": "Danish krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Denmark",
        "country_iso_2_char_code": "DK",
        "country_iso_3_char_code": "DNK",
        "un_m49": 208,
        "currency_iso_3_char_code": "DKK",
        "currency_name": "Danish krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Egypt",
        "country_iso_2_char_code": "EG",
        "country_iso_3_char_code": "EGY",
        "un_m49": 818,
        "currency_iso_3_char_code": "EGP",
        "currency_name": "Egyptian pound",
        "recipient_type": "EGYPT_LOCAL",
        "recipient_name": "Egypt Local"
    },
    {
        "country": "Aland Islands",
        "country_iso_2_char_code": "AX",
        "country_iso_3_char_code": "ALA",
        "un_m49": 248,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Andorra",
        "country_iso_2_char_code": "AD",
        "country_iso_3_char_code": "AND",
        "un_m49": 20,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "French Southern Territories",
        "country_iso_2_char_code": "TF",
        "country_iso_3_char_code": "ATF",
        "un_m49": 260,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Austria",
        "country_iso_2_char_code": "AT",
        "country_iso_3_char_code": "AUT",
        "un_m49": 40,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Belgium",
        "country_iso_2_char_code": "BE",
        "country_iso_3_char_code": "BEL",
        "un_m49": 56,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Saint-Barthélemy",
        "country_iso_2_char_code": "BL",
        "country_iso_3_char_code": "BLM",
        "un_m49": 652,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Cyprus",
        "country_iso_2_char_code": "CY",
        "country_iso_3_char_code": "CYP",
        "un_m49": 196,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Germany",
        "country_iso_2_char_code": "DE",
        "country_iso_3_char_code": "DEU",
        "un_m49": 276,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Spain",
        "country_iso_2_char_code": "ES",
        "country_iso_3_char_code": "ESP",
        "un_m49": 724,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Estonia",
        "country_iso_2_char_code": "EE",
        "country_iso_3_char_code": "EST",
        "un_m49": 233,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Finland",
        "country_iso_2_char_code": "FI",
        "country_iso_3_char_code": "FIN",
        "un_m49": 246,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "France",
        "country_iso_2_char_code": "FR",
        "country_iso_3_char_code": "FRA",
        "un_m49": 250,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Guadeloupe",
        "country_iso_2_char_code": "GP",
        "country_iso_3_char_code": "GLP",
        "un_m49": 312,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Greece",
        "country_iso_2_char_code": "GR",
        "country_iso_3_char_code": "GRC",
        "un_m49": 300,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "French Guiana",
        "country_iso_2_char_code": "GF",
        "country_iso_3_char_code": "GUF",
        "un_m49": 254,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Ireland",
        "country_iso_2_char_code": "IE",
        "country_iso_3_char_code": "IRL",
        "un_m49": 372,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Italy",
        "country_iso_2_char_code": "IT",
        "country_iso_3_char_code": "ITA",
        "un_m49": 380,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Lithuania",
        "country_iso_2_char_code": "LT",
        "country_iso_3_char_code": "LTU",
        "un_m49": 440,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Luxembourg",
        "country_iso_2_char_code": "LU",
        "country_iso_3_char_code": "LUX",
        "un_m49": 442,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Latvia",
        "country_iso_2_char_code": "LV",
        "country_iso_3_char_code": "LVA",
        "un_m49": 428,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Saint-Martin (French part)",
        "country_iso_2_char_code": "MF",
        "country_iso_3_char_code": "MAF",
        "un_m49": 663,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Monaco",
        "country_iso_2_char_code": "MC",
        "country_iso_3_char_code": "MCO",
        "un_m49": 492,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Malta",
        "country_iso_2_char_code": "MT",
        "country_iso_3_char_code": "MLT",
        "un_m49": 470,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Montenegro",
        "country_iso_2_char_code": "ME",
        "country_iso_3_char_code": "MNE",
        "un_m49": 499,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Martinique",
        "country_iso_2_char_code": "MQ",
        "country_iso_3_char_code": "MTQ",
        "un_m49": 474,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Mayotte",
        "country_iso_2_char_code": "YT",
        "country_iso_3_char_code": "MYT",
        "un_m49": 175,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Netherlands",
        "country_iso_2_char_code": "NL",
        "country_iso_3_char_code": "NLD",
        "un_m49": 528,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Portugal",
        "country_iso_2_char_code": "PT",
        "country_iso_3_char_code": "PRT",
        "un_m49": 620,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Réunion",
        "country_iso_2_char_code": "RE",
        "country_iso_3_char_code": "REU",
        "un_m49": 638,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "San Marino",
        "country_iso_2_char_code": "SM",
        "country_iso_3_char_code": "SMR",
        "un_m49": 674,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "country_iso_2_char_code": "PM",
        "country_iso_3_char_code": "SPM",
        "un_m49": 666,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Slovakia",
        "country_iso_2_char_code": "SK",
        "country_iso_3_char_code": "SVK",
        "un_m49": 703,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Slovenia",
        "country_iso_2_char_code": "SI",
        "country_iso_3_char_code": "SVN",
        "un_m49": 705,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Holy See (Vatican City State)",
        "country_iso_2_char_code": "VA",
        "country_iso_3_char_code": "VAT",
        "un_m49": 336,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Aland Islands",
        "country_iso_2_char_code": "AX",
        "country_iso_3_char_code": "ALA",
        "un_m49": 248,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "United Kingdom",
        "country_iso_2_char_code": "GB",
        "country_iso_3_char_code": "GBR",
        "un_m49": 826,
        "currency_iso_3_char_code": "GBP",
        "currency_name": "Pound sterling",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "United Kingdom",
        "country_iso_2_char_code": "GB",
        "country_iso_3_char_code": "GBR",
        "un_m49": 826,
        "currency_iso_3_char_code": "GBP",
        "currency_name": "Pound sterling",
        "recipient_type": "SORT_CODE",
        "recipient_name": "UK Sort"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "country_iso_2_char_code": "GS",
        "country_iso_3_char_code": "SGS",
        "un_m49": 239,
        "currency_iso_3_char_code": "GBP",
        "currency_name": "Pound sterling",
        "recipient_type": "SORT_CODE",
        "recipient_name": "UK Sort"
    },
    {
        "country": "Ghana",
        "country_iso_2_char_code": "GH",
        "country_iso_3_char_code": "GHA",
        "un_m49": 288,
        "currency_iso_3_char_code": "GHS",
        "currency_name": "Ghanaian cedi",
        "recipient_type": "GHANA",
        "recipient_name": "Ghana local"
    },
    {
        "country": "Gibraltar",
        "country_iso_2_char_code": "GI",
        "country_iso_3_char_code": "GIB",
        "un_m49": 292,
        "currency_iso_3_char_code": "GIP",
        "currency_name": "Gibraltar pound",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Gibraltar",
        "country_iso_2_char_code": "GI",
        "country_iso_3_char_code": "GIB",
        "un_m49": 292,
        "currency_iso_3_char_code": "GIP",
        "currency_name": "Gibraltar pound",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Hong Kong, SAR China",
        "country_iso_2_char_code": "HK",
        "country_iso_3_char_code": "HKG",
        "un_m49": 344,
        "currency_iso_3_char_code": "HKD",
        "currency_name": "Hong Kong dollar",
        "recipient_type": "HONGKONG",
        "recipient_name": "Hong Kong"
    },
    {
        "country": "Croatia",
        "country_iso_2_char_code": "HR",
        "country_iso_3_char_code": "HRV",
        "un_m49": 191,
        "currency_iso_3_char_code": "HRK",
        "currency_name": "Croatian kuna",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Croatia",
        "country_iso_2_char_code": "HR",
        "country_iso_3_char_code": "HRV",
        "un_m49": 191,
        "currency_iso_3_char_code": "HRK",
        "currency_name": "Croatian kuna",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Hungary",
        "country_iso_2_char_code": "HU",
        "country_iso_3_char_code": "HUN",
        "un_m49": 348,
        "currency_iso_3_char_code": "HUF",
        "currency_name": "Hungarian forint",
        "recipient_type": "HUNGARIAN",
        "recipient_name": "Hungarian local"
    },
    {
        "country": "Hungary",
        "country_iso_2_char_code": "HU",
        "country_iso_3_char_code": "HUN",
        "un_m49": 348,
        "currency_iso_3_char_code": "HUF",
        "currency_name": "Hungarian forint",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Indonesia",
        "country_iso_2_char_code": "ID",
        "country_iso_3_char_code": "IDN",
        "un_m49": 360,
        "currency_iso_3_char_code": "IDR",
        "currency_name": "Indonesian rupiah",
        "recipient_type": "INDONESIAN",
        "recipient_name": "Indonesian local"
    },
    {
        "country": "Israel",
        "country_iso_2_char_code": "IL",
        "country_iso_3_char_code": "ISR",
        "un_m49": 376,
        "currency_iso_3_char_code": "ILS",
        "currency_name": "Israeli new shekel",
        "recipient_type": "ISRAELI_LOCAL",
        "recipient_name": "IBAN Format"
    },
    {
        "country": "Palestinian Territory",
        "country_iso_2_char_code": "PS",
        "country_iso_3_char_code": "PSE",
        "un_m49": 275,
        "currency_iso_3_char_code": "ILS",
        "currency_name": "Israeli new shekel",
        "recipient_type": "ISRAELI_LOCAL",
        "recipient_name": "IBAN Format"
    },
    {
        "country": "Iceland",
        "country_iso_2_char_code": "IS",
        "country_iso_3_char_code": "ISL",
        "un_m49": 352,
        "currency_iso_3_char_code": "ISK",
        "currency_name": "Icelandic krona",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Iceland",
        "country_iso_2_char_code": "IS",
        "country_iso_3_char_code": "ISL",
        "un_m49": 352,
        "currency_iso_3_char_code": "ISK",
        "currency_name": "Icelandic krona",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Japan",
        "country_iso_2_char_code": "JP",
        "country_iso_3_char_code": "JPN",
        "un_m49": 392,
        "currency_iso_3_char_code": "JPY",
        "currency_name": "Japanese yen",
        "recipient_type": "JAPANESE",
        "recipient_name": "Japanese local"
    },
    {
        "country": "Kenya",
        "country_iso_2_char_code": "KE",
        "country_iso_3_char_code": "KEN",
        "un_m49": 404,
        "currency_iso_3_char_code": "KES",
        "currency_name": "Kenyan shilling",
        "recipient_type": "KENYA_LOCAL",
        "recipient_name": "Bank account"
    },
    {
        "country": "Kenya",
        "country_iso_2_char_code": "KE",
        "country_iso_3_char_code": "KEN",
        "un_m49": 404,
        "currency_iso_3_char_code": "KES",
        "currency_name": "Kenyan shilling",
        "recipient_type": "KENYA_MOBILE",
        "recipient_name": "M-PESA"
    },
    {
        "country": "Korea (South)",
        "country_iso_2_char_code": "KR",
        "country_iso_3_char_code": "KOR",
        "un_m49": 410,
        "currency_iso_3_char_code": "KRW",
        "currency_name": "South Korean won",
        "recipient_type": "SOUTH_KOREAN_PAYGATE",
        "recipient_name": "SOUTH_KOREAN_PAYGATE"
    },
    {
        "country": "Sri Lanka",
        "country_iso_2_char_code": "LK",
        "country_iso_3_char_code": "LKA",
        "un_m49": 144,
        "currency_iso_3_char_code": "LKR",
        "currency_name": "Sri Lankan rupee",
        "recipient_type": "SRILANKA",
        "recipient_name": "SRILANKA"
    },
    {
        "country": "Western Sahara",
        "country_iso_2_char_code": "EH",
        "country_iso_3_char_code": "ESH",
        "un_m49": 732,
        "currency_iso_3_char_code": "MAD",
        "currency_name": "Moroccan dirham",
        "recipient_type": "MOROCCO",
        "recipient_name": "Moroccan local"
    },
    {
        "country": "Morocco",
        "country_iso_2_char_code": "MA",
        "country_iso_3_char_code": "MAR",
        "un_m49": 504,
        "currency_iso_3_char_code": "MAD",
        "currency_name": "Moroccan dirham",
        "recipient_type": "MOROCCO",
        "recipient_name": "Moroccan local"
    },
    {
        "country": "Mexico",
        "country_iso_2_char_code": "MX",
        "country_iso_3_char_code": "MEX",
        "un_m49": 484,
        "currency_iso_3_char_code": "MXN",
        "currency_name": "Mexican peso",
        "recipient_type": "MEXICAN",
        "recipient_name": "Mexican Local"
    },
    {
        "country": "Mexico",
        "country_iso_2_char_code": "MX",
        "country_iso_3_char_code": "MEX",
        "un_m49": 484,
        "currency_iso_3_char_code": "MXN",
        "currency_name": "Mexican peso",
        "recipient_type": "MEXICAN _WP",
        "recipient_name": "#N/A"
    },
    {
        "country": "Malaysia",
        "country_iso_2_char_code": "MY",
        "country_iso_3_char_code": "MYS",
        "un_m49": 458,
        "currency_iso_3_char_code": "MYR",
        "currency_name": "Malaysian ringgit",
        "recipient_type": "MALAYSIAN",
        "recipient_name": "Malaysian Local"
    },
    {
        "country": "Nigeria",
        "country_iso_2_char_code": "NG",
        "country_iso_3_char_code": "NGA",
        "un_m49": 566,
        "currency_iso_3_char_code": "NGN",
        "currency_name": "Nigerian naira",
        "recipient_type": "NIGERIA",
        "recipient_name": "Nigerian local"
    },
    {
        "country": "Bouvet Island",
        "country_iso_2_char_code": "BV",
        "country_iso_3_char_code": "BVT",
        "un_m49": 74,
        "currency_iso_3_char_code": "NOK",
        "currency_name": "Norwegian krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Norway",
        "country_iso_2_char_code": "NO",
        "country_iso_3_char_code": "NOR",
        "un_m49": 578,
        "currency_iso_3_char_code": "NOK",
        "currency_name": "Norwegian krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Svalbard and Jan Mayen Islands",
        "country_iso_2_char_code": "SJ",
        "country_iso_3_char_code": "SJM",
        "un_m49": 744,
        "currency_iso_3_char_code": "NOK",
        "currency_name": "Norwegian krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Bouvet Island",
        "country_iso_2_char_code": "BV",
        "country_iso_3_char_code": "BVT",
        "un_m49": 74,
        "currency_iso_3_char_code": "NOK",
        "currency_name": "Norwegian krone",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Nepal",
        "country_iso_2_char_code": "NP",
        "country_iso_3_char_code": "NPL",
        "un_m49": 524,
        "currency_iso_3_char_code": "NPR",
        "currency_name": "Nepalese rupee",
        "recipient_type": "NEPAL",
        "recipient_name": "NEPAL"
    },
    {
        "country": "Niue",
        "country_iso_2_char_code": "NU",
        "country_iso_3_char_code": "NIU",
        "un_m49": 570,
        "currency_iso_3_char_code": "NZD",
        "currency_name": "New Zealand dollar",
        "recipient_type": "NEWZEALAND",
        "recipient_name": "New Zealand local"
    },
    {
        "country": "New Zealand",
        "country_iso_2_char_code": "NZ",
        "country_iso_3_char_code": "NZL",
        "un_m49": 554,
        "currency_iso_3_char_code": "NZD",
        "currency_name": "New Zealand dollar",
        "recipient_type": "NEWZEALAND",
        "recipient_name": "New Zealand local"
    },
    {
        "country": "Pitcairn",
        "country_iso_2_char_code": "PN",
        "country_iso_3_char_code": "PCN",
        "un_m49": 612,
        "currency_iso_3_char_code": "NZD",
        "currency_name": "New Zealand dollar",
        "recipient_type": "NEWZEALAND",
        "recipient_name": "New Zealand local"
    },
    {
        "country": "Tokelau",
        "country_iso_2_char_code": "TK",
        "country_iso_3_char_code": "TKL",
        "un_m49": 772,
        "currency_iso_3_char_code": "NZD",
        "currency_name": "New Zealand dollar",
        "recipient_type": "NEWZEALAND",
        "recipient_name": "New Zealand local"
    },
    {
        "country": "Peru",
        "country_iso_2_char_code": "PE",
        "country_iso_3_char_code": "PER",
        "un_m49": 604,
        "currency_iso_3_char_code": "PEN",
        "currency_name": "Peruvian sol",
        "recipient_type": "PERU",
        "recipient_name": "PERU"
    },
    {
        "country": "Philippines",
        "country_iso_2_char_code": "PH",
        "country_iso_3_char_code": "PHL",
        "un_m49": 608,
        "currency_iso_3_char_code": "PHP",
        "currency_name": "Philippine peso",
        "recipient_type": "PHILIPPINES",
        "recipient_name": "Philippines Local"
    },
    {
        "country": "Pakistan",
        "country_iso_2_char_code": "PK",
        "country_iso_3_char_code": "PAK",
        "un_m49": 586,
        "currency_iso_3_char_code": "PKR",
        "currency_name": "Pakistani rupee",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Poland",
        "country_iso_2_char_code": "PL",
        "country_iso_3_char_code": "POL",
        "un_m49": 616,
        "currency_iso_3_char_code": "PLN",
        "currency_name": "Polish zloty",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Poland",
        "country_iso_2_char_code": "PL",
        "country_iso_3_char_code": "POL",
        "un_m49": 616,
        "currency_iso_3_char_code": "PLN",
        "currency_name": "Polish zloty",
        "recipient_type": "POLISH",
        "recipient_name": "Poland local"
    },
    {
        "country": "Romania",
        "country_iso_2_char_code": "RO",
        "country_iso_3_char_code": "ROU",
        "un_m49": 642,
        "currency_iso_3_char_code": "RON",
        "currency_name": "Romanian leu",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Romania",
        "country_iso_2_char_code": "RO",
        "country_iso_3_char_code": "ROU",
        "un_m49": 642,
        "currency_iso_3_char_code": "RON",
        "currency_name": "Romanian leu",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Russian Federation",
        "country_iso_2_char_code": "RU",
        "country_iso_3_char_code": "RUS",
        "un_m49": 643,
        "currency_iso_3_char_code": "RUB",
        "currency_name": "Russian ruble",
        "recipient_type": "RUSSIARAPIDA",
        "recipient_name": "Russian bank account"
    },
    {
        "country": "Russian Federation",
        "country_iso_2_char_code": "RU",
        "country_iso_3_char_code": "RUS",
        "un_m49": 643,
        "currency_iso_3_char_code": "RUB",
        "currency_name": "Russian ruble",
        "recipient_type": "RUSSIARAPIDA_CARD",
        "recipient_name": "Russian card"
    },
    {
        "country": "Sweden",
        "country_iso_2_char_code": "SE",
        "country_iso_3_char_code": "SWE",
        "un_m49": 752,
        "currency_iso_3_char_code": "SEK",
        "currency_name": "Swedish krona",
        "recipient_type": "BANKGIRO",
        "recipient_name": "Bankgiro"
    },
    {
        "country": "Sweden",
        "country_iso_2_char_code": "SE",
        "country_iso_3_char_code": "SWE",
        "un_m49": 752,
        "currency_iso_3_char_code": "SEK",
        "currency_name": "Swedish krona",
        "recipient_type": "IBAN",
        "recipient_name": "IBAN"
    },
    {
        "country": "Singapore",
        "country_iso_2_char_code": "SG",
        "country_iso_3_char_code": "SGP",
        "un_m49": 702,
        "currency_iso_3_char_code": "SGD",
        "currency_name": "Singapore dollar",
        "recipient_type": "SINGAPORE",
        "recipient_name": "Singapore local"
    },
    {
        "country": "Thailand",
        "country_iso_2_char_code": "TH",
        "country_iso_3_char_code": "THA",
        "un_m49": 764,
        "currency_iso_3_char_code": "THB",
        "currency_name": "Thai baht",
        "recipient_type": "THAILAND",
        "recipient_name": "Thailand local"
    },
    {
        "country": "Turkey",
        "country_iso_2_char_code": "TR",
        "country_iso_3_char_code": "TUR",
        "un_m49": 792,
        "currency_iso_3_char_code": "TRY",
        "currency_name": "Turkish lira",
        "recipient_type": "TURKISH_EARTHPORT",
        "recipient_name": "Turkish local"
    },
    {
        "country": "Ukraine",
        "country_iso_2_char_code": "UA",
        "country_iso_3_char_code": "UKR",
        "un_m49": 804,
        "currency_iso_3_char_code": "UAH",
        "currency_name": "Ukrainian hryvnia",
        "recipient_type": "PRIVATBANK",
        "recipient_name": "PrivatBank"
    },
    {
        "country": "Viet Nam",
        "country_iso_2_char_code": "VN",
        "country_iso_3_char_code": "VNM",
        "un_m49": 704,
        "currency_iso_3_char_code": "VND",
        "currency_name": "Vietnamese dong",
        "recipient_type": "VIETNAME_EARTHPORT",
        "recipient_name": "VIETNAME_EARTHPORT"
    },
    {
        "country": "South Africa",
        "country_iso_2_char_code": "ZA",
        "country_iso_3_char_code": "ZAF",
        "un_m49": 710,
        "currency_iso_3_char_code": "ZAR",
        "currency_name": "South African rand",
        "recipient_type": "SOUTHAFRICA",
        "recipient_name": "South Africa local"
    },
    {
        "country": "India",
        "country_iso_2_char_code": "IN",
        "country_iso_3_char_code": "IND",
        "un_m49": 356,
        "currency_iso_3_char_code": "INR",
        "currency_name": "Indian rupee",
        "recipient_type": "INDIAN",
        "recipient_name": "INDIAN local"
    },
    {
        "country": "American Samoa",
        "country_iso_2_char_code": "AS",
        "country_iso_3_char_code": "ASM",
        "un_m49": 16,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Ecuador",
        "country_iso_2_char_code": "EC",
        "country_iso_3_char_code": "ECU",
        "un_m49": 218,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Micronesia, Federated States of",
        "country_iso_2_char_code": "FM",
        "country_iso_3_char_code": "FSM",
        "un_m49": 583,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Guam",
        "country_iso_2_char_code": "GU",
        "country_iso_3_char_code": "GUM",
        "un_m49": 316,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "British Indian Ocean Territory",
        "country_iso_2_char_code": "IO",
        "country_iso_3_char_code": "IOT",
        "un_m49": 86,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Marshall Islands",
        "country_iso_2_char_code": "MH",
        "country_iso_3_char_code": "MHL",
        "un_m49": 584,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Northern Mariana Islands",
        "country_iso_2_char_code": "MP",
        "country_iso_3_char_code": "MNP",
        "un_m49": 580,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Panama",
        "country_iso_2_char_code": "PA",
        "country_iso_3_char_code": "PAN",
        "un_m49": 591,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Palau",
        "country_iso_2_char_code": "PW",
        "country_iso_3_char_code": "PLW",
        "un_m49": 585,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Puerto Rico",
        "country_iso_2_char_code": "PR",
        "country_iso_3_char_code": "PRI",
        "un_m49": 630,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "El Salvador",
        "country_iso_2_char_code": "SV",
        "country_iso_3_char_code": "SLV",
        "un_m49": 222,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Turks and Caicos Islands",
        "country_iso_2_char_code": "TC",
        "country_iso_3_char_code": "TCA",
        "un_m49": 796,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Timor-Leste",
        "country_iso_2_char_code": "TL",
        "country_iso_3_char_code": "TLS",
        "un_m49": 626,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "US Minor Outlying Islands",
        "country_iso_2_char_code": "UM",
        "country_iso_3_char_code": "UMI",
        "un_m49": 581,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "United States of America",
        "country_iso_2_char_code": "US",
        "country_iso_3_char_code": "USA",
        "un_m49": 840,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "British Virgin Islands",
        "country_iso_2_char_code": "VG",
        "country_iso_3_char_code": "VGB",
        "un_m49": 92,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Virgin Islands, US",
        "country_iso_2_char_code": "VI",
        "country_iso_3_char_code": "VIR",
        "un_m49": 850,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "ABA",
        "recipient_name": "Local bank details"
    },
    {
        "country": "Aruba",
        "country_iso_2_char_code": "AW",
        "country_iso_3_char_code": "ABW",
        "un_m49": 533,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Afghanistan",
        "country_iso_2_char_code": "AF",
        "country_iso_3_char_code": "AFG",
        "un_m49": 4,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Angola",
        "country_iso_2_char_code": "AO",
        "country_iso_3_char_code": "AGO",
        "un_m49": 24,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Anguilla",
        "country_iso_2_char_code": "AI",
        "country_iso_3_char_code": "AIA",
        "un_m49": 660,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Aland Islands",
        "country_iso_2_char_code": "AX",
        "country_iso_3_char_code": "ALA",
        "un_m49": 248,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Albania",
        "country_iso_2_char_code": "AL",
        "country_iso_3_char_code": "ALB",
        "un_m49": 8,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Andorra",
        "country_iso_2_char_code": "AD",
        "country_iso_3_char_code": "AND",
        "un_m49": 20,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Netherlands Antilles",
        "country_iso_2_char_code": "AN",
        "country_iso_3_char_code": "ANT",
        "un_m49": 530,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United Arab Emirates",
        "country_iso_2_char_code": "AE",
        "country_iso_3_char_code": "ARE",
        "un_m49": 784,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Argentina",
        "country_iso_2_char_code": "AR",
        "country_iso_3_char_code": "ARG",
        "un_m49": 32,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Armenia",
        "country_iso_2_char_code": "AM",
        "country_iso_3_char_code": "ARM",
        "un_m49": 51,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "American Samoa",
        "country_iso_2_char_code": "AS",
        "country_iso_3_char_code": "ASM",
        "un_m49": 16,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Antarctica",
        "country_iso_2_char_code": "AQ",
        "country_iso_3_char_code": "ATA",
        "un_m49": 10,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Southern Territories",
        "country_iso_2_char_code": "TF",
        "country_iso_3_char_code": "ATF",
        "un_m49": 260,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Antigua and Barbuda",
        "country_iso_2_char_code": "AG",
        "country_iso_3_char_code": "ATG",
        "un_m49": 28,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Australia",
        "country_iso_2_char_code": "AU",
        "country_iso_3_char_code": "AUS",
        "un_m49": 36,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Austria",
        "country_iso_2_char_code": "AT",
        "country_iso_3_char_code": "AUT",
        "un_m49": 40,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Azerbaijan",
        "country_iso_2_char_code": "AZ",
        "country_iso_3_char_code": "AZE",
        "un_m49": 31,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Burundi",
        "country_iso_2_char_code": "BI",
        "country_iso_3_char_code": "BDI",
        "un_m49": 108,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belgium",
        "country_iso_2_char_code": "BE",
        "country_iso_3_char_code": "BEL",
        "un_m49": 56,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Benin",
        "country_iso_2_char_code": "BJ",
        "country_iso_3_char_code": "BEN",
        "un_m49": 204,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Burkina Faso",
        "country_iso_2_char_code": "BF",
        "country_iso_3_char_code": "BFA",
        "un_m49": 854,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bangladesh",
        "country_iso_2_char_code": "BD",
        "country_iso_3_char_code": "BGD",
        "un_m49": 50,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bulgaria",
        "country_iso_2_char_code": "BG",
        "country_iso_3_char_code": "BGR",
        "un_m49": 100,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bahrain",
        "country_iso_2_char_code": "BH",
        "country_iso_3_char_code": "BHR",
        "un_m49": 48,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bahamas",
        "country_iso_2_char_code": "BS",
        "country_iso_3_char_code": "BHS",
        "un_m49": 44,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bosnia and Herzegovina",
        "country_iso_2_char_code": "BA",
        "country_iso_3_char_code": "BIH",
        "un_m49": 70,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint-Barthélemy",
        "country_iso_2_char_code": "BL",
        "country_iso_3_char_code": "BLM",
        "un_m49": 652,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belarus",
        "country_iso_2_char_code": "BY",
        "country_iso_3_char_code": "BLR",
        "un_m49": 112,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belize",
        "country_iso_2_char_code": "BZ",
        "country_iso_3_char_code": "BLZ",
        "un_m49": 84,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bermuda",
        "country_iso_2_char_code": "BM",
        "country_iso_3_char_code": "BMU",
        "un_m49": 60,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bolivia",
        "country_iso_2_char_code": "BO",
        "country_iso_3_char_code": "BOL",
        "un_m49": 68,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Brazil",
        "country_iso_2_char_code": "BR",
        "country_iso_3_char_code": "BRA",
        "un_m49": 76,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Barbados",
        "country_iso_2_char_code": "BB",
        "country_iso_3_char_code": "BRB",
        "un_m49": 52,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Brunei Darussalam",
        "country_iso_2_char_code": "BN",
        "country_iso_3_char_code": "BRN",
        "un_m49": 96,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bhutan",
        "country_iso_2_char_code": "BT",
        "country_iso_3_char_code": "BTN",
        "un_m49": 64,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bouvet Island",
        "country_iso_2_char_code": "BV",
        "country_iso_3_char_code": "BVT",
        "un_m49": 74,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Botswana",
        "country_iso_2_char_code": "BW",
        "country_iso_3_char_code": "BWA",
        "un_m49": 72,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Central African Republic",
        "country_iso_2_char_code": "CF",
        "country_iso_3_char_code": "CAF",
        "un_m49": 140,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Canada",
        "country_iso_2_char_code": "CA",
        "country_iso_3_char_code": "CAN",
        "un_m49": 124,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "country_iso_2_char_code": "CC",
        "country_iso_3_char_code": "CCK",
        "un_m49": 166,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Switzerland",
        "country_iso_2_char_code": "CH",
        "country_iso_3_char_code": "CHE",
        "un_m49": 756,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Chile",
        "country_iso_2_char_code": "CL",
        "country_iso_3_char_code": "CHL",
        "un_m49": 152,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "China",
        "country_iso_2_char_code": "CN",
        "country_iso_3_char_code": "CHN",
        "un_m49": 156,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Côte d'Ivoire",
        "country_iso_2_char_code": "CI",
        "country_iso_3_char_code": "CIV",
        "un_m49": 384,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cameroon",
        "country_iso_2_char_code": "CM",
        "country_iso_3_char_code": "CMR",
        "un_m49": 120,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Congo, (Kinshasa)",
        "country_iso_2_char_code": "CD",
        "country_iso_3_char_code": "COD",
        "un_m49": 180,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Congo (Brazzaville)",
        "country_iso_2_char_code": "CG",
        "country_iso_3_char_code": "COG",
        "un_m49": 178,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cook Islands",
        "country_iso_2_char_code": "CK",
        "country_iso_3_char_code": "COK",
        "un_m49": 184,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Colombia",
        "country_iso_2_char_code": "CO",
        "country_iso_3_char_code": "COL",
        "un_m49": 170,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Comoros",
        "country_iso_2_char_code": "KM",
        "country_iso_3_char_code": "COM",
        "un_m49": 174,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cape Verde",
        "country_iso_2_char_code": "CV",
        "country_iso_3_char_code": "CPV",
        "un_m49": 132,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Costa Rica",
        "country_iso_2_char_code": "CR",
        "country_iso_3_char_code": "CRI",
        "un_m49": 188,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cuba",
        "country_iso_2_char_code": "CU",
        "country_iso_3_char_code": "CUB",
        "un_m49": 192,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Christmas Island",
        "country_iso_2_char_code": "CX",
        "country_iso_3_char_code": "CXR",
        "un_m49": 162,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cayman Islands",
        "country_iso_2_char_code": "KY",
        "country_iso_3_char_code": "CYM",
        "un_m49": 136,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cyprus",
        "country_iso_2_char_code": "CY",
        "country_iso_3_char_code": "CYP",
        "un_m49": 196,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Czech Republic",
        "country_iso_2_char_code": "CZ",
        "country_iso_3_char_code": "CZE",
        "un_m49": 203,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Germany",
        "country_iso_2_char_code": "DE",
        "country_iso_3_char_code": "DEU",
        "un_m49": 276,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Djibouti",
        "country_iso_2_char_code": "DJ",
        "country_iso_3_char_code": "DJI",
        "un_m49": 262,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Dominica",
        "country_iso_2_char_code": "DM",
        "country_iso_3_char_code": "DMA",
        "un_m49": 212,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Denmark",
        "country_iso_2_char_code": "DK",
        "country_iso_3_char_code": "DNK",
        "un_m49": 208,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Dominican Republic",
        "country_iso_2_char_code": "DO",
        "country_iso_3_char_code": "DOM",
        "un_m49": 214,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Algeria",
        "country_iso_2_char_code": "DZ",
        "country_iso_3_char_code": "DZA",
        "un_m49": 12,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ecuador",
        "country_iso_2_char_code": "EC",
        "country_iso_3_char_code": "ECU",
        "un_m49": 218,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Egypt",
        "country_iso_2_char_code": "EG",
        "country_iso_3_char_code": "EGY",
        "un_m49": 818,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Eritrea",
        "country_iso_2_char_code": "ER",
        "country_iso_3_char_code": "ERI",
        "un_m49": 232,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Western Sahara",
        "country_iso_2_char_code": "EH",
        "country_iso_3_char_code": "ESH",
        "un_m49": 732,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Spain",
        "country_iso_2_char_code": "ES",
        "country_iso_3_char_code": "ESP",
        "un_m49": 724,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Estonia",
        "country_iso_2_char_code": "EE",
        "country_iso_3_char_code": "EST",
        "un_m49": 233,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ethiopia",
        "country_iso_2_char_code": "ET",
        "country_iso_3_char_code": "ETH",
        "un_m49": 231,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Finland",
        "country_iso_2_char_code": "FI",
        "country_iso_3_char_code": "FIN",
        "un_m49": 246,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Fiji",
        "country_iso_2_char_code": "FJ",
        "country_iso_3_char_code": "FJI",
        "un_m49": 242,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "country_iso_2_char_code": "FK",
        "country_iso_3_char_code": "FLK",
        "un_m49": 238,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "France",
        "country_iso_2_char_code": "FR",
        "country_iso_3_char_code": "FRA",
        "un_m49": 250,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Faroe Islands",
        "country_iso_2_char_code": "FO",
        "country_iso_3_char_code": "FRO",
        "un_m49": 234,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Micronesia, Federated States of",
        "country_iso_2_char_code": "FM",
        "country_iso_3_char_code": "FSM",
        "un_m49": 583,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gabon",
        "country_iso_2_char_code": "GA",
        "country_iso_3_char_code": "GAB",
        "un_m49": 266,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United Kingdom",
        "country_iso_2_char_code": "GB",
        "country_iso_3_char_code": "GBR",
        "un_m49": 826,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Georgia",
        "country_iso_2_char_code": "GE",
        "country_iso_3_char_code": "GEO",
        "un_m49": 268,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guernsey",
        "country_iso_2_char_code": "GG",
        "country_iso_3_char_code": "GGY",
        "un_m49": 831,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ghana",
        "country_iso_2_char_code": "GH",
        "country_iso_3_char_code": "GHA",
        "un_m49": 288,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gibraltar",
        "country_iso_2_char_code": "GI",
        "country_iso_3_char_code": "GIB",
        "un_m49": 292,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guinea",
        "country_iso_2_char_code": "GN",
        "country_iso_3_char_code": "GIN",
        "un_m49": 324,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guadeloupe",
        "country_iso_2_char_code": "GP",
        "country_iso_3_char_code": "GLP",
        "un_m49": 312,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gambia",
        "country_iso_2_char_code": "GM",
        "country_iso_3_char_code": "GMB",
        "un_m49": 270,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guinea-Bissau",
        "country_iso_2_char_code": "GW",
        "country_iso_3_char_code": "GNB",
        "un_m49": 624,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Equatorial Guinea",
        "country_iso_2_char_code": "GQ",
        "country_iso_3_char_code": "GNQ",
        "un_m49": 226,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Greece",
        "country_iso_2_char_code": "GR",
        "country_iso_3_char_code": "GRC",
        "un_m49": 300,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Grenada",
        "country_iso_2_char_code": "GD",
        "country_iso_3_char_code": "GRD",
        "un_m49": 308,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Greenland",
        "country_iso_2_char_code": "GL",
        "country_iso_3_char_code": "GRL",
        "un_m49": 304,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guatemala",
        "country_iso_2_char_code": "GT",
        "country_iso_3_char_code": "GTM",
        "un_m49": 320,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Guiana",
        "country_iso_2_char_code": "GF",
        "country_iso_3_char_code": "GUF",
        "un_m49": 254,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guam",
        "country_iso_2_char_code": "GU",
        "country_iso_3_char_code": "GUM",
        "un_m49": 316,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guyana",
        "country_iso_2_char_code": "GY",
        "country_iso_3_char_code": "GUY",
        "un_m49": 328,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Hong Kong, SAR China",
        "country_iso_2_char_code": "HK",
        "country_iso_3_char_code": "HKG",
        "un_m49": 344,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Heard and Mcdonald Islands",
        "country_iso_2_char_code": "HM",
        "country_iso_3_char_code": "HMD",
        "un_m49": 334,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Honduras",
        "country_iso_2_char_code": "HN",
        "country_iso_3_char_code": "HND",
        "un_m49": 340,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Croatia",
        "country_iso_2_char_code": "HR",
        "country_iso_3_char_code": "HRV",
        "un_m49": 191,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Haiti",
        "country_iso_2_char_code": "HT",
        "country_iso_3_char_code": "HTI",
        "un_m49": 332,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Hungary",
        "country_iso_2_char_code": "HU",
        "country_iso_3_char_code": "HUN",
        "un_m49": 348,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Indonesia",
        "country_iso_2_char_code": "ID",
        "country_iso_3_char_code": "IDN",
        "un_m49": 360,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Isle of Man",
        "country_iso_2_char_code": "IM",
        "country_iso_3_char_code": "IMN",
        "un_m49": 833,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "India",
        "country_iso_2_char_code": "IN",
        "country_iso_3_char_code": "IND",
        "un_m49": 356,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "British Indian Ocean Territory",
        "country_iso_2_char_code": "IO",
        "country_iso_3_char_code": "IOT",
        "un_m49": 86,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ireland",
        "country_iso_2_char_code": "IE",
        "country_iso_3_char_code": "IRL",
        "un_m49": 372,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iran, Islamic Republic of",
        "country_iso_2_char_code": "IR",
        "country_iso_3_char_code": "IRN",
        "un_m49": 364,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iraq",
        "country_iso_2_char_code": "IQ",
        "country_iso_3_char_code": "IRQ",
        "un_m49": 368,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iceland",
        "country_iso_2_char_code": "IS",
        "country_iso_3_char_code": "ISL",
        "un_m49": 352,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Israel",
        "country_iso_2_char_code": "IL",
        "country_iso_3_char_code": "ISR",
        "un_m49": 376,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Italy",
        "country_iso_2_char_code": "IT",
        "country_iso_3_char_code": "ITA",
        "un_m49": 380,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jamaica",
        "country_iso_2_char_code": "JM",
        "country_iso_3_char_code": "JAM",
        "un_m49": 388,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jersey",
        "country_iso_2_char_code": "JE",
        "country_iso_3_char_code": "JEY",
        "un_m49": 832,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jordan",
        "country_iso_2_char_code": "JO",
        "country_iso_3_char_code": "JOR",
        "un_m49": 400,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Japan",
        "country_iso_2_char_code": "JP",
        "country_iso_3_char_code": "JPN",
        "un_m49": 392,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kazakhstan",
        "country_iso_2_char_code": "KZ",
        "country_iso_3_char_code": "KAZ",
        "un_m49": 398,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kenya",
        "country_iso_2_char_code": "KE",
        "country_iso_3_char_code": "KEN",
        "un_m49": 404,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kyrgyzstan",
        "country_iso_2_char_code": "KG",
        "country_iso_3_char_code": "KGZ",
        "un_m49": 417,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cambodia",
        "country_iso_2_char_code": "KH",
        "country_iso_3_char_code": "KHM",
        "un_m49": 116,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kiribati",
        "country_iso_2_char_code": "KI",
        "country_iso_3_char_code": "KIR",
        "un_m49": 296,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Kitts and Nevis",
        "country_iso_2_char_code": "KN",
        "country_iso_3_char_code": "KNA",
        "un_m49": 659,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Korea (South)",
        "country_iso_2_char_code": "KR",
        "country_iso_3_char_code": "KOR",
        "un_m49": 410,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kuwait",
        "country_iso_2_char_code": "KW",
        "country_iso_3_char_code": "KWT",
        "un_m49": 414,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lao PDR",
        "country_iso_2_char_code": "LA",
        "country_iso_3_char_code": "LAO",
        "un_m49": 418,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lebanon",
        "country_iso_2_char_code": "LB",
        "country_iso_3_char_code": "LBN",
        "un_m49": 422,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Liberia",
        "country_iso_2_char_code": "LR",
        "country_iso_3_char_code": "LBR",
        "un_m49": 430,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Libya",
        "country_iso_2_char_code": "LY",
        "country_iso_3_char_code": "LBY",
        "un_m49": 434,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Lucia",
        "country_iso_2_char_code": "LC",
        "country_iso_3_char_code": "LCA",
        "un_m49": 662,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Liechtenstein",
        "country_iso_2_char_code": "LI",
        "country_iso_3_char_code": "LIE",
        "un_m49": 438,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sri Lanka",
        "country_iso_2_char_code": "LK",
        "country_iso_3_char_code": "LKA",
        "un_m49": 144,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lesotho",
        "country_iso_2_char_code": "LS",
        "country_iso_3_char_code": "LSO",
        "un_m49": 426,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lithuania",
        "country_iso_2_char_code": "LT",
        "country_iso_3_char_code": "LTU",
        "un_m49": 440,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Luxembourg",
        "country_iso_2_char_code": "LU",
        "country_iso_3_char_code": "LUX",
        "un_m49": 442,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Latvia",
        "country_iso_2_char_code": "LV",
        "country_iso_3_char_code": "LVA",
        "un_m49": 428,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Macao, SAR China",
        "country_iso_2_char_code": "MO",
        "country_iso_3_char_code": "MAC",
        "un_m49": 446,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint-Martin (French part)",
        "country_iso_2_char_code": "MF",
        "country_iso_3_char_code": "MAF",
        "un_m49": 663,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Morocco",
        "country_iso_2_char_code": "MA",
        "country_iso_3_char_code": "MAR",
        "un_m49": 504,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Monaco",
        "country_iso_2_char_code": "MC",
        "country_iso_3_char_code": "MCO",
        "un_m49": 492,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Moldova",
        "country_iso_2_char_code": "MD",
        "country_iso_3_char_code": "MDA",
        "un_m49": 498,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Madagascar",
        "country_iso_2_char_code": "MG",
        "country_iso_3_char_code": "MDG",
        "un_m49": 450,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Maldives",
        "country_iso_2_char_code": "MV",
        "country_iso_3_char_code": "MDV",
        "un_m49": 462,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mexico",
        "country_iso_2_char_code": "MX",
        "country_iso_3_char_code": "MEX",
        "un_m49": 484,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Marshall Islands",
        "country_iso_2_char_code": "MH",
        "country_iso_3_char_code": "MHL",
        "un_m49": 584,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Macedonia, Republic of",
        "country_iso_2_char_code": "MK",
        "country_iso_3_char_code": "MKD",
        "un_m49": 807,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mali",
        "country_iso_2_char_code": "ML",
        "country_iso_3_char_code": "MLI",
        "un_m49": 466,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malta",
        "country_iso_2_char_code": "MT",
        "country_iso_3_char_code": "MLT",
        "un_m49": 470,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Myanmar",
        "country_iso_2_char_code": "MM",
        "country_iso_3_char_code": "MMR",
        "un_m49": 104,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Montenegro",
        "country_iso_2_char_code": "ME",
        "country_iso_3_char_code": "MNE",
        "un_m49": 499,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mongolia",
        "country_iso_2_char_code": "MN",
        "country_iso_3_char_code": "MNG",
        "un_m49": 496,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Northern Mariana Islands",
        "country_iso_2_char_code": "MP",
        "country_iso_3_char_code": "MNP",
        "un_m49": 580,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mozambique",
        "country_iso_2_char_code": "MZ",
        "country_iso_3_char_code": "MOZ",
        "un_m49": 508,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mauritania",
        "country_iso_2_char_code": "MR",
        "country_iso_3_char_code": "MRT",
        "un_m49": 478,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Montserrat",
        "country_iso_2_char_code": "MS",
        "country_iso_3_char_code": "MSR",
        "un_m49": 500,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Martinique",
        "country_iso_2_char_code": "MQ",
        "country_iso_3_char_code": "MTQ",
        "un_m49": 474,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mauritius",
        "country_iso_2_char_code": "MU",
        "country_iso_3_char_code": "MUS",
        "un_m49": 480,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malawi",
        "country_iso_2_char_code": "MW",
        "country_iso_3_char_code": "MWI",
        "un_m49": 454,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malaysia",
        "country_iso_2_char_code": "MY",
        "country_iso_3_char_code": "MYS",
        "un_m49": 458,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mayotte",
        "country_iso_2_char_code": "YT",
        "country_iso_3_char_code": "MYT",
        "un_m49": 175,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Namibia",
        "country_iso_2_char_code": "NA",
        "country_iso_3_char_code": "NAM",
        "un_m49": 516,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "New Caledonia",
        "country_iso_2_char_code": "NC",
        "country_iso_3_char_code": "NCL",
        "un_m49": 540,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Niger",
        "country_iso_2_char_code": "NE",
        "country_iso_3_char_code": "NER",
        "un_m49": 562,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Norfolk Island",
        "country_iso_2_char_code": "NF",
        "country_iso_3_char_code": "NFK",
        "un_m49": 574,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nigeria",
        "country_iso_2_char_code": "NG",
        "country_iso_3_char_code": "NGA",
        "un_m49": 566,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nicaragua",
        "country_iso_2_char_code": "NI",
        "country_iso_3_char_code": "NIC",
        "un_m49": 558,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Niue",
        "country_iso_2_char_code": "NU",
        "country_iso_3_char_code": "NIU",
        "un_m49": 570,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Netherlands",
        "country_iso_2_char_code": "NL",
        "country_iso_3_char_code": "NLD",
        "un_m49": 528,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Norway",
        "country_iso_2_char_code": "NO",
        "country_iso_3_char_code": "NOR",
        "un_m49": 578,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nepal",
        "country_iso_2_char_code": "NP",
        "country_iso_3_char_code": "NPL",
        "un_m49": 524,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nauru",
        "country_iso_2_char_code": "NR",
        "country_iso_3_char_code": "NRU",
        "un_m49": 520,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "New Zealand",
        "country_iso_2_char_code": "NZ",
        "country_iso_3_char_code": "NZL",
        "un_m49": 554,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Oman",
        "country_iso_2_char_code": "OM",
        "country_iso_3_char_code": "OMN",
        "un_m49": 512,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Pakistan",
        "country_iso_2_char_code": "PK",
        "country_iso_3_char_code": "PAK",
        "un_m49": 586,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Panama",
        "country_iso_2_char_code": "PA",
        "country_iso_3_char_code": "PAN",
        "un_m49": 591,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Pitcairn",
        "country_iso_2_char_code": "PN",
        "country_iso_3_char_code": "PCN",
        "un_m49": 612,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Peru",
        "country_iso_2_char_code": "PE",
        "country_iso_3_char_code": "PER",
        "un_m49": 604,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Philippines",
        "country_iso_2_char_code": "PH",
        "country_iso_3_char_code": "PHL",
        "un_m49": 608,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Palau",
        "country_iso_2_char_code": "PW",
        "country_iso_3_char_code": "PLW",
        "un_m49": 585,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Papua New Guinea",
        "country_iso_2_char_code": "PG",
        "country_iso_3_char_code": "PNG",
        "un_m49": 598,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Poland",
        "country_iso_2_char_code": "PL",
        "country_iso_3_char_code": "POL",
        "un_m49": 616,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Puerto Rico",
        "country_iso_2_char_code": "PR",
        "country_iso_3_char_code": "PRI",
        "un_m49": 630,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Korea (North)",
        "country_iso_2_char_code": "KP",
        "country_iso_3_char_code": "PRK",
        "un_m49": 408,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Portugal",
        "country_iso_2_char_code": "PT",
        "country_iso_3_char_code": "PRT",
        "un_m49": 620,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Paraguay",
        "country_iso_2_char_code": "PY",
        "country_iso_3_char_code": "PRY",
        "un_m49": 600,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Palestinian Territory",
        "country_iso_2_char_code": "PS",
        "country_iso_3_char_code": "PSE",
        "un_m49": 275,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Polynesia",
        "country_iso_2_char_code": "PF",
        "country_iso_3_char_code": "PYF",
        "un_m49": 258,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Qatar",
        "country_iso_2_char_code": "QA",
        "country_iso_3_char_code": "QAT",
        "un_m49": 634,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Réunion",
        "country_iso_2_char_code": "RE",
        "country_iso_3_char_code": "REU",
        "un_m49": 638,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Romania",
        "country_iso_2_char_code": "RO",
        "country_iso_3_char_code": "ROU",
        "un_m49": 642,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Russian Federation",
        "country_iso_2_char_code": "RU",
        "country_iso_3_char_code": "RUS",
        "un_m49": 643,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Rwanda",
        "country_iso_2_char_code": "RW",
        "country_iso_3_char_code": "RWA",
        "un_m49": 646,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saudi Arabia",
        "country_iso_2_char_code": "SA",
        "country_iso_3_char_code": "SAU",
        "un_m49": 682,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sudan",
        "country_iso_2_char_code": "SD",
        "country_iso_3_char_code": "SDN",
        "un_m49": 736,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Senegal",
        "country_iso_2_char_code": "SN",
        "country_iso_3_char_code": "SEN",
        "un_m49": 686,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Singapore",
        "country_iso_2_char_code": "SG",
        "country_iso_3_char_code": "SGP",
        "un_m49": 702,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "country_iso_2_char_code": "GS",
        "country_iso_3_char_code": "SGS",
        "un_m49": 239,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Helena",
        "country_iso_2_char_code": "SH",
        "country_iso_3_char_code": "SHN",
        "un_m49": 654,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Svalbard and Jan Mayen Islands",
        "country_iso_2_char_code": "SJ",
        "country_iso_3_char_code": "SJM",
        "un_m49": 744,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Solomon Islands",
        "country_iso_2_char_code": "SB",
        "country_iso_3_char_code": "SLB",
        "un_m49": 90,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sierra Leone",
        "country_iso_2_char_code": "SL",
        "country_iso_3_char_code": "SLE",
        "un_m49": 694,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "El Salvador",
        "country_iso_2_char_code": "SV",
        "country_iso_3_char_code": "SLV",
        "un_m49": 222,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "San Marino",
        "country_iso_2_char_code": "SM",
        "country_iso_3_char_code": "SMR",
        "un_m49": 674,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Somalia",
        "country_iso_2_char_code": "SO",
        "country_iso_3_char_code": "SOM",
        "un_m49": 706,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "country_iso_2_char_code": "PM",
        "country_iso_3_char_code": "SPM",
        "un_m49": 666,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Serbia",
        "country_iso_2_char_code": "RS",
        "country_iso_3_char_code": "SRB",
        "un_m49": 688,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Sudan",
        "country_iso_2_char_code": "SS",
        "country_iso_3_char_code": "SSD",
        "un_m49": 728,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sao Tome and Principe",
        "country_iso_2_char_code": "ST",
        "country_iso_3_char_code": "STP",
        "un_m49": 678,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Suriname",
        "country_iso_2_char_code": "SR",
        "country_iso_3_char_code": "SUR",
        "un_m49": 740,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Slovakia",
        "country_iso_2_char_code": "SK",
        "country_iso_3_char_code": "SVK",
        "un_m49": 703,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Slovenia",
        "country_iso_2_char_code": "SI",
        "country_iso_3_char_code": "SVN",
        "un_m49": 705,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sweden",
        "country_iso_2_char_code": "SE",
        "country_iso_3_char_code": "SWE",
        "un_m49": 752,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Swaziland",
        "country_iso_2_char_code": "SZ",
        "country_iso_3_char_code": "SWZ",
        "un_m49": 748,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Seychelles",
        "country_iso_2_char_code": "SC",
        "country_iso_3_char_code": "SYC",
        "un_m49": 690,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Syrian Arab Republic (Syria)",
        "country_iso_2_char_code": "SY",
        "country_iso_3_char_code": "SYR",
        "un_m49": 760,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turks and Caicos Islands",
        "country_iso_2_char_code": "TC",
        "country_iso_3_char_code": "TCA",
        "un_m49": 796,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Chad",
        "country_iso_2_char_code": "TD",
        "country_iso_3_char_code": "TCD",
        "un_m49": 148,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Togo",
        "country_iso_2_char_code": "TG",
        "country_iso_3_char_code": "TGO",
        "un_m49": 768,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Thailand",
        "country_iso_2_char_code": "TH",
        "country_iso_3_char_code": "THA",
        "un_m49": 764,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tajikistan",
        "country_iso_2_char_code": "TJ",
        "country_iso_3_char_code": "TJK",
        "un_m49": 762,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tokelau",
        "country_iso_2_char_code": "TK",
        "country_iso_3_char_code": "TKL",
        "un_m49": 772,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turkmenistan",
        "country_iso_2_char_code": "TM",
        "country_iso_3_char_code": "TKM",
        "un_m49": 795,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Timor-Leste",
        "country_iso_2_char_code": "TL",
        "country_iso_3_char_code": "TLS",
        "un_m49": 626,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tonga",
        "country_iso_2_char_code": "TO",
        "country_iso_3_char_code": "TON",
        "un_m49": 776,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Trinidad and Tobago",
        "country_iso_2_char_code": "TT",
        "country_iso_3_char_code": "TTO",
        "un_m49": 780,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tunisia",
        "country_iso_2_char_code": "TN",
        "country_iso_3_char_code": "TUN",
        "un_m49": 788,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turkey",
        "country_iso_2_char_code": "TR",
        "country_iso_3_char_code": "TUR",
        "un_m49": 792,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tuvalu",
        "country_iso_2_char_code": "TV",
        "country_iso_3_char_code": "TUV",
        "un_m49": 798,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Taiwan, Republic of China",
        "country_iso_2_char_code": "TW",
        "country_iso_3_char_code": "TWN",
        "un_m49": 158,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tanzania, United Republic of",
        "country_iso_2_char_code": "TZ",
        "country_iso_3_char_code": "TZA",
        "un_m49": 834,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uganda",
        "country_iso_2_char_code": "UG",
        "country_iso_3_char_code": "UGA",
        "un_m49": 800,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ukraine",
        "country_iso_2_char_code": "UA",
        "country_iso_3_char_code": "UKR",
        "un_m49": 804,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "US Minor Outlying Islands",
        "country_iso_2_char_code": "UM",
        "country_iso_3_char_code": "UMI",
        "un_m49": 581,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uruguay",
        "country_iso_2_char_code": "UY",
        "country_iso_3_char_code": "URY",
        "un_m49": 858,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United States of America",
        "country_iso_2_char_code": "US",
        "country_iso_3_char_code": "USA",
        "un_m49": 840,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uzbekistan",
        "country_iso_2_char_code": "UZ",
        "country_iso_3_char_code": "UZB",
        "un_m49": 860,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Holy See (Vatican City State)",
        "country_iso_2_char_code": "VA",
        "country_iso_3_char_code": "VAT",
        "un_m49": 336,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Vincent and Grenadines",
        "country_iso_2_char_code": "VC",
        "country_iso_3_char_code": "VCT",
        "un_m49": 670,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Venezuela (Bolivarian Republic)",
        "country_iso_2_char_code": "VE",
        "country_iso_3_char_code": "VEN",
        "un_m49": 862,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "British Virgin Islands",
        "country_iso_2_char_code": "VG",
        "country_iso_3_char_code": "VGB",
        "un_m49": 92,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Virgin Islands, US",
        "country_iso_2_char_code": "VI",
        "country_iso_3_char_code": "VIR",
        "un_m49": 850,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Viet Nam",
        "country_iso_2_char_code": "VN",
        "country_iso_3_char_code": "VNM",
        "un_m49": 704,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Vanuatu",
        "country_iso_2_char_code": "VU",
        "country_iso_3_char_code": "VUT",
        "un_m49": 548,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Wallis and Futuna Islands",
        "country_iso_2_char_code": "WF",
        "country_iso_3_char_code": "WLF",
        "un_m49": 876,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Samoa",
        "country_iso_2_char_code": "WS",
        "country_iso_3_char_code": "WSM",
        "un_m49": 882,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Yemen",
        "country_iso_2_char_code": "YE",
        "country_iso_3_char_code": "YEM",
        "un_m49": 887,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Africa",
        "country_iso_2_char_code": "ZA",
        "country_iso_3_char_code": "ZAF",
        "un_m49": 710,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Zambia",
        "country_iso_2_char_code": "ZM",
        "country_iso_3_char_code": "ZMB",
        "un_m49": 894,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Zimbabwe",
        "country_iso_2_char_code": "ZW",
        "country_iso_3_char_code": "ZWE",
        "un_m49": 716,
        "currency_iso_3_char_code": "USD",
        "currency_name": "United States dollar",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Aruba",
        "country_iso_2_char_code": "AW",
        "country_iso_3_char_code": "ABW",
        "un_m49": 533,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Afghanistan",
        "country_iso_2_char_code": "AF",
        "country_iso_3_char_code": "AFG",
        "un_m49": 4,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Angola",
        "country_iso_2_char_code": "AO",
        "country_iso_3_char_code": "AGO",
        "un_m49": 24,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Anguilla",
        "country_iso_2_char_code": "AI",
        "country_iso_3_char_code": "AIA",
        "un_m49": 660,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Aland Islands",
        "country_iso_2_char_code": "AX",
        "country_iso_3_char_code": "ALA",
        "un_m49": 248,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Albania",
        "country_iso_2_char_code": "AL",
        "country_iso_3_char_code": "ALB",
        "un_m49": 8,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Andorra",
        "country_iso_2_char_code": "AD",
        "country_iso_3_char_code": "AND",
        "un_m49": 20,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Netherlands Antilles",
        "country_iso_2_char_code": "AN",
        "country_iso_3_char_code": "ANT",
        "un_m49": 530,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United Arab Emirates",
        "country_iso_2_char_code": "AE",
        "country_iso_3_char_code": "ARE",
        "un_m49": 784,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Argentina",
        "country_iso_2_char_code": "AR",
        "country_iso_3_char_code": "ARG",
        "un_m49": 32,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Armenia",
        "country_iso_2_char_code": "AM",
        "country_iso_3_char_code": "ARM",
        "un_m49": 51,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "American Samoa",
        "country_iso_2_char_code": "AS",
        "country_iso_3_char_code": "ASM",
        "un_m49": 16,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Antarctica",
        "country_iso_2_char_code": "AQ",
        "country_iso_3_char_code": "ATA",
        "un_m49": 10,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Southern Territories",
        "country_iso_2_char_code": "TF",
        "country_iso_3_char_code": "ATF",
        "un_m49": 260,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Antigua and Barbuda",
        "country_iso_2_char_code": "AG",
        "country_iso_3_char_code": "ATG",
        "un_m49": 28,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Australia",
        "country_iso_2_char_code": "AU",
        "country_iso_3_char_code": "AUS",
        "un_m49": 36,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Austria",
        "country_iso_2_char_code": "AT",
        "country_iso_3_char_code": "AUT",
        "un_m49": 40,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Azerbaijan",
        "country_iso_2_char_code": "AZ",
        "country_iso_3_char_code": "AZE",
        "un_m49": 31,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Burundi",
        "country_iso_2_char_code": "BI",
        "country_iso_3_char_code": "BDI",
        "un_m49": 108,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belgium",
        "country_iso_2_char_code": "BE",
        "country_iso_3_char_code": "BEL",
        "un_m49": 56,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Benin",
        "country_iso_2_char_code": "BJ",
        "country_iso_3_char_code": "BEN",
        "un_m49": 204,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Burkina Faso",
        "country_iso_2_char_code": "BF",
        "country_iso_3_char_code": "BFA",
        "un_m49": 854,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bangladesh",
        "country_iso_2_char_code": "BD",
        "country_iso_3_char_code": "BGD",
        "un_m49": 50,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bulgaria",
        "country_iso_2_char_code": "BG",
        "country_iso_3_char_code": "BGR",
        "un_m49": 100,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bahrain",
        "country_iso_2_char_code": "BH",
        "country_iso_3_char_code": "BHR",
        "un_m49": 48,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bahamas",
        "country_iso_2_char_code": "BS",
        "country_iso_3_char_code": "BHS",
        "un_m49": 44,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bosnia and Herzegovina",
        "country_iso_2_char_code": "BA",
        "country_iso_3_char_code": "BIH",
        "un_m49": 70,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint-Barthélemy",
        "country_iso_2_char_code": "BL",
        "country_iso_3_char_code": "BLM",
        "un_m49": 652,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belarus",
        "country_iso_2_char_code": "BY",
        "country_iso_3_char_code": "BLR",
        "un_m49": 112,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Belize",
        "country_iso_2_char_code": "BZ",
        "country_iso_3_char_code": "BLZ",
        "un_m49": 84,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bermuda",
        "country_iso_2_char_code": "BM",
        "country_iso_3_char_code": "BMU",
        "un_m49": 60,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bolivia",
        "country_iso_2_char_code": "BO",
        "country_iso_3_char_code": "BOL",
        "un_m49": 68,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Brazil",
        "country_iso_2_char_code": "BR",
        "country_iso_3_char_code": "BRA",
        "un_m49": 76,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Barbados",
        "country_iso_2_char_code": "BB",
        "country_iso_3_char_code": "BRB",
        "un_m49": 52,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Brunei Darussalam",
        "country_iso_2_char_code": "BN",
        "country_iso_3_char_code": "BRN",
        "un_m49": 96,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bhutan",
        "country_iso_2_char_code": "BT",
        "country_iso_3_char_code": "BTN",
        "un_m49": 64,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Bouvet Island",
        "country_iso_2_char_code": "BV",
        "country_iso_3_char_code": "BVT",
        "un_m49": 74,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Botswana",
        "country_iso_2_char_code": "BW",
        "country_iso_3_char_code": "BWA",
        "un_m49": 72,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Central African Republic",
        "country_iso_2_char_code": "CF",
        "country_iso_3_char_code": "CAF",
        "un_m49": 140,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Canada",
        "country_iso_2_char_code": "CA",
        "country_iso_3_char_code": "CAN",
        "un_m49": 124,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "country_iso_2_char_code": "CC",
        "country_iso_3_char_code": "CCK",
        "un_m49": 166,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Switzerland",
        "country_iso_2_char_code": "CH",
        "country_iso_3_char_code": "CHE",
        "un_m49": 756,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Chile",
        "country_iso_2_char_code": "CL",
        "country_iso_3_char_code": "CHL",
        "un_m49": 152,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "China",
        "country_iso_2_char_code": "CN",
        "country_iso_3_char_code": "CHN",
        "un_m49": 156,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Côte d'Ivoire",
        "country_iso_2_char_code": "CI",
        "country_iso_3_char_code": "CIV",
        "un_m49": 384,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cameroon",
        "country_iso_2_char_code": "CM",
        "country_iso_3_char_code": "CMR",
        "un_m49": 120,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Congo, (Kinshasa)",
        "country_iso_2_char_code": "CD",
        "country_iso_3_char_code": "COD",
        "un_m49": 180,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Congo (Brazzaville)",
        "country_iso_2_char_code": "CG",
        "country_iso_3_char_code": "COG",
        "un_m49": 178,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cook Islands",
        "country_iso_2_char_code": "CK",
        "country_iso_3_char_code": "COK",
        "un_m49": 184,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Colombia",
        "country_iso_2_char_code": "CO",
        "country_iso_3_char_code": "COL",
        "un_m49": 170,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Comoros",
        "country_iso_2_char_code": "KM",
        "country_iso_3_char_code": "COM",
        "un_m49": 174,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cape Verde",
        "country_iso_2_char_code": "CV",
        "country_iso_3_char_code": "CPV",
        "un_m49": 132,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Costa Rica",
        "country_iso_2_char_code": "CR",
        "country_iso_3_char_code": "CRI",
        "un_m49": 188,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cuba",
        "country_iso_2_char_code": "CU",
        "country_iso_3_char_code": "CUB",
        "un_m49": 192,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Christmas Island",
        "country_iso_2_char_code": "CX",
        "country_iso_3_char_code": "CXR",
        "un_m49": 162,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cayman Islands",
        "country_iso_2_char_code": "KY",
        "country_iso_3_char_code": "CYM",
        "un_m49": 136,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cyprus",
        "country_iso_2_char_code": "CY",
        "country_iso_3_char_code": "CYP",
        "un_m49": 196,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Czech Republic",
        "country_iso_2_char_code": "CZ",
        "country_iso_3_char_code": "CZE",
        "un_m49": 203,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Germany",
        "country_iso_2_char_code": "DE",
        "country_iso_3_char_code": "DEU",
        "un_m49": 276,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Djibouti",
        "country_iso_2_char_code": "DJ",
        "country_iso_3_char_code": "DJI",
        "un_m49": 262,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Dominica",
        "country_iso_2_char_code": "DM",
        "country_iso_3_char_code": "DMA",
        "un_m49": 212,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Denmark",
        "country_iso_2_char_code": "DK",
        "country_iso_3_char_code": "DNK",
        "un_m49": 208,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Dominican Republic",
        "country_iso_2_char_code": "DO",
        "country_iso_3_char_code": "DOM",
        "un_m49": 214,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Algeria",
        "country_iso_2_char_code": "DZ",
        "country_iso_3_char_code": "DZA",
        "un_m49": 12,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ecuador",
        "country_iso_2_char_code": "EC",
        "country_iso_3_char_code": "ECU",
        "un_m49": 218,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Egypt",
        "country_iso_2_char_code": "EG",
        "country_iso_3_char_code": "EGY",
        "un_m49": 818,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Eritrea",
        "country_iso_2_char_code": "ER",
        "country_iso_3_char_code": "ERI",
        "un_m49": 232,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Western Sahara",
        "country_iso_2_char_code": "EH",
        "country_iso_3_char_code": "ESH",
        "un_m49": 732,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Spain",
        "country_iso_2_char_code": "ES",
        "country_iso_3_char_code": "ESP",
        "un_m49": 724,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Estonia",
        "country_iso_2_char_code": "EE",
        "country_iso_3_char_code": "EST",
        "un_m49": 233,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ethiopia",
        "country_iso_2_char_code": "ET",
        "country_iso_3_char_code": "ETH",
        "un_m49": 231,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Finland",
        "country_iso_2_char_code": "FI",
        "country_iso_3_char_code": "FIN",
        "un_m49": 246,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Fiji",
        "country_iso_2_char_code": "FJ",
        "country_iso_3_char_code": "FJI",
        "un_m49": 242,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "country_iso_2_char_code": "FK",
        "country_iso_3_char_code": "FLK",
        "un_m49": 238,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "France",
        "country_iso_2_char_code": "FR",
        "country_iso_3_char_code": "FRA",
        "un_m49": 250,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Faroe Islands",
        "country_iso_2_char_code": "FO",
        "country_iso_3_char_code": "FRO",
        "un_m49": 234,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Micronesia, Federated States of",
        "country_iso_2_char_code": "FM",
        "country_iso_3_char_code": "FSM",
        "un_m49": 583,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gabon",
        "country_iso_2_char_code": "GA",
        "country_iso_3_char_code": "GAB",
        "un_m49": 266,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United Kingdom",
        "country_iso_2_char_code": "GB",
        "country_iso_3_char_code": "GBR",
        "un_m49": 826,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Georgia",
        "country_iso_2_char_code": "GE",
        "country_iso_3_char_code": "GEO",
        "un_m49": 268,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guernsey",
        "country_iso_2_char_code": "GG",
        "country_iso_3_char_code": "GGY",
        "un_m49": 831,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ghana",
        "country_iso_2_char_code": "GH",
        "country_iso_3_char_code": "GHA",
        "un_m49": 288,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gibraltar",
        "country_iso_2_char_code": "GI",
        "country_iso_3_char_code": "GIB",
        "un_m49": 292,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guinea",
        "country_iso_2_char_code": "GN",
        "country_iso_3_char_code": "GIN",
        "un_m49": 324,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guadeloupe",
        "country_iso_2_char_code": "GP",
        "country_iso_3_char_code": "GLP",
        "un_m49": 312,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Gambia",
        "country_iso_2_char_code": "GM",
        "country_iso_3_char_code": "GMB",
        "un_m49": 270,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guinea-Bissau",
        "country_iso_2_char_code": "GW",
        "country_iso_3_char_code": "GNB",
        "un_m49": 624,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Equatorial Guinea",
        "country_iso_2_char_code": "GQ",
        "country_iso_3_char_code": "GNQ",
        "un_m49": 226,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Greece",
        "country_iso_2_char_code": "GR",
        "country_iso_3_char_code": "GRC",
        "un_m49": 300,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Grenada",
        "country_iso_2_char_code": "GD",
        "country_iso_3_char_code": "GRD",
        "un_m49": 308,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Greenland",
        "country_iso_2_char_code": "GL",
        "country_iso_3_char_code": "GRL",
        "un_m49": 304,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guatemala",
        "country_iso_2_char_code": "GT",
        "country_iso_3_char_code": "GTM",
        "un_m49": 320,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Guiana",
        "country_iso_2_char_code": "GF",
        "country_iso_3_char_code": "GUF",
        "un_m49": 254,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guam",
        "country_iso_2_char_code": "GU",
        "country_iso_3_char_code": "GUM",
        "un_m49": 316,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Guyana",
        "country_iso_2_char_code": "GY",
        "country_iso_3_char_code": "GUY",
        "un_m49": 328,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Hong Kong, SAR China",
        "country_iso_2_char_code": "HK",
        "country_iso_3_char_code": "HKG",
        "un_m49": 344,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Heard and Mcdonald Islands",
        "country_iso_2_char_code": "HM",
        "country_iso_3_char_code": "HMD",
        "un_m49": 334,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Honduras",
        "country_iso_2_char_code": "HN",
        "country_iso_3_char_code": "HND",
        "un_m49": 340,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Croatia",
        "country_iso_2_char_code": "HR",
        "country_iso_3_char_code": "HRV",
        "un_m49": 191,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Haiti",
        "country_iso_2_char_code": "HT",
        "country_iso_3_char_code": "HTI",
        "un_m49": 332,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Hungary",
        "country_iso_2_char_code": "HU",
        "country_iso_3_char_code": "HUN",
        "un_m49": 348,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Indonesia",
        "country_iso_2_char_code": "ID",
        "country_iso_3_char_code": "IDN",
        "un_m49": 360,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Isle of Man",
        "country_iso_2_char_code": "IM",
        "country_iso_3_char_code": "IMN",
        "un_m49": 833,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "India",
        "country_iso_2_char_code": "IN",
        "country_iso_3_char_code": "IND",
        "un_m49": 356,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "British Indian Ocean Territory",
        "country_iso_2_char_code": "IO",
        "country_iso_3_char_code": "IOT",
        "un_m49": 86,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ireland",
        "country_iso_2_char_code": "IE",
        "country_iso_3_char_code": "IRL",
        "un_m49": 372,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iran, Islamic Republic of",
        "country_iso_2_char_code": "IR",
        "country_iso_3_char_code": "IRN",
        "un_m49": 364,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iraq",
        "country_iso_2_char_code": "IQ",
        "country_iso_3_char_code": "IRQ",
        "un_m49": 368,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Iceland",
        "country_iso_2_char_code": "IS",
        "country_iso_3_char_code": "ISL",
        "un_m49": 352,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Israel",
        "country_iso_2_char_code": "IL",
        "country_iso_3_char_code": "ISR",
        "un_m49": 376,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Italy",
        "country_iso_2_char_code": "IT",
        "country_iso_3_char_code": "ITA",
        "un_m49": 380,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jamaica",
        "country_iso_2_char_code": "JM",
        "country_iso_3_char_code": "JAM",
        "un_m49": 388,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jersey",
        "country_iso_2_char_code": "JE",
        "country_iso_3_char_code": "JEY",
        "un_m49": 832,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Jordan",
        "country_iso_2_char_code": "JO",
        "country_iso_3_char_code": "JOR",
        "un_m49": 400,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Japan",
        "country_iso_2_char_code": "JP",
        "country_iso_3_char_code": "JPN",
        "un_m49": 392,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kazakhstan",
        "country_iso_2_char_code": "KZ",
        "country_iso_3_char_code": "KAZ",
        "un_m49": 398,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kenya",
        "country_iso_2_char_code": "KE",
        "country_iso_3_char_code": "KEN",
        "un_m49": 404,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kyrgyzstan",
        "country_iso_2_char_code": "KG",
        "country_iso_3_char_code": "KGZ",
        "un_m49": 417,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Cambodia",
        "country_iso_2_char_code": "KH",
        "country_iso_3_char_code": "KHM",
        "un_m49": 116,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kiribati",
        "country_iso_2_char_code": "KI",
        "country_iso_3_char_code": "KIR",
        "un_m49": 296,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Kitts and Nevis",
        "country_iso_2_char_code": "KN",
        "country_iso_3_char_code": "KNA",
        "un_m49": 659,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Korea (South)",
        "country_iso_2_char_code": "KR",
        "country_iso_3_char_code": "KOR",
        "un_m49": 410,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Kuwait",
        "country_iso_2_char_code": "KW",
        "country_iso_3_char_code": "KWT",
        "un_m49": 414,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lao PDR",
        "country_iso_2_char_code": "LA",
        "country_iso_3_char_code": "LAO",
        "un_m49": 418,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lebanon",
        "country_iso_2_char_code": "LB",
        "country_iso_3_char_code": "LBN",
        "un_m49": 422,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Liberia",
        "country_iso_2_char_code": "LR",
        "country_iso_3_char_code": "LBR",
        "un_m49": 430,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Libya",
        "country_iso_2_char_code": "LY",
        "country_iso_3_char_code": "LBY",
        "un_m49": 434,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Lucia",
        "country_iso_2_char_code": "LC",
        "country_iso_3_char_code": "LCA",
        "un_m49": 662,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Liechtenstein",
        "country_iso_2_char_code": "LI",
        "country_iso_3_char_code": "LIE",
        "un_m49": 438,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sri Lanka",
        "country_iso_2_char_code": "LK",
        "country_iso_3_char_code": "LKA",
        "un_m49": 144,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lesotho",
        "country_iso_2_char_code": "LS",
        "country_iso_3_char_code": "LSO",
        "un_m49": 426,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Lithuania",
        "country_iso_2_char_code": "LT",
        "country_iso_3_char_code": "LTU",
        "un_m49": 440,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Luxembourg",
        "country_iso_2_char_code": "LU",
        "country_iso_3_char_code": "LUX",
        "un_m49": 442,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Latvia",
        "country_iso_2_char_code": "LV",
        "country_iso_3_char_code": "LVA",
        "un_m49": 428,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Macao, SAR China",
        "country_iso_2_char_code": "MO",
        "country_iso_3_char_code": "MAC",
        "un_m49": 446,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint-Martin (French part)",
        "country_iso_2_char_code": "MF",
        "country_iso_3_char_code": "MAF",
        "un_m49": 663,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Morocco",
        "country_iso_2_char_code": "MA",
        "country_iso_3_char_code": "MAR",
        "un_m49": 504,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Monaco",
        "country_iso_2_char_code": "MC",
        "country_iso_3_char_code": "MCO",
        "un_m49": 492,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Moldova",
        "country_iso_2_char_code": "MD",
        "country_iso_3_char_code": "MDA",
        "un_m49": 498,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Madagascar",
        "country_iso_2_char_code": "MG",
        "country_iso_3_char_code": "MDG",
        "un_m49": 450,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Maldives",
        "country_iso_2_char_code": "MV",
        "country_iso_3_char_code": "MDV",
        "un_m49": 462,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mexico",
        "country_iso_2_char_code": "MX",
        "country_iso_3_char_code": "MEX",
        "un_m49": 484,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Marshall Islands",
        "country_iso_2_char_code": "MH",
        "country_iso_3_char_code": "MHL",
        "un_m49": 584,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Macedonia, Republic of",
        "country_iso_2_char_code": "MK",
        "country_iso_3_char_code": "MKD",
        "un_m49": 807,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mali",
        "country_iso_2_char_code": "ML",
        "country_iso_3_char_code": "MLI",
        "un_m49": 466,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malta",
        "country_iso_2_char_code": "MT",
        "country_iso_3_char_code": "MLT",
        "un_m49": 470,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Myanmar",
        "country_iso_2_char_code": "MM",
        "country_iso_3_char_code": "MMR",
        "un_m49": 104,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Montenegro",
        "country_iso_2_char_code": "ME",
        "country_iso_3_char_code": "MNE",
        "un_m49": 499,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mongolia",
        "country_iso_2_char_code": "MN",
        "country_iso_3_char_code": "MNG",
        "un_m49": 496,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Northern Mariana Islands",
        "country_iso_2_char_code": "MP",
        "country_iso_3_char_code": "MNP",
        "un_m49": 580,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mozambique",
        "country_iso_2_char_code": "MZ",
        "country_iso_3_char_code": "MOZ",
        "un_m49": 508,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mauritania",
        "country_iso_2_char_code": "MR",
        "country_iso_3_char_code": "MRT",
        "un_m49": 478,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Montserrat",
        "country_iso_2_char_code": "MS",
        "country_iso_3_char_code": "MSR",
        "un_m49": 500,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Martinique",
        "country_iso_2_char_code": "MQ",
        "country_iso_3_char_code": "MTQ",
        "un_m49": 474,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mauritius",
        "country_iso_2_char_code": "MU",
        "country_iso_3_char_code": "MUS",
        "un_m49": 480,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malawi",
        "country_iso_2_char_code": "MW",
        "country_iso_3_char_code": "MWI",
        "un_m49": 454,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Malaysia",
        "country_iso_2_char_code": "MY",
        "country_iso_3_char_code": "MYS",
        "un_m49": 458,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Mayotte",
        "country_iso_2_char_code": "YT",
        "country_iso_3_char_code": "MYT",
        "un_m49": 175,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Namibia",
        "country_iso_2_char_code": "NA",
        "country_iso_3_char_code": "NAM",
        "un_m49": 516,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "New Caledonia",
        "country_iso_2_char_code": "NC",
        "country_iso_3_char_code": "NCL",
        "un_m49": 540,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Niger",
        "country_iso_2_char_code": "NE",
        "country_iso_3_char_code": "NER",
        "un_m49": 562,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Norfolk Island",
        "country_iso_2_char_code": "NF",
        "country_iso_3_char_code": "NFK",
        "un_m49": 574,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nigeria",
        "country_iso_2_char_code": "NG",
        "country_iso_3_char_code": "NGA",
        "un_m49": 566,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nicaragua",
        "country_iso_2_char_code": "NI",
        "country_iso_3_char_code": "NIC",
        "un_m49": 558,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Niue",
        "country_iso_2_char_code": "NU",
        "country_iso_3_char_code": "NIU",
        "un_m49": 570,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Netherlands",
        "country_iso_2_char_code": "NL",
        "country_iso_3_char_code": "NLD",
        "un_m49": 528,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Norway",
        "country_iso_2_char_code": "NO",
        "country_iso_3_char_code": "NOR",
        "un_m49": 578,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nepal",
        "country_iso_2_char_code": "NP",
        "country_iso_3_char_code": "NPL",
        "un_m49": 524,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Nauru",
        "country_iso_2_char_code": "NR",
        "country_iso_3_char_code": "NRU",
        "un_m49": 520,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "New Zealand",
        "country_iso_2_char_code": "NZ",
        "country_iso_3_char_code": "NZL",
        "un_m49": 554,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Oman",
        "country_iso_2_char_code": "OM",
        "country_iso_3_char_code": "OMN",
        "un_m49": 512,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Pakistan",
        "country_iso_2_char_code": "PK",
        "country_iso_3_char_code": "PAK",
        "un_m49": 586,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Panama",
        "country_iso_2_char_code": "PA",
        "country_iso_3_char_code": "PAN",
        "un_m49": 591,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Pitcairn",
        "country_iso_2_char_code": "PN",
        "country_iso_3_char_code": "PCN",
        "un_m49": 612,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Peru",
        "country_iso_2_char_code": "PE",
        "country_iso_3_char_code": "PER",
        "un_m49": 604,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Philippines",
        "country_iso_2_char_code": "PH",
        "country_iso_3_char_code": "PHL",
        "un_m49": 608,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Palau",
        "country_iso_2_char_code": "PW",
        "country_iso_3_char_code": "PLW",
        "un_m49": 585,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Papua New Guinea",
        "country_iso_2_char_code": "PG",
        "country_iso_3_char_code": "PNG",
        "un_m49": 598,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Poland",
        "country_iso_2_char_code": "PL",
        "country_iso_3_char_code": "POL",
        "un_m49": 616,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Puerto Rico",
        "country_iso_2_char_code": "PR",
        "country_iso_3_char_code": "PRI",
        "un_m49": 630,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Korea (North)",
        "country_iso_2_char_code": "KP",
        "country_iso_3_char_code": "PRK",
        "un_m49": 408,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Portugal",
        "country_iso_2_char_code": "PT",
        "country_iso_3_char_code": "PRT",
        "un_m49": 620,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Paraguay",
        "country_iso_2_char_code": "PY",
        "country_iso_3_char_code": "PRY",
        "un_m49": 600,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Palestinian Territory",
        "country_iso_2_char_code": "PS",
        "country_iso_3_char_code": "PSE",
        "un_m49": 275,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "French Polynesia",
        "country_iso_2_char_code": "PF",
        "country_iso_3_char_code": "PYF",
        "un_m49": 258,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Qatar",
        "country_iso_2_char_code": "QA",
        "country_iso_3_char_code": "QAT",
        "un_m49": 634,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Réunion",
        "country_iso_2_char_code": "RE",
        "country_iso_3_char_code": "REU",
        "un_m49": 638,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Romania",
        "country_iso_2_char_code": "RO",
        "country_iso_3_char_code": "ROU",
        "un_m49": 642,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Russian Federation",
        "country_iso_2_char_code": "RU",
        "country_iso_3_char_code": "RUS",
        "un_m49": 643,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Rwanda",
        "country_iso_2_char_code": "RW",
        "country_iso_3_char_code": "RWA",
        "un_m49": 646,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saudi Arabia",
        "country_iso_2_char_code": "SA",
        "country_iso_3_char_code": "SAU",
        "un_m49": 682,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sudan",
        "country_iso_2_char_code": "SD",
        "country_iso_3_char_code": "SDN",
        "un_m49": 736,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Senegal",
        "country_iso_2_char_code": "SN",
        "country_iso_3_char_code": "SEN",
        "un_m49": 686,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Singapore",
        "country_iso_2_char_code": "SG",
        "country_iso_3_char_code": "SGP",
        "un_m49": 702,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "country_iso_2_char_code": "GS",
        "country_iso_3_char_code": "SGS",
        "un_m49": 239,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Helena",
        "country_iso_2_char_code": "SH",
        "country_iso_3_char_code": "SHN",
        "un_m49": 654,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Svalbard and Jan Mayen Islands",
        "country_iso_2_char_code": "SJ",
        "country_iso_3_char_code": "SJM",
        "un_m49": 744,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Solomon Islands",
        "country_iso_2_char_code": "SB",
        "country_iso_3_char_code": "SLB",
        "un_m49": 90,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sierra Leone",
        "country_iso_2_char_code": "SL",
        "country_iso_3_char_code": "SLE",
        "un_m49": 694,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "El Salvador",
        "country_iso_2_char_code": "SV",
        "country_iso_3_char_code": "SLV",
        "un_m49": 222,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "San Marino",
        "country_iso_2_char_code": "SM",
        "country_iso_3_char_code": "SMR",
        "un_m49": 674,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Somalia",
        "country_iso_2_char_code": "SO",
        "country_iso_3_char_code": "SOM",
        "un_m49": 706,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "country_iso_2_char_code": "PM",
        "country_iso_3_char_code": "SPM",
        "un_m49": 666,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Serbia",
        "country_iso_2_char_code": "RS",
        "country_iso_3_char_code": "SRB",
        "un_m49": 688,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Sudan",
        "country_iso_2_char_code": "SS",
        "country_iso_3_char_code": "SSD",
        "un_m49": 728,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sao Tome and Principe",
        "country_iso_2_char_code": "ST",
        "country_iso_3_char_code": "STP",
        "un_m49": 678,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Suriname",
        "country_iso_2_char_code": "SR",
        "country_iso_3_char_code": "SUR",
        "un_m49": 740,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Slovakia",
        "country_iso_2_char_code": "SK",
        "country_iso_3_char_code": "SVK",
        "un_m49": 703,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Slovenia",
        "country_iso_2_char_code": "SI",
        "country_iso_3_char_code": "SVN",
        "un_m49": 705,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Sweden",
        "country_iso_2_char_code": "SE",
        "country_iso_3_char_code": "SWE",
        "un_m49": 752,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Swaziland",
        "country_iso_2_char_code": "SZ",
        "country_iso_3_char_code": "SWZ",
        "un_m49": 748,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Seychelles",
        "country_iso_2_char_code": "SC",
        "country_iso_3_char_code": "SYC",
        "un_m49": 690,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Syrian Arab Republic (Syria)",
        "country_iso_2_char_code": "SY",
        "country_iso_3_char_code": "SYR",
        "un_m49": 760,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turks and Caicos Islands",
        "country_iso_2_char_code": "TC",
        "country_iso_3_char_code": "TCA",
        "un_m49": 796,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Chad",
        "country_iso_2_char_code": "TD",
        "country_iso_3_char_code": "TCD",
        "un_m49": 148,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Togo",
        "country_iso_2_char_code": "TG",
        "country_iso_3_char_code": "TGO",
        "un_m49": 768,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Thailand",
        "country_iso_2_char_code": "TH",
        "country_iso_3_char_code": "THA",
        "un_m49": 764,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tajikistan",
        "country_iso_2_char_code": "TJ",
        "country_iso_3_char_code": "TJK",
        "un_m49": 762,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tokelau",
        "country_iso_2_char_code": "TK",
        "country_iso_3_char_code": "TKL",
        "un_m49": 772,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turkmenistan",
        "country_iso_2_char_code": "TM",
        "country_iso_3_char_code": "TKM",
        "un_m49": 795,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Timor-Leste",
        "country_iso_2_char_code": "TL",
        "country_iso_3_char_code": "TLS",
        "un_m49": 626,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tonga",
        "country_iso_2_char_code": "TO",
        "country_iso_3_char_code": "TON",
        "un_m49": 776,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Trinidad and Tobago",
        "country_iso_2_char_code": "TT",
        "country_iso_3_char_code": "TTO",
        "un_m49": 780,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tunisia",
        "country_iso_2_char_code": "TN",
        "country_iso_3_char_code": "TUN",
        "un_m49": 788,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Turkey",
        "country_iso_2_char_code": "TR",
        "country_iso_3_char_code": "TUR",
        "un_m49": 792,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tuvalu",
        "country_iso_2_char_code": "TV",
        "country_iso_3_char_code": "TUV",
        "un_m49": 798,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Taiwan, Republic of China",
        "country_iso_2_char_code": "TW",
        "country_iso_3_char_code": "TWN",
        "un_m49": 158,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Tanzania, United Republic of",
        "country_iso_2_char_code": "TZ",
        "country_iso_3_char_code": "TZA",
        "un_m49": 834,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uganda",
        "country_iso_2_char_code": "UG",
        "country_iso_3_char_code": "UGA",
        "un_m49": 800,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Ukraine",
        "country_iso_2_char_code": "UA",
        "country_iso_3_char_code": "UKR",
        "un_m49": 804,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "US Minor Outlying Islands",
        "country_iso_2_char_code": "UM",
        "country_iso_3_char_code": "UMI",
        "un_m49": 581,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uruguay",
        "country_iso_2_char_code": "UY",
        "country_iso_3_char_code": "URY",
        "un_m49": 858,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "United States of America",
        "country_iso_2_char_code": "US",
        "country_iso_3_char_code": "USA",
        "un_m49": 840,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Uzbekistan",
        "country_iso_2_char_code": "UZ",
        "country_iso_3_char_code": "UZB",
        "un_m49": 860,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Holy See (Vatican City State)",
        "country_iso_2_char_code": "VA",
        "country_iso_3_char_code": "VAT",
        "un_m49": 336,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Saint Vincent and Grenadines",
        "country_iso_2_char_code": "VC",
        "country_iso_3_char_code": "VCT",
        "un_m49": 670,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Venezuela (Bolivarian Republic)",
        "country_iso_2_char_code": "VE",
        "country_iso_3_char_code": "VEN",
        "un_m49": 862,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "British Virgin Islands",
        "country_iso_2_char_code": "VG",
        "country_iso_3_char_code": "VGB",
        "un_m49": 92,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Virgin Islands, US",
        "country_iso_2_char_code": "VI",
        "country_iso_3_char_code": "VIR",
        "un_m49": 850,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Viet Nam",
        "country_iso_2_char_code": "VN",
        "country_iso_3_char_code": "VNM",
        "un_m49": 704,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Vanuatu",
        "country_iso_2_char_code": "VU",
        "country_iso_3_char_code": "VUT",
        "un_m49": 548,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Wallis and Futuna Islands",
        "country_iso_2_char_code": "WF",
        "country_iso_3_char_code": "WLF",
        "un_m49": 876,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Samoa",
        "country_iso_2_char_code": "WS",
        "country_iso_3_char_code": "WSM",
        "un_m49": 882,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Yemen",
        "country_iso_2_char_code": "YE",
        "country_iso_3_char_code": "YEM",
        "un_m49": 887,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "South Africa",
        "country_iso_2_char_code": "ZA",
        "country_iso_3_char_code": "ZAF",
        "un_m49": 710,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Zambia",
        "country_iso_2_char_code": "ZM",
        "country_iso_3_char_code": "ZMB",
        "un_m49": 894,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    },
    {
        "country": "Zimbabwe",
        "country_iso_2_char_code": "ZW",
        "country_iso_3_char_code": "ZWE",
        "un_m49": 716,
        "currency_iso_3_char_code": "EUR",
        "currency_name": "European euro",
        "recipient_type": "SWIFT_CODE",
        "recipient_name": "SWIFT code"
    }
]

export default currencies