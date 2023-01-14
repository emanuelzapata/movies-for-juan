import React from "react";
import './MovieModal.css';

export default function MovieModal(props:any){
    console.log(props.movie);
    console.log("working");
    return(
        <div>
            working
            {props.movie}
        </div>
    );
}