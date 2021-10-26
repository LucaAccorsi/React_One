import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonFooter from './buttonfooter.js';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (

        <Box sx={{ flexGrow: 1,
         textAlign: 'center',
         height: '70px',
         display:'block', bottom:'0', left:'0',
         background: 'linear-gradient(to right bottom, rgb(200,200,200), rgb(200,200,200))'}}>
        <Grid container spacing={0}>

        <Grid item xs={9} md={5}>
            {/*grid vuota*/}
        </Grid>

        <Grid item xs={9} md={5.5}>
            {/*grid vuota*/}
        </Grid>

        <Grid item xs={3} md={1.5} sx={{my: 2, textDecoration:'underline'}}>
        <ButtonFooter />
        </Grid>

        </Grid>
        </Box>
        
        );
    }