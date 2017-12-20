import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyD04icmkiPEJ3jZumEPfwzAZw-GJ9UdODc";

// Define component blueprint
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // Load some video JSONs
    YTSearch({key: API_KEY, term: 'Yeezy'}, (videos) => {
      this.setState({ videos }); // same as videos: videos
    });
  }

  render() {
    // Pass 'videos' to VidoeList's props
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Use <App /> to instantiate component
ReactDOM.render(<App />, document.querySelector('.container'));
