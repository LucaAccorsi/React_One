import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonFooter from './buttonfooter.js';



export default function Footer() {
    return (

        <Box sx={{ flexGrow: 1, marginTop: 10,
         textAlign: 'center',
         height: '40px',
         mt: 0,
         background: 'linear-gradient(to right bottom, transparent, grey)'}}>
        <Grid container spacing={0}>

        <Grid item xs={9} md={9}>
            {/*grid vuota*/}
        </Grid>

        <Grid item xs={3} md={3}>
        <ButtonFooter />
        </Grid>

        </Grid>
        </Box>
        
        );
    }