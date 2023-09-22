import React from "react";
import "./MovieComponent.css";
const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <div className="MovieContainer" onClick={() => props.onMovieChange(imdbID)}>
      <div className="CoverImage">
        <img src={Poster} alt="poster" />
        <h2 className="info">{Title}</h2>
        <div className="InfoColumn">
          <h3 className="info">Year: {Year}</h3>
          <h3 className="info">{Type}</h3>
        </div>
      </div>
    </div>
  );
};
export default MovieComponent;
