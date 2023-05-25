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

const movie = movies[0];
// Breakpoints start from given pixel number
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
export function Modal(props:any){
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
                            <p>{props.movie.personalNote}</p>
                            <p>{props.movie.Plot}</p>                         
                        </Grid>
                        <Grid xs={12} sm={4} md={12} lg={6} xl={2}>
                            <p>imdbd icon</p>
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