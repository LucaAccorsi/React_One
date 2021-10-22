import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VariantButtonGroup from './button.js';
import BasicTextFields from './search.js';
import BasicButtons from './buttonreset.js'; 
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import reset from './buttonreset';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Navbar(props) {
    return (

        <Box style={{background: 'linear-gradient(to right bottom, grey, transparent)', marginBottom: 20}}>

        <Grid container spacing={0}>

            <Grid item xs={4} md={1}>
                <CardMedia
                component="img"
                height="80"
                width="150"
                image="/static/images/cards/img1.jpg"
                alt="Immagine prodotto"
                />
            </Grid>

            <Grid item xs={8} md={8}>
                <VariantButtonGroup toggle={(value) => props.toggle(value)}/>
            </Grid>

            <Grid item xs={8} md={2}>
                <BasicTextFields value={props.searchText} cerca={(text) => {props.cerca(text);}}/>
            </Grid>

            <Grid item xs={4} md={1}>
                <BasicButtons reset={() => {props.reset();}}/>
            </Grid>

        </Grid>

        <Divider />
        </Box>
        
        );
    }