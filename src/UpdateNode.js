import Component from "./config";
import React from "react";
import { h } from "preact";
// import React, { Component } from "react";

const UpdateNode =({text,count})=>(<div>
        <p>
          {text}: {count}
        </p>
      </div>)
export default UpdateNode