import React from "react";
import { useEffect } from "react";
import Track from "./Track";

function TrackHeader() {
  return (
    <div className="container header">
      <div className="imageAndTitle headerTitle">Title</div>
      <div className="everythingElse">
      <div className="now-playing__side headerType">Type</div>
      <div className="now-playing__side headerNote">Note</div>
      <div className="now-playing__side headerStreamable">Available On</div>
      </div>
    </div>
  );
}

function TrackBox({
  playlist
}) {

  return (
    <div className="main-container tracks">
    <TrackHeader />
      {playlist?.items.map((item) => (
        //console.log(item),
        <Track key={item.track} track={item} />
      ))}
    </div>
  );
}

export default TrackBox;
