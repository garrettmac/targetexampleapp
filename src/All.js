import Component, { Lib } from "./config";

import React from "react";
import createTargetComponent from "@adobe/target-react-component";
import { h } from "preact";
import './App.css';

import Component, { isPreact, useRedux } from "./config";
import { Provider, connect } from "react-redux";
import { actions, store } from "./redux";
import { bindActionCreators, createStore } from "redux";

import AdobeTargetWrapper from "./AdobeTargetWrapper";
import HOC from "./HOC";
import NoUpdateNodeWapper from "./NoUpdateNodeWapper";
import React from "react";
import UpdateNode from "./UpdateNode";
import { h } from "preact";
import Preact,{Component as PreactComponent, h, render} from "preact";
import React, { Component as ReactComponent } from "react";

import ReactDOM from "react-dom";

// export const isPreact=true
export const isPreact=false
export const useRedux = false
const Component=(isPreact)?PreactComponent:ReactComponent
// export default ReactComponent;
export default Component;
export const Lib = isPreact ? Preact : React ;
export const renderer = isPreact ? render : ReactDOM.render;


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

export default class AdobeTargetWrapper extends Component {
  render() {
    let Target = "div";

    //  if (global.adobe && global.adobe.target)
    Target = createTargetComponent(Lib);

    let mboxName = "Pdp_mbox_alsolikerecs";

    return <Target data-mbox={mboxName}>{this.props.children}</Target>;
  }
}



// import logo from './logo.svg';


//TODO TRY https://stackoverflow.com/questions/39681737/react-redux-and-should-component-update-optimisation


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
     
//       </div>
//     );
//   }
// }

// export default App;
// example redux pen https://codepen.io/allanpope/pen/vKXmam


// console.clear();





class divNode extends Component {
render(){return (<div></div>)}
}
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      count: 0,
      stateComponent: <UpdateNode text="child two" count={0} />
    };
  }
  componentDidMount() {
    setInterval(() => {
       if (useRedux)store.dispatch({ type: "INCREMENT" });
      this.setState(
        {
          count: this.state.count + 1,
          stateComponent: null
        },
        () => {
          let stateComponent = (
            <NoUpdateNodeWapper>
              <UpdateNode
                text="no update node on state"
                count={this.state.count}
              />
               {useRedux && (<UpdateNode text="NU redux" count={this.props.reduxCount} />)}
            </NoUpdateNodeWapper>
          );
          this.setState({ stateComponent });
        }
      );
    }, 6000);
  }
  render() {
    
       // console.log(this.props)
    // const HOCNoUpdateNodeWapperOverride = HOC(NoUpdateNodeWapper);
    const HOCNoUpdateNodeWapperOverride = HOC(AdobeTargetWrapper);
    // const HOCNoUpdateNodeWapperOverride = (divNode);
    return <div>
        <center>
          <h1>
            using {isPreact ? "Preact" : "React"} with{!useRedux && "out"} Redux
          </h1>
          <h1>using {isPreact ? "Preact" : "React"}</h1>
          {/* ---------------------normal--------------------- */}
          {/* <hr />
          <h3>normally managed state</h3>
          <UpdateNode text="state count" count={this.state.count} />
           {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount} /> */}
          {/* ---------------------normal--------------------- */}
          <hr />
          <h3>shouldComponentUpdate - no</h3>
          <NoUpdateNodeWapper>
            <UpdateNode text="state count" count={this.state.count} />
            {useRedux && <UpdateNode text="redux count" count={this.props.reduxCount} />}
          </NoUpdateNodeWapper>
          <hr />

          {/* ---------------------normal--------------------- */}

          <h3>AdobeTargetWrapper</h3>
          <AdobeTargetWrapper>
            <UpdateNode text="state count" count={this.state.count} />
            {useRedux && <UpdateNode text="redux count" count={this.props.reduxCount} />}
          </AdobeTargetWrapper>

          {/* ---------------------normal--------------------- */}
          <hr />
          <h3>inside HOC to Override shouldComponentUpdate</h3>
          <HOCNoUpdateNodeWapperOverride>
            <UpdateNode text="state count" count={this.state.count} />
            {useRedux && <UpdateNode text="redux count" count={this.props.reduxCount} />}
          </HOCNoUpdateNodeWapperOverride>

          {/* ---------------------normal--------------------- */}

          <hr />
          <h3>HACK: new setState(parentComponent) by parent</h3>
          {this.state.stateComponent}
          <hr />
          <p>want to update whats inside shouldComponentUpdate</p>
        </center>
      </div>;
  }
}





// Render the app
let Root =App
if(useRedux)Root =connect(
	function mapStateToProps(state) {return {reduxCount: state};},
	function mapDispatchToProps(dispatch) {return bindActionCreators(actions, dispatch);}
)(App);

export default Root
