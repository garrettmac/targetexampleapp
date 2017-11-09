import Component, {Lib} from "./config";

import React from "react";
import createTargetComponent from "@adobe/target-react-component";
import {h} from "preact";

export default class AdobeTargetWrapper extends Component {
  render() {
    let Target = "div";

    //  if (global.adobe && global.adobe.target)
    Target = createTargetComponent(Lib);

    let mboxName = "MBOX_ID_HERE";

    return (
      <Target data-mbox={mboxName}>
        {this.props.children}
      </Target>
    );
  }
}