import { createGlobalStyle, css } from "styled-components";
import typography from "../Themes/typography";
import { transitions } from "../Themes/transitions";

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, 
  kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, 
  dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, 
  th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary, time, mark, audio, video 
  {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 200 1000;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/nunitosans/v15/pe0AMImSLYBIv1o4X1M8ce2xCx3yop4tQpF_MeTm0lfUVwoNnq4CLz0_kJ3xzA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    line-height: 1;
    background-color: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    font-family: ${typography.fonts.nunito};
    font-display: swap;
    font-weight: 400;

    input, select, button {
      font-family: ${typography.fonts.nunito};
      font-display: swap;
    }

    button {
      padding: 0px;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Additional Styles */
`;

export default GlobalStyles;

export const BaseButton = css`
  border: .125rem solid ${({ theme }) => theme.secondaryBg};
  border-radius: .25rem;

  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: 0rem -0.25rem 1.125rem -0.25rem ${({ theme }) => theme.primaryShadowColor};
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};
  text-decoration: none;
  text-align: center;
  width: 100%;

  transition: ${transitions.smoothTransition};

  &:hover {
    border-color: ${({ theme }) => theme.secondaryHover};
    background-color: ${({ theme }) => theme.secondaryHover};
  }

  &:active {
    border-color: ${({ theme }) => theme.primaryHover};
  }
`;
