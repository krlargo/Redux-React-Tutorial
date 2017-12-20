import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// File directory needed for user-created files
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyD04icmkiPEJ3jZumEPfwzAZw-GJ9UdODc";

YTSearch({key: API_KEY, term: 'Yeezy'}, function(data) {
  console.log(data);
});

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
