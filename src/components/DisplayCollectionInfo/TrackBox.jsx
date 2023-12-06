import React from "react";
import { useEffect } from "react";
import Track from "./Track";

function TrackBox({
  playlist
}) {

  return (
    <div className="main-container tracks">
      {playlist?.items.map((item) => (
        console.log(item),
        <Track key={item.track} track={item} />
      ))}
    </div>
  );
}

export default TrackBox;
