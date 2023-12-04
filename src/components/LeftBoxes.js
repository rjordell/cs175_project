import React from "react";
import GoToMainMenuBox from "./GoToMainMenuBox";
import UserCollectionsBox from "./UserCollections/UserCollectionsBox";

function LeftBoxes({ onPlaylistClick, cancelFetches }) {
  return (
    <div className="LeftBoxes">
      <GoToMainMenuBox />
      <UserCollectionsBox
        onPlaylistClick={onPlaylistClick}
        cancelFetches={cancelFetches}
      />
    </div>
  );
}

export default LeftBoxes;
