import React from "react";
import ReactPlayer from "react-player/file";

export default function CustomVideoPlayer({ videoUrl, setShowAppBar }) {
  return (
    <ReactPlayer
      url={videoUrl}
      controls={true}
      width="100%"
      playing={true}
      onPause={() => setShowAppBar(true)}
      onPlay={() => setShowAppBar(false)}
    />
  );
}
