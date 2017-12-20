import React from 'react';
import ReactDOM from 'react-dom';

// Define component blueprint
const App = () => {
  return <div>Hi!</div>;
}

// Use <App /> to instantiate component
ReactDOM.render(<App />, document.querySelector('.container'));
