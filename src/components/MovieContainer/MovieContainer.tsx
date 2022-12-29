import React from "react";
import movieService from '../../services/GetMovieService';

async function clickEvent(){
    console.log(await movieService("Good Will Hunting"));
    console.log("working");
}

export default function MovieContainer(props:any){
    console.log(props.movie);
    return (
    <div>
        <h1>{props.movie}</h1>
        <button onClick={clickEvent}>Click</button>
    </div>
    )
}