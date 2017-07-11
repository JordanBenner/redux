import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY ='AIzaSyB1asfCFekplcTUra4XcACIXhicLH8Vp0g';

// Create new Component. This Component should produce
// some html
  const App = () => {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }

ReactDom.render(<App />, document.querySelector('.container'));
