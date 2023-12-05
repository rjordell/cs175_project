import React from "react";

function Track({ track }) {
  //console.log("track");
  console.log(track);
  return (
    <div className="container track">
      <div className="imageAndTitle">
        <img
          src={track.cover.url}
          className="coverImg track"
          alt=""
        />

        <div className="now-playing__side">
          <div className="containerHeader">{track.title}</div>
          <div className="containerSubheader">
            {track.description}
          </div>
        </div>
      </div>
      <div className="everythingElse">
        <div className="now-playing__side">
          <div className="containerHeader"></div>
          <div className="containerSubheader">
            
          </div>
        </div>
        <div className="now-playing__side">
          <div className="containerHeader">
            
          </div>
          <div className="containerSubheader">followers</div>
        </div>
        <div className="now-playing__side">
          <div className="containerHeader"></div>
          <div className="containerSubheader">tempo</div>
        </div>
        <div className="now-playing__side">
          <div className="containerHeader"></div>
          <div className="containerSubheader">energy</div>
        </div>
        <div className="now-playing__side">
          <div className="containerHeader"></div>
          <div className="containerSubheader">danceability</div>
        </div>
      </div>
    </div>
  );
}

export default Track;
