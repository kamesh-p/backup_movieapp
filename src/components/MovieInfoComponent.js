import "./MovieInfoComponents.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../App";
const MovieInfoComponent = (props) => {
  const [moviesInfo, setMoviesInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => {
        setMoviesInfo(response.data);
      });
  }, [selectedMovie]);
  return (
    <div className="container">
      {moviesInfo ? (
        <>
          <div className="coverimage">
            <img src={moviesInfo?.Poster} alt="poster" />
          </div>
          <div className="infoColumn">
            <div className="movieName">
              {moviesInfo?.Type}: {moviesInfo?.Title}
            </div>
            <div className="movieInfo"> imdbID : {moviesInfo?.imdbRating}</div>
            <div className="movieInfo">
              Year: <span>{moviesInfo.Year}</span>
            </div>
            <div className="movieInfo">
              Language: <span>{moviesInfo?.Language}</span>
            </div>
            <div className="movieInfo">
              Rated: <span>{moviesInfo?.Rated}</span>
            </div>
            <div className="movieInfo">
              Released: <span>{moviesInfo?.Released}</span>
            </div>
            <div className="movieInfo">
              Runtime: <span>{moviesInfo?.Runtime}</span>
            </div>
            <div className="movieInfo">
              Genre: <span>{moviesInfo?.Genre}</span>
            </div>
            <div className="movieInfo">
              Director: <span>{moviesInfo?.Director}</span>
            </div>
            <div className="movieInfo">
              Actors: <span>{moviesInfo?.Actors}</span>
            </div>
            <div className="movieInfo">
              Plot: <span>{moviesInfo?.Plot}</span>
            </div>
          </div>
          <div
            className="close"
            onClick={() => {
              props.onMovieChange();
            }}
          >
            X
          </div>
        </>
      ) : (
        "loading.."
      )}
    </div>
  );
};
export default MovieInfoComponent;
