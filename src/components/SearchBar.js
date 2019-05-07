import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className="request"
          type="text"
          name="filter"
          placeholder=" &#x1F50E; global search"
        />
      </div>
    );
  }
}
