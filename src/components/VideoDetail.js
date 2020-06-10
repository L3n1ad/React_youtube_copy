import React from "react";

const VideoTitle = ({ video }) => {
  return <div>{video ? video.snippet.title : "Loading..."}</div>;
};

export default VideoTitle;
