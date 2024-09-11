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

export interface ICountry {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: string;
  population: number;
}