import Preact,{Component as PreactComponent, h, render} from "preact";
import React, { Component as ReactComponent } from "react";

import ReactDOM from "react-dom";

// export const isPreact=true
export const isPreact=false
export const useRedux = true
// export const useRedux = false
const Component = ReactComponent//(isPreact) ? PreactComponent : ReactComponent;
// export default ReactComponent;
export default Component;
export const Lib = isPreact ? Preact : React ;
export const renderer = isPreact ? render : ReactDOM.render;

