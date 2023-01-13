import React from "react";
import './MovieListCard.css';

export default function MovieListCard(props:any){
    console.log(props);
    let test = () => {
       console.log("working"); 
    }
    return(
        <div className="movie-list-card-container" onClick={test}>
            <img className="movie-poster" src={props.movie.Poster} />
            <p> {props.movie.personalNote} </p>
            <p className="imdb-rating-text"> {props.movie.imdbRating} </p>
        </div>
    )
}