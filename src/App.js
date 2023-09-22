import React, { useState } from "react";
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";
import "./App.css";
import MovieComponent from "./components/MovieComponent";
export const API_KEY = "c822e4be";
function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovies, updateMovies] = useState();
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(response);
    updateMovieList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeOut = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeOut);
  };
  return (
    <div className="Main-container">
      <div className="Header">
        <div className="App-name">Movie App</div>
        <div className="Search-box">
          <input
            placeholder="search movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      {selectedMovies && (
        <MovieInfoComponent
          selectedMovie={selectedMovies}
          onMovieChange={updateMovies}
        />
      )}
      <div className="movieListContainer">
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieChange={updateMovies}
              />
            ))
          : "No movies"}
      </div>
    </div>
  );
}

export default App;
