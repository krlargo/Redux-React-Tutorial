import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD04icmkiPEJ3jZumEPfwzAZw-GJ9UdODc";

// Define component blueprint
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // Load some video JSONs
    YTSearch({key: API_KEY, term: 'Kanye West'}, (videos) => {
      this.setState({
        video: videos,
        selectedVideo: videos[0]
      }); // same as videos: videos
    });
  }

  render() {
    // Pass 'videos' to VidoeList's props
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Use <App /> to instantiate component
ReactDOM.render(<App />, document.querySelector('.container'));
