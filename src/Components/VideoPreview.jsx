import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles.css";
import PreviewImage from "../Assets/images/video-preview.jpg";
import YouTube from "react-youtube";

const VideoPreview = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="video bg-black">
      <div className="container-sm">
        <h2 className="video-heading text-xl text-center">
          See how it works and get started in less than 2 minutes
        </h2>

        <div className="video-content">
          <div className="preview-container">
            {showVideo ? (
              <YouTube videoId="Yko3GMseY40" opts={videoOptions} />
            ) : (
              <>
                <img src={PreviewImage} alt="video" className="video-preview" />
                <div className="play-button" onClick={handleClick}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </>
            )}
          </div>
          <Link to="/signup" className="btn btn-primary btn-lg mt-4">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
