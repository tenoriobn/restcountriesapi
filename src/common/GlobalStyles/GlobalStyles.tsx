import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Nunito Sans';
    font-weight: 400;
    color: ${Colors.black};
  }
`;

export default GlobalStyles;