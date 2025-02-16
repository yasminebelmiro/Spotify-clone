import React from "react";
import logoSpotift from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotift} alt="Logo Spotify" />
      </Link>
      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
