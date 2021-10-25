import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { border } from '@mui/system';
import ButtonInStock from './ButtonInStock';
import ButtonOutOfStock from './ButtonOutOfStock';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

const bull = (
    <Box
    component="span"
    sx={{ display: 'inline-block'}}
    >
    •
    </Box>
    );
    
    export default function BasicCard(props) {
        return (
            
            <Grid item xs={12} md={3}>
            
            <Card sx={{  my: 1, mx: 1, mb: 2 }}>
            <CardActionArea>   
                <Link to="/dettaglio" style={{textDecoration:'none', color:'black'}}>
                    <CardMedia
                    component="img"
                    image="https://via.placeholder.com/350x350"
                    alt="Immagine prodotto"                    
                    />     
                

                    <Typography sx={{marginLeft:'13px', mt: 1.5, textAlign: 'start', textTransform: 'uppercase', fontSize: '24px' }}>
                    {props.nome}
                    </Typography> 
                    
                    <Typography sx={{marginLeft:'13px',textAlign: 'start', color: 'grey'}} >
                    $ {props.prezzo}
                    </Typography>
                    
                    <Typography sx={{marginLeft:'13px',marginBottom:'20px',textAlign: 'start', fontSize: '13px', marginTop: '10px'}}>
                    {props.stock > 0 ? <ButtonInStock /> : <ButtonOutOfStock />}
                    </Typography>
                    </Link>
                    </CardActionArea>
            </Card>
            
            </Grid>
            
            
            );
        }
        
        
        