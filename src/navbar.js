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




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Navbar() {
    return (

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
        <Grid item xs={1} md={1}>
        <CardMedia />
        </Grid>
        <Grid item xs={5} md={5}>
        <VariantButtonGroup />
        </Grid>
        <Grid item xs={5} md={5}>
        <BasicTextFields />
        </Grid>
        <Grid item xs={1} md={1}>
        <BasicButtons />
        </Grid>
        </Grid>
        <Divider />
        </Box>
        
        );
    }