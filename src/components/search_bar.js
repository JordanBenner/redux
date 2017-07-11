import React, { Component } from 'react';

class SearchBar extends React.Component{
  render() {
    return <input onChange={this.handleInputChange}/>;
  }

  handleInputChange(event){
    // de bugging option upon first component
    console.log(event);
  }
}

export default SearchBar;
