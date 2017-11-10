import Component, { isPreact} from "./config";
import React from "react";
import { h } from "preact";
// import React, { Component } from "react";


import randomColor from "randomcolor";
if(isPreact)alert("if you are using preact you need to update 'UpdateNode.js'")
/* PureComponent basiclly does this
````````````
shouldComponentUpdate = (nextProps, nextState) => {
return (this.props!==nextProps||this.state!==nextState)
}
```````````` 
so only updates if it gets something new
*/
export default class UpdateNode extends React.PureComponent{
  constructor(props) {
    super(props);
    this.bg=randomColor({ luminosity: 'dark', format: 'hsla' })

  }
render(){
  const {text,count} = this.props
  
  return (<div style={{ alignText: "center", width: "40%", height: "50px", background: this.bg }}>
         <p>{text}: {count}</p>
       </div>)
}

}





// const UpdateNode=({ text, count, backgroundColor }) => (<div style={{ background: backgroundColor }}>
//         <p>
//           {text}: {count}
//         </p>
//       </div>)
// export default UpdateNode