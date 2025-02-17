import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id: idSong } = useParams();

  const { image, name, artist, duration, audio } = songsArray.filter(
    (currentSongsObj) => currentSongsObj._id === idSong
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj) => currentSongsObj.artist === artist
  );

  const radomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[radomIndex]._id;
  console.log(randomIdFromArtist)

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artista/${artistObj._id}`}>
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Imagem do artista ${artist}`}
            />
          </Link>
        </div>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
