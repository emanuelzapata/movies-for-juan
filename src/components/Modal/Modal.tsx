import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import './Modal.css';
import movies from '../../assets/movies.json';
import rottenTomatoesLogo from '../../assets/rottentomatoes_logo_40.png';
import imdbLogo from '../../assets/IMDB_Logo_2016.svg';
import metacriticLogo from '../../assets/Metacritic_logo.svg.png';

const movie = movies[0];
// Breakpoints start from given pixel number
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
export function Modal(props:any){
    const getRatingLogo = (Source:string) => {
        if(Source === "Internet Movie Database")
            return imdbLogo;
        if(Source === "Rotten Tomatoes")
            return rottenTomatoesLogo;
        if(Source === "Metacritic")
            return metacriticLogo;
    }
    return(
        <React.Fragment>
        {/* <Button variant="outlined" onClick={props.handleClick}>Button click</Button> */}
        <Dialog open={props.open} onClose={props.handleClick} fullWidth={true} maxWidth={false}>
            <DialogTitle>{props.movie.Title} ({props.movie.Year})</DialogTitle>
            <DialogContent>
                <DialogContentText>

                    <Grid container spacing={0.5}>
                        <Grid xs={12} sm={12} md={6} lg={4} xl={3}>
                            <img src={props.movie.Poster}/>
                        </Grid>
                        <Grid xs={12} sm={8} md={6} lg={6} xl={8}>
                            <h3>Plot</h3>
                            <p>{props.movie.Plot}</p>
                            <div className={props.movie.personalNote === '' ? 'hidden':''}>
                                <h3>Personal Note</h3>
                                <p>{props.movie.personalNote}</p>
                            </div>
                            {props.movie.Ratings.map((rating:any)=>{
                                return(
                                    <React.Fragment>
                                        <img className="rating-logo" alt="image" src={getRatingLogo(rating.Source)}/>
                                        <span>{rating.Value}</span>
                                    </React.Fragment>
                                )
                            })}
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClick}>Close</Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    )
}