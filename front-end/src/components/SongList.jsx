import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5)


  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongsObj, index) => (
          <SongItem {...currentSongsObj} index={index} key={index} />
        ))}

      <p className="song-list__see-more " onClick={() => setItems(items + 5)}>Ver mais</p>
    </div>
  );
};

export default SongList;
