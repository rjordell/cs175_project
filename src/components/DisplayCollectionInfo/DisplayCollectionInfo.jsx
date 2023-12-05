import React from "react";
import { useEffect, useState } from "react";
import TrackBox from "./TrackBox";
import InfoHeaderBox from "./InfoHeaderBox";
import "./DisplayCollectionInfo.css";

function DisplayCollectionInfo({ selectedPlaylist, playlistItemsController }) {
  //console.log(selectedPlaylist);
  const [combinedData, setCombinedData] = useState(null);
  const [original, setOriginalItems] = useState(null);
  const [displaySort, setDisplaySort] = useState(false);

  return (
    <div className="Playlist">
      <InfoHeaderBox
        playlist={selectedPlaylist}
        setCombinedData={setCombinedData}
        combinedData={combinedData}
        original={original}
        displaySort={displaySort}
      />
      <TrackBox
        playlist={selectedPlaylist}
      />
    </div>
  );
}

export default DisplayCollectionInfo;
