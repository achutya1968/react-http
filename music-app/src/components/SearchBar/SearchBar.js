import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  search() {
      this.props.onSearch(this.state.term);
  }

  handleEnter()

  render() {
    return <div></div>;
  }
}

export default SearchBar;
