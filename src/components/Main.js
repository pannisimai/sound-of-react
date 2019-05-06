import React, { Component } from "react";
import List from "./List";

export default class Main extends Component {
  render() {
    return (
      <div class="main row">
        <header>
          <input type="text" name="filter" placeholder=" &#x1F50E; search" />
          <br />
          <input
            class="request"
            type="text"
            name="filter"
            placeholder=" &#x1F50E; global search"
          />
          <br />
          <select>
            <option value="empty">Sort by</option>
            <option value="cheapest">Price: lowest first</option>
            <option value="expensive">Price: highest first</option>
            <option value="artist">Artist A-Z</option>
            <option value="reverse">Artist Z-A</option>
            <option value="songs">Songs A-Z</option>
            <option value="songsrev">Songs Z-A</option>
          </select>
        </header>

        <List />
      </div>
    );
  }
}
