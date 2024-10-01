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
  lightWarmGray: '#e7e2e2de',
  mediumGray: '#b9b9b9',
  desaturatedDarkBlue: '#3b4d5d2b',
  charcoalBlueTransparent: '#11151775',
};

export const lightTheme: IThemeColors = {
  primaryBg: colors.veryLightGray,
  secondaryBg: colors.white,
  primaryText: colors.charcoalBlue,
  primaryShadowColor: colors.charcoalBlueTransparent,
  primaryHover: colors.charcoalBlue,
  secondaryHover: colors.lightGray,
  primaryActive: colors.slateBlue,
  secondaryActive:  colors.darkGray,
  borderColor: colors.lightWarmGray,
  placeholderColor: colors.mediumGray,

  skeletonBaseColor: colors.lightGray,
  skeletonHighlightColor: colors.veryLightGray,
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
  borderColor: colors.desaturatedDarkBlue,
  placeholderColor: colors.lightGray,

  skeletonBaseColorImg: colors.darkSlate,
  skeletonBaseColor: colors.darkBlue,
  skeletonHighlightColor: colors.deepNavy,
};