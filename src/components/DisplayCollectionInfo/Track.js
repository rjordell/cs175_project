import React from "react";

function Track({ track }) {
  //console.log("track");
  //console.log(track);
  const renderPlatformIcons = () => {
    return track.available_platforms.map((platform) => (
      <img
        key={platform}
        src={`/localItems/${platform.toLowerCase()}.png`}
        alt={platform}
        className="coverImg streamable"
      />
    ));
  };

  return (
    <div className="container track">
      <div className="imageAndTitle item">
        <img
          src={track.cover.url}
          className="coverImg track"
          alt=""
        />

        <div className="now-playing__side item">
          <div className="containerHeader itemTitle">{track.title}</div>
          <div className="containerSubheader item">
            {track.description}
          </div>
        </div>
      </div>
      <div className="everythingElse">
        <div className="now-playing__side type">
          <div className="containerSubheader item">{track.type}</div>
        </div>
        <div className="now-playing__side note">
          <div className="containerSubheader note">{track.note}</div>
        </div>
        <div className="now-playing__side streamable">{renderPlatformIcons()}</div>
      </div>
    </div>
  );
}

export default Track;
