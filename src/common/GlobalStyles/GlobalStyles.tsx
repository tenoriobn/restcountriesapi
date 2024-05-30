import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Colors.veryDarkBlue};
    color: ${Colors.white};
    font-family: 'Nunito Sans';
    font-weight: 400;

    input, select {
      font-family: 'Nunito Sans';
    }
  }
`;

export default GlobalStyles;