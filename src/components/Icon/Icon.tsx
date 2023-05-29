import React from 'react';
import './Icon.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export function Icon(props:any){
    const [open, isOpen] = useState(false);
    const setOpen = () => {
        isOpen(!open);
    }
    return ( 
        <React.Fragment>
        <Card onClick={setOpen} sx={{ maxWidth:300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="427"
                    image={props.movie.Poster}
                    sx={{ objectFit:"contain" }}
                />
                <CardContent sx={{backgroundColor:"#9DCBBA", color:"#454545"}}>
                    <h2>{props.movie.Title}</h2>
                </CardContent>
            </CardActionArea>
        </Card>
        <Modal open={open} handleClick={setOpen} movie={props.movie}/>
        </React.Fragment>
    )
}