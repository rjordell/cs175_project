import React from "react";
import { useState, useEffect } from "react";
import Collection from "./Collection";
import "./UserCollectionsBox.css";

function UserCollectionsBox({ onPlaylistClick, cancelFetches }) {
  const [playlists, setPlaylists] = useState([]);

  const loadLocalCollections = async () => {
    //console.log("loadLocalCollections called")
    try {
      const localItemsResponse = await Promise.all(
        Array.from({ length: 16 }, (_, i) =>
          fetch(`/localItems/collection${i + 1}.json`).then((response) =>
            response.json()
          )
        )
      );
      setPlaylists(localItemsResponse);
      //console.log(localItemsResponse);
    } catch (error) {
      console.error('Error loading local collections:', error);
    }
  };

  useEffect(() => {
    //getCurrentUsersPlaylists();
    loadLocalCollections();
  }, []);

  return (
    <div className="UserPlaylistsBox">
      <div className="header1"><img
        src={`/localItems/library.png`}
        className="coverImg library"
      />
        <div className="UserInfo">
          Your collections
        </div>
      </div>
      <div className="main-container playlists">
        {
          playlists?.map((item) => (
            //console.log("map called: ", playlists),
            <Collection
              key={item.name}
              playlist={item}
              onClick={onPlaylistClick}
              cancelFetches={cancelFetches}
            />
          ))}
        {/*playlists !== null ? (
          console.log(playlists),
          playlists?.items.map((item) => (
            <Collection
              key={item.id}
              playlist={item}
              onClick={onPlaylistClick}
              cancelFetches={cancelFetches}
            />
          ))
        ) : (
          <></>
        )*/}
      </div>
    </div>
  );
}

export default UserCollectionsBox;