import React from "react";

function Collection(props) {
  //console.log(props.playlist);
  const handleClick = () => {
    //console.log(props.playlist);
    props.cancelFetches();
    props.onClick(props.playlist);
  };
  return (
    <div className="container playlist" onClick={handleClick}>
      <div className="imageAndTitle">
        <img
          src={props.playlist.cover.url}
          className="coverImg playlist"
          alt=""
        />

        <div className="now-playing__side">
          <div className="containerHeader">{props.playlist.name}</div>

          <div className="containerSubheader">
            {props.playlist.creator}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
