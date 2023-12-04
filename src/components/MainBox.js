import React from "react";
import DisplayCollectionInfo from "./DisplayCollectionInfo/DisplayCollectionInfo";

function MainBox({ selectedPlaylist, playlistItemsController }) {
  //console.log("selectedPlaylist from mainbox");
  //console.log(selectedPlaylist);
  return (
    <div className="MainBox">
      {selectedPlaylist && (
        <DisplayCollectionInfo
          selectedPlaylist={selectedPlaylist}
          playlistItemsController={playlistItemsController}
        />
      )}
    </div>
  );
}

export default MainBox;
