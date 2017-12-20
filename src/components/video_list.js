import React from 'react'

const VideoList = (props) => {
  // "col-md-4 list-group" is Bootstrap code
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
