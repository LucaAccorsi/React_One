import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
// import Container from '@mui/material/Container';
import ButtonInStock from './ButtonInStock';
import ButtonOutOfStock from './ButtonOutOfStock';
import products from './data.json';
import BasicCard from './main';
import { useParams } from 'react-router';


export default function Dettaglio() {

    const { id } = useParams(); //chiama l'id

    return (
        <BasicCard
            produ={products.find((prody => prody.UPC === id))}
        />
    );
}