import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "twin.macro";
import { GlobalStylesMacro } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

render(
  <>
    <GlobalStyles />
    <GlobalStylesMacro />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
