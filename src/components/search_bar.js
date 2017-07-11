import React, {Component} from 'react';

class SearchBar extends React.Component {
  // constructor is the first and only fucntion called automatically when a new instance of the class is created.
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <input
            value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
