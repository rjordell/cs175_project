import React from "react";

function InfoHeaderBox({
  playlist
}) {
  console.log(playlist);
  return (
    <div className="main-container playlistInfo">
      <div className="imageAndTitle collectionInfo">
        <img
          src={playlist.cover.url}
          className="coverImg playlistInfo"
          alt=""
        />
        <div className="now-playing__side collectionInfo">
          <div className="containerSubheader info">{playlist.public ? "Public" : "Private"} Collection</div>
          <div className="containerHeader title">{playlist.name}</div>
          <div className="containerSubheader description">{playlist.description}</div>
          <div className="containerSubheader created">Created by {playlist.creator} • {playlist.items.length} Items</div>
        </div>
      </div>
    </div>
  );
}

export default InfoHeaderBox;
