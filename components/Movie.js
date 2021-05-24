import ReactDOM from 'react-dom'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const element = <FontAwesomeIcon icon={faPlayCircle} />




const image_api = "https://image.tmdb.org/t/p/w1280";



const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
   
      <img src={image_api + poster_path} alt={title}/>
      <div className="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>
      </div>
      
      <div className='movie-hover'>
       <h2>Overview:</h2>
       <i className='icon'>{element}</i>
       <button className="favorite-btn">Add to favorites</button>
       <p>{overview}</p>
      </div>

      </div>
  );

export default Movie;
