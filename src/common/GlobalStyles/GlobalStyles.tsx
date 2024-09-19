import { createGlobalStyle, css } from "styled-components";
import Colors from "./Colors";
// import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Colors.veryDarkBlue};
    color: ${Colors.white};
    font-family: 'Nunito Sans';
    font-weight: 400;

    input, select, button {
      font-family: 'Nunito Sans';
    }

    button {
      padding: 0px;
    }
  }
`;
export default GlobalStyles;

export const BaseButton = css`
  border: .125rem solid ${Colors.darkBlue};
  border-radius: .25rem;

  background-color: ${Colors.darkBlue};
  box-shadow: 0rem -0.25rem 1.125rem -0.25rem ${Colors.charcoalBlue};
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  color: white;
  text-decoration: none;
  width: 100%;

  &:hover {
    border-color: #2c3741;
    background-color: #2c3741;
  }

  &:active {
    border-color: ${Colors.darkGrayHover};
    background: ${Colors.veryDarkBlue};
  }
`;