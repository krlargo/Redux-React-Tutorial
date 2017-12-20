import React from 'react';
import ReactDOM from 'react-dom';

// File directory needed for user-created files
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyD04icmkiPEJ3jZumEPfwzAZw-GJ9UdODc";

// Define component blueprint
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Use <App /> to instantiate component
ReactDOM.render(<App />, document.querySelector('.container'));
