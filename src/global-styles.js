import { createGlobalStyle } from "styled-components";

export const GlobalStylesMacro = createGlobalStyle`
  html, body  {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #333333;
  }
`;
