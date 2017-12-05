import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY ='AIzaSyB1asfCFekplcTUra4XcACIXhicLH8Vp0g';



YTSearch ({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data)
})

// Create new Component. This Component should produce
// some html
  const App extend Component {
    render(){
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
