import ReactDOM from "react-dom";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";




const image_api = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({id, title, poster_path, vote_average}) => (

    <div className="col-md-3 col-sm-6">
    <div className="card">
      <Link to={`/movie/${id}`}>
        <img className="img-fluid" src={image_api + poster_path} alt={title}></img>
      </Link>
    </div>
    <div className="mt-3">
      <p style={{ fontWeight: "bolder" }}>{title}</p>
      <p>Rated: {vote_average}</p>
      <ReactStars
        count={vote_average}
        size={20}
        color1={"#f4c10f"}
      ></ReactStars>
    </div>
  </div>
  
);

export default MovieCard;