import React, { useEffect, useState} from "react";
import Movie from "./components/Movie.js";
import classes from "../src/components/layout/MainNavigation.module.css";
import Movie8 from "./components/layout/EightMovies";
import {Route,Switch,Link} from "react-router-dom";



const main_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    fetch(main_api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

 

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    fetch(search_api + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });

    setSearchTerm("");
  };

  const handlerOnChange = (e) => {
    setSearchTerm(e.target.value);

    fetch(search_api + e.currentTarget.value)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };



  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Movieflix</div>
        <nav>
          <ul>
          
            <li>New Releases</li>
            <Switch> <li> <Route path='/Favorites'></Route><Link to='/Favorites'>Favorites</Link></li></Switch>
            <li>About us</li>
            
          </ul>
          <form onSubmit={handlerOnSubmit}>
            <input
              className={classes.search}
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handlerOnChange}
            ></input>
          </form>
          <ul className='filter'>
          <label>Filter by:</label>
          <input type="radio" id="category" name="rating" value=""></input>
          <label>Category</label>
          <input type="radio" id="rating" name="rating" value=""></input>
          <label>Rating</label>
          <input type="radio" id="rating" name="rating" value=""></input>
          <label>Year</label>
          </ul>
        </nav>
      </header>
      <div className={classes.title1}>Top 8 movies</div>
      <div className="movie-container8" role="list">
        {movies.map((movie) => (
          <Movie8 key={movie.id}{...movie} />
        ))}
      </div>

      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
