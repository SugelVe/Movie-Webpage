import React from "react";

const image_api = "https://image.tmdb.org/t/p/w1280";


const Movie8 =({ title, poster_path, overview}) => (
  <div className="movie8" role="listitem">
      <img src={image_api + poster_path} alt={title}/>
      <div className="movie-info8">
          <h3>{title}</h3>
      </div>

      <div className='movie-hover8'>
       <h2>Overview:</h2>
       <p>{overview}</p>
      </div>

      </div>
  );

export default Movie8;
