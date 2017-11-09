import "./App.css";

import {h, Component} from "preact";
import {isPreact, useRedux} from "./config";
import {Provider, connect} from "react-redux";
import {actions, store} from "./redux";
import {bindActionCreators, createStore} from "redux";

import AdobeTargetWrapper from "./AdobeTargetWrapper";
import HOC from "./HOC";
import NoUpdateNodeWapper from "./NoUpdateNodeWapper";
import React from "react";
import UpdateNode from "./UpdateNode";
import randomColor from "randomcolor";

const divNode = () => (
  <div></div>
);

const HOCNoUpdateNodeWapperOverride = HOC(AdobeTargetWrapper);

// class App extends React.PureComponent {
  const stateComponent= <UpdateNode text="child two" count={0}/>
class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this
.renderHeader.bind(this);
    this.renderStateExample = this
.renderStateExample.bind(this);
    this.renderHOCExample = this
.renderHOCExample.bind(this);
    this.renderSCUExample = this
.renderSCUExample.bind(this);
    this.renderTargetExample = this
.renderTargetExample.bind(this);
    this.renderTargetOverideExample = this
.renderTargetOverideExample.bind(this);
  }

  state = {
    count: 0,
    // stateComponent
  };
shouldComponentUpdate = (nextProps, nextState) => {
  // console.log(this.props);
  // console.log(nextProps);
  // console.log(this.props === nextProps);
  // console.log(this.state.count == nextState.count);
  console.log(this.props !== nextProps)
  console.log(this.state.count !== nextState.count);//true if new state
  console.log(this.props !== nextProps || this.state.count !== nextState.count);//true if new state
return (this.props!==nextProps||this.state.count!==nextState.count)
}

  componentDidMount() {
    setInterval(() => {
      console.log("updated");
      if (useRedux) 
        store.dispatch({type: "INCREMENT"});
   
      this.setState({
        count: this.state.count + 1,
          stateComponent: null
       }, () => {
         let stateComponent = (
           <NoUpdateNodeWapper>
             <UpdateNode text="no update node on state" count={this.state.count}/> {useRedux && (<UpdateNode text="NU redux" count={this.props.reduxCount}/>)}
           </NoUpdateNodeWapper>
         );
          this.setState({ stateComponent });
      });
    }, 6000);
  }
  render() {
    // console.log(this.props) const HOCNoUpdateNodeWapperOverride =
    // HOC(NoUpdateNodeWapper); const HOCNoUpdateNodeWapperOverride = (divNode);
    return <div>
        <center style={{ background: randomColor() }}>
          {/* disabled
            
          */}
          {this.renderHeader()}
          {this.renderStateExample()}
          {this.renderHOCExample()}
          {this.renderSCUExample()}
          {this.renderTargetExample()}
          {this.renderTargetOverideExample()}
        </center>
      </div>;
  }
  renderHeader() {
    return (
      <h1>
        using {isPreact
          ? "Preact"
          : "React"}
        with{!useRedux && "out"}
        Redux
      </h1>
    );
  }

  renderStateExample() {
    return (
      <div>
        <h3>normally managed state</h3>
        <UpdateNode text="state count" count={this.state.count}/> {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount}/>)}
      </div>
    );
  }
  renderHOCExample() {
    return (
      <div>
        <hr/>
        <h3>inside HOC to Override shouldComponentUpdate</h3>
        <HOCNoUpdateNodeWapperOverride>
          <UpdateNode text="state count" count={this.state.count}/> {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount}/>)}
        </HOCNoUpdateNodeWapperOverride>
      </div>
    );
  }
  renderSCUExample() {
    return (
      <div>
        <h3>shouldComponentUpdate - no</h3>
        <NoUpdateNodeWapper>
          <UpdateNode text="state count" count={this.state.count}/> {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount}/>)}
        </NoUpdateNodeWapper>
        <hr/>
      </div>
    );
  }
  renderTargetExample() {
    return (
      <div>
        <h3>AdobeTargetWrapper</h3>
        <AdobeTargetWrapper>
          <UpdateNode text="state count" count={this.state.count}/> {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount}/>)}
        </AdobeTargetWrapper>
      </div>
    );
  }
  renderTargetOverideExample() {
    return (
      <div>
        <hr/>
        <h3>inside HOC to Override shouldComponentUpdate</h3>
        <HOCNoUpdateNodeWapperOverride>
          <UpdateNode text="state count" count={this.state.count}/> {useRedux && (<UpdateNode text="redux count" count={this.props.reduxCount}/>)}
        </HOCNoUpdateNodeWapperOverride>
      </div>
    );
  }
}

// Render the app
let Root = App;
if (useRedux) 
  Root = connect(function mapStateToProps(state) {
    return {reduxCount: state};
  }, function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  })(App);

export default Root;
