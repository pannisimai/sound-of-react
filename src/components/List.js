import React, { Component } from "react";
import Songs from "./Songs";

export default class List extends Component {
  render(props) {
    return (
      <div className="col-sm-6 col-md-6 col-lg-6" id="list">
        there's gonna be the songs under this
        {/* have to map Songs at one point */}
        <Songs />
      </div>
    );
  }
}
