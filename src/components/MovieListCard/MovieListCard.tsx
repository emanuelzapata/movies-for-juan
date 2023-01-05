import React from "react";
import './MovieListCard.css';

export default function MovieListCard(props:any){
    console.log(props);
    return(
        <div className="movie-list-card-container">
            <img className="movie-poster" src={props.movie.Poster} />
            <p> {props.movie.personalNote} </p>
            <p> {props.movie.imdbRating} </p>
        </div>
    )
}