import React from "react";
const musicUrl = process.env.REACT_APP_SPOTIFY_URL;

export default function RightBar() {
  return (
    <div className="right-bar">
      <div>
        Music I'm listening to
        <iframe
          src={musicUrl}
          width="100%"
          height="350"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
