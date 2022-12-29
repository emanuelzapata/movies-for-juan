import React from "react";
import './MovieContainer.css';

async function clickEvent(){
    console.log("working");
}

export default function MovieContainer(props:any){
    console.log(props.movie);
    return (
    <div className="container">
        <h1>{props.movie}</h1>
        <button onClick={clickEvent}>Click</button>
    </div>
    )
}