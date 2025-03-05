export interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface ICurrencies {
  [key: string]: {
    name: string;
    symbol: string;
  }
}

export interface ILanguages {
  [key: string]: string;
}

export interface ICountry {
  flags: IFlags;
  name: IName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: ICurrencies;
  languages: { [key: string]: string };
  borders: string[];
}