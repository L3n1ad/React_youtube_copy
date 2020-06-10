import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  function onVideoSelect(video) {
    setSelectedVideo(video);
    console.log("From the App!", selectedVideo);
  }

  async function onTermSubmit(term) {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: term,
      },
    });
    setVideos(response.data.items);
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default App;
