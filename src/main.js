import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ButtonInStock from './ButtonInStock';
import ButtonOutOfStock from './ButtonOutOfStock';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import products from './data.json';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    return (

        <Grid item xs={12} md={3}>

            <Card sx={{ my: 1, mx: 1, mb: 2 }}>
                <CardActionArea>
                    <Link to={`/dettaglio/${props.produ.UPC}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <CardMedia
                            component="img"
                            image="https://via.placeholder.com/350x350"
                            alt="Immagine prodotto"
                        />


                        <Typography sx={{ marginLeft: '13px', mt: 1.5, textAlign: 'start', textTransform: 'uppercase', fontSize: '24px' }}>
                            {props.produ.name}
                        </Typography>

                        <Typography sx={{ marginLeft: '13px', textAlign: 'start', color: 'grey' }} >
                            $ {props.produ.price.current.value}
                        </Typography>

                        <Typography sx={{ marginLeft: '13px', marginBottom: '20px', textAlign: 'start', fontSize: '13px', marginTop: '10px' }}>
                            {props.produ.availability.stock > 0 ? <ButtonInStock /> : <ButtonOutOfStock />}
                        </Typography>
                    </Link>
                </CardActionArea>
            </Card>

        </Grid>


    );
}


