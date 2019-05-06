import React, { Component } from "react";
import List from "./List";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    this.doFetch();
  }

  doFetch() {
    fetch("https://dci-fbw12-search-itunes.now.sh/?term=${search}")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(songs => {
        this.setState(state => {
          state.songs = songs;
          return state;
        });
      });
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="main row">
        <header>
          <input type="text" name="filter" placeholder=" &#x1F50E; search" />
          <br />
          <input
            className="request"
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

        <List songs={songs} />
      </div>
    );
  }
}
