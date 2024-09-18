import { atom } from "recoil";
import { ICountry } from "../interfaces/ICountry";
import { ICountryFilter } from "../interfaces/ICountryFilter";

export const darkModeState = atom<boolean>({
  key: 'darkMode',
  default: true,
});

export const selectedCountryState = atom<ICountry | null>({
  key: 'selectedCountryState',
  default: null,
});

export const countryFilterState = atom<ICountryFilter | null>({
  key: 'countryFilterState',
  default: null,
});