import React, { Component } from "react";
import List from "./List";
import SearchBar from "./SearchBar";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.doFetch();
  }

  doFetch() {
    fetch("https://dci-fbw12-search-itunes.now.sh/?term=${search}")
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ tracks: data.results }));
  }

  render() {
    const { tracks, searchTerm } = this.state;
    return (
      <div className="main row">
        <SearchBar />
        <List tracks={tracks} />
      </div>
    );
  }
}
