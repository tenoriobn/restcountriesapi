import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Colors.veryDarkBlue};
    color: ${Colors.black};
    font-family: 'Nunito Sans';
    font-weight: 400;
  }
`;

export default GlobalStyles;