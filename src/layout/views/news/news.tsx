
import React, { useState, useRef } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { PlayArrow, Pause, VolumeUp, VolumeOff } from "@mui/icons-material";

const channels = [
  {
    name: "Al Jazeera",
    url: "https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1&mute=1",

  },
  {
    name: "United Nation",
    url: "https://www.youtube.com/embed/wfAa1GiNdgM?autoplay=1&mute=1",


  },
  {
    name: "NASA",
    url: "https://www.youtube.com/embed/mhJRzQsLZGg?autoplay=1&mute=1"
  },
  {
    name: "Sky News",
    url: "https://www.youtube.com/embed/YDvsBbKfLPA?autoplay=1&mute=1"
  },
  {
    name: "Fox News",
    url: "https://www.youtube.com/embed/kj_5MqSpzQI?autoplay=1&mute=1"
  },
];

export const News = () => {
  const [selectedChannel, setSelectedChannel] = useState(channels[0].url);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleChannelClick = (url: string) => {
    setSelectedChannel(url);
    setIsPlaying(true); // Reset play status for new video
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe?.postMessage(
        `{"event":"command","func":"${isPlaying ? "pauseVideo" : "playVideo"}","args":""}`,
        "*"
      );
    }
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe?.postMessage(
        `{"event":"command","func":"${isMuted ? "unMute" : "mute"}","args":""}`,
        "*"
      );
    }
  };

  return (
    <>
      {/* Video Section */}
      <Box
        sx={{
          minHeight: "70vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        //   alignItems: "center",
          position: "relative",
          overflow: "hidden", // Prevent side scrolling
          backgroundColor: "#000", // Set a background color in case the video doesn't load
        }}
      >
        {/* Embed the selected YouTube live stream using iframe */}
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={selectedChannel}
          title="Live Stream"
          style={{ border: "none", position: "absolute", top: 0, left: 0 }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Dark Overlay for Murky Effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Controls Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        {/* Play/Pause Button */}
        <IconButton onClick={handlePlayPause} sx={{ color: "#fff" }}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Mute/Unmute Button */}
        <IconButton onClick={handleMuteUnmute} sx={{ color: "#fff" }}>
          {isMuted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
      </Box>

      {/* Channel Selection Section */}
      <Box
        sx={{
        //   width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#222",
          padding: { xs: "20px", sm: "30px", md: "20px" },
        }}
      >
        {channels.map((channel, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            sx={{ margin: "10px", width: { xs: "80%", md: "auto" } }}
            onClick={() => handleChannelClick(channel.url)}
          >
            {channel.name}
          </Button>
        ))}
      </Box>
    </>
  );
};
