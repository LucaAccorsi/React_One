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

const bull = (
    <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    •
    </Box>
    );
    
    export default function BasicCard(props) {
        return (
            
       
            <Grid item xs={12} md={3}>

            <Card sx={{  my: 1, mx: 1 }}>
                <CardContent style={{ background: 'linear-gradient(to right bottom, transparent, lightgrey)'}}>    

                    <CardMedia
                    component="img"
                    height="350"
                    width="350"
                    image="/static/images/cards/img1.jpg"
                    alt="Immagine prodotto"
                    
                    />     

                    <Typography sx={{ my: 1.5, textAlign: 'start', textTransform: 'uppercase', fontSize: '20px' }}>
                    {props.nome}
                    </Typography> 

                    <Typography sx={{textAlign: 'start', color: 'grey'}} >
                    $ {props.prezzo}
                    </Typography>

                    <Typography sx={{textAlign: 'start', fontSize: '10px', marginTop: '20px'}}>
                    {props.stock > 0 ? <ButtonInStock /> : <ButtonOutOfStock />}
                    </Typography>

                </CardContent>            
            </Card>

            </Grid>
            
            
            );
        }
        
        
        