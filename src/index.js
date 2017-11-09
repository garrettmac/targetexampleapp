import "./index.css";

import Component, { isPreact, renderer } from "./config";
import { Provider, connect } from "react-redux";

import App from "./App";
import React from "react";
// import React from 'react';
import ReactDOM from "react-dom";
import { h } from "preact";
import { store } from "./redux";
import AdobeTargetWrapper from "./AdobeTargetWrapper";

if(isPreact) require("preact");


renderer(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

// registerServiceWorker();
