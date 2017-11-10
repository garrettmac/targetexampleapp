import Component from "./config";
import React from "react";
import { h } from "preact";
// import React, { Component } from "react";
import randomColor from "randomcolor";

export default class NoUpdateNodeWapper extends Component {
  
  shouldComponentUpdate() {return false;}
         render() {
           return (<div>
               {this.props.children}
         </div>);
         }
       }

