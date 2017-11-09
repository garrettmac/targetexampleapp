//  require("babel-core").transform("code", {
//   //  plugins: ["react","es2015","transform-react-jsx", { pragma: "h" }]
//    plugins: ["react","es2015"]
//    //plugins: [["react","es2015","transform-react-jsx", { pragma: "h" }]]
//  });

import "./index.css";

import Component, { isPreact,useRedux, renderer } from "./config";
import { Provider, connect } from "react-redux";

import App from "./App";
import React from "react";
// import React from 'react';
import ReactDOM from "react-dom";
import { h } from "preact";
import  {store} from "./redux";

if (isPreact) require("preact");
let Root = ()=>{
if(useRedux)
return (<Provider store={store}>
      <App />
    </Provider>)
    return (<App/>)
}

renderer(
   Root(),
    document.getElementById("root")
  );
// registerServiceWorker();
