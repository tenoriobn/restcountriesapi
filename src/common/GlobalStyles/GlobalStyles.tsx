import { createGlobalStyle, css } from "styled-components";
import typography from "../Themes/typography";
import { transitions } from "../Themes/transitions";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    font-family: ${typography.fonts.nunito};
    font-weight: 400;

    input, select, button {
      font-family: ${typography.fonts.nunito};
    }

    button {
      padding: 0px;
    }
  }
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
    border-color: #2c3741;
    background-color: #2c3741;
  }

  &:active {
    border-color: ${({ theme }) => theme.primaryHover};
    background: ${({ theme }) => theme.primaryBg};
  }
`;