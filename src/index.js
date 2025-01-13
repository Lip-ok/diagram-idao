import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { StyleContextProvider } from "./styles/style.context";

import "./styles/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.otf";
import "./styles/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.otf";
import "./styles/fonts/Inter/Inter-Medium.ttf";
import "./styles/fonts/Inter/Inter-SemiBold.ttf";
import "./styles/global.css";

ReactDOM.render(
  <StyleContextProvider>
    <App />
  </StyleContextProvider>,
  document.getElementById("root")
);
