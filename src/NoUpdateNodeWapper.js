import Component from "./config";
import React from "react";
import { h } from "preact";
// import React, { Component } from "react";
import randomColor from "randomcolor";

export default class NoUpdateNodeWapper extends Component {
constructor(props){
  super(props);
  this.bg=randomColor()
}
  shouldComponentUpdate() {
           return false;
         }
         render() {
           return (<div style={{ background: this.bg }}>
               {this.props.children}
         </div>);
         }
       }

