import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VariantButtonGroup from '../components/button';
import BasicTextFields from '../components/search';
import BasicButtons from '../components/buttonreset'; 
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';

type Props={
    cerca: (cerca:string) => void,
    reset: () => void,
    searchTerm: string,
    setToggle: (filterToggle:string) => void,
    filterToggle: string
};

const Navbar : React.FC<Props> = ({ searchTerm, reset, cerca, filterToggle, setToggle}) => {
    return (

        <Box style={{marginBottom: 10}}>

        <Grid container spacing={0}>

            <Grid item xs={4} md={1}>
                <CardMedia
                component="img"
                height="80"
                width="150"
                image="https://via.placeholder.com/150x80"
                alt="Immagine prodotto"
                />
            </Grid>

            <Grid item xs={8} md={7}>
                <VariantButtonGroup  filterToggle={filterToggle} setToggle={setToggle}/>
            </Grid>

            <Grid item xs={8} md={3}>
                <BasicTextFields  searchTerm={searchTerm} cerca={cerca}/>
            </Grid>

            <Grid item xs={4} md={1} sx={{textAlign:'center'}}>
                <BasicButtons reset={reset}/>
            </Grid>

        </Grid>

        <Divider style={{backgroundColor: 'grey'}}/>
        </Box>
        
        );
    }

    export default Navbar;