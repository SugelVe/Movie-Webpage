import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchTopratedMovie,
} from "../../service";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import MovieCard from "../card/Card20";


const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const main_api =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movies2, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getMovies(main_api);
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(27));
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const getMovies =(api) =>{
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const handlerOnChange = (a) => {
    setSearchTerm(a.currentTarget.value);

    console.log(a.target.value);
 

      if(searchTerm)
        getMovies(search_api+searchTerm);
      else 
      getMovies(main_api);
   };

  const movies = topRated.slice(0, 8).map((item) => {
    return (
   
  <div className="movie8" role="listitem">
    <img src={item.poster} alt={item.title} />
  </div>
      


    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.slice(0, 16).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
      </div>
    );
  });

  const topRatedList = nowPlaying.slice(0, 8).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
          </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color={"#FFCB2B"}
          ></ReactStars>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <header>
        <div className="title">MovieFlix</div>
        <div className="box">
            <div className="subtitle">New realeses</div>
            <div className="subtitle"> Favorites</div>
            <div className="subtitle">About us</div>
        </div>
      </header>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold">TOP EIGHT RANKED MOVIES</p>
        </div>
      </div>
     
      <div className="movie-container8">
      {movies}
      </div>

     
      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold">SEARCH YOUR FAVORITE MOVIE</p>
          <form>
          <input
            onChange={handlerOnChange} 
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
          ></input>
        </form>
        </div>
      </div>

      

      <div className="movie-container">
        {movies2.length > 0 && movies2.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      
      
      

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold">SEARCH YOUR MOVIE BY GENRES</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>

      <div className="row mt-3">{movieList}</div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold">UPCOMING MOVIES</p>
        </div>
      </div>

      <div className="row mt-3">{topRatedList}</div>
    </div>
  );
}
