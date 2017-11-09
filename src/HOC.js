import Component from "./config";
import React from "react";
import { h } from "preact";
export default function HOC(WrappedComponent) {
  return class extends Component {
    shouldComponentUpdate() {
      return true;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
