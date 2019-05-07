import React, { Component } from "react";
import Songs from "./Songs";

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tracks = this.props.tracks;
    return (
      <div className="col-sm-6 col-md-6 col-lg-6 list">
        {tracks.map((trackInfo, index) => (
          <Songs trackInfo={trackInfo} key={index} />
        ))}
      </div>
    );
  }
}
