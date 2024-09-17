import { atom } from "recoil";
import { ICountry } from "../types/ICountry";

export const darkModeState = atom<boolean>({
  key: 'darkMode',
  default: true,
});

export const selectedCountryState = atom<ICountry | null>({
  key: 'selectedCountryState',
  default: null,
});