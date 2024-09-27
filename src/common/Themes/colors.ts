import { IThemeColors } from "../interfaces/ITheme";

export const colors = {
  black: '#000000',
  darkBlue: '#2b3945',
  veryDarkBlue: '#202c37',
  charcoalBlue: '#111517',
  darkGray: '#858585',
  veryLightGray: '#fafafa',
  white: '#ffffff',
  lightGray: '#d1d1d1',
  slateBlue: '#678098',
  softGray: '#e6e6e611',
  faintGray: '#dddddd1f',
  darkSlate: '#232f3959',
  deepNavy: '#202c3760',
};

export const lightTheme: IThemeColors = {
  primaryBg: colors.veryLightGray,
  secondaryBg: colors.white,
  primaryText: colors.charcoalBlue,
  primaryShadowColor: '',
  primaryHover: '',
  secondaryHover: '',
  primaryActive: '',
  secondaryActive: '',
  skeletonBaseColorImg: '',
  skeletonHighlightColor: '',
  placeholderColor: colors.lightGray,
};

export const darkTheme: IThemeColors = {
  primaryBg: colors.veryDarkBlue,
  secondaryBg: colors.darkBlue,
  primaryText: colors.white,
  primaryShadowColor: colors.charcoalBlue,
  primaryHover: colors.lightGray,
  secondaryHover: colors.softGray,
  primaryActive: colors.slateBlue,
  secondaryActive: colors.faintGray,

  skeletonBaseColorImg: colors.darkSlate,
  skeletonHighlightColor: colors.deepNavy,
  placeholderColor: colors.lightGray,
};