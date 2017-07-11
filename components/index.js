import React from 'react';
import ReactDom from 'react-dom';

const API_KEY ='AIzaSyB1asfCFekplcTUra4XcACIXhicLH8Vp0g';

// Create new Component. This Component should produce
// some html
  const App = () => {
    return <div>Hi!</div>;
  }


// Take this Component generated html and put it on the page(in the Dom)

ReactDom.render(<App />, document.querySelector('.container'));
