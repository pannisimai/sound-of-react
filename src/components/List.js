import React, { Component } from "react";
import Songs from "./Songs";

export default class List extends Component {
  render() {
    return (
      <div id="list">
        there's gonna be the songs under this
        <Songs />
      </div>
    );
  }
}
