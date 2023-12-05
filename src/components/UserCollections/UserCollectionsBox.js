import React from "react";
import { useState, useEffect } from "react";
import Collection from "./Collection";
import "./UserCollectionsBox.css";

function UserCollectionsBox({ onPlaylistClick, cancelFetches }) {
  const [inputValue, setInputValue] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const getCurrentUsersPlaylists = async () => {
    try {
      const response = await fetch("/auth/getCurrentUsersPlaylists/");
      const data = await response.json();
      if (data.error) {
        setPlaylists(null);
      } else {
        setPlaylists(data);
        loadLocalCollections();
      }
      //console.log("current users playlsits");
      //console.log(data);
    } catch (error) {
      console.error("Error retrieving current user's playlists:", error);
      setPlaylists(null);
    }
  };

  const getUsersPlaylists = async (id) => {
    setPlaylists(null);
    //console.log("called getUsersPlaylists");
    try {
      const response = await fetch("/auth/getUsersPlaylists/" + id);
      const data = await response.json();
      if (data.error) {
        setPlaylists(null);
      } else {
        //console.log("received data");
        setPlaylists(data);
      }
      //console.log(data);
    } catch (error) {
      console.error("Error retrieving user's playlists:", error);
      setPlaylists(null);
    }
  };


  const loadLocalCollections = async () => {
    console.log("loadLocalCollections called")
    try {
      const localItemsResponse = await Promise.all(
        Array.from({ length: 2 }, (_, i) =>
          fetch(`/localItems/collection${i + 1}.json`).then((response) =>
            response.json()
          )
        )
      );
      console.log(localItemsResponse);
      setPlaylists((prevPlaylists) => ({
        ...prevPlaylists,
        items: [...prevPlaylists.items, ...localItemsResponse],
      }));
      //console.log(localItemsResponse);
      //console.log(playlists);
    } catch (error) {
      console.error('Error loading local collections:', error);
    }
  };

  useEffect(() => {
    getCurrentUsersPlaylists();
    //loadLocalCollections();
  }, []);

  return (
    <div className="UserPlaylistsBox">
      <div className="UserInfo">
        <input
          name="mybutton"
          placeholder="Enter User ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="Input"
        />
        <button
          className="btn-spotify"
          onClick={() => getUsersPlaylists(inputValue)}
        >
          Get info
        </button>
      </div>
      <div className="main-container playlists">
        {playlists?.items?.map((item) => (
          console.log(playlists),
          <Collection
            key={item.id}
            playlist={item}
            onClick={onPlaylistClick}
            cancelFetches={cancelFetches}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCollectionsBox;