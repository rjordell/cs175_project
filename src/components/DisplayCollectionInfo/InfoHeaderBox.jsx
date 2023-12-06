import React from "react";

function InfoHeaderBox({
  playlist
}) {
  return (
    <div className="main-container playlistInfo">
      <div className="container track">
        <div className="imageAndTitle">
          <img
            src={playlist.cover.url}
            className="coverImg playlistInfo"
            alt=""
          />
          <div className="now-playing__side">
            <div className="containerHeader">{playlist.name}</div>
            <div className="containerSubheader">
              {playlist.items.length} Items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoHeaderBox;
