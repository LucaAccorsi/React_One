import * as React from 'react';
import Grid from '@mui/material/Grid';
import VariantButtonGroup from '../components/button';
import BasicTextFields from '../components/search';
import BasicButtons from '../components/buttonreset';
import styled from 'styled-components';
import LogoNavbar from '../img/150x80.png';

const BoxNavbar = styled.div`
height: 80px;
width: 100%;
margin-bottom: 10px;
border-bottom: 1px solid rgb(68, 68, 68);
`

const ImgNavbar = styled.div`
background-image: url(${LogoNavbar});
height: 80px;
width: 150px;
`

type Props = {
    cerca: (cerca: string) => void,
    reset: () => void,
    searchTerm: string,
    setToggle: (filterToggle: string) => void,
    filterToggle: string
};

const Navbar: React.FC<Props> = ({ searchTerm, reset, cerca, filterToggle, setToggle }) => {
    return (

        <BoxNavbar>
            <Grid container spacing={0}>

                <Grid item xs={4} md={1}>
                    <ImgNavbar>
                    </ImgNavbar>
                </Grid>

                <Grid item xs={8} md={7}>
                    <VariantButtonGroup filterToggle={filterToggle} setToggle={setToggle} />
                </Grid>

                <Grid item xs={8} md={3}>
                    <BasicTextFields searchTerm={searchTerm} cerca={cerca} />
                </Grid>

                <Grid item xs={4} md={1} sx={{ textAlign: 'center' }}>
                    <BasicButtons reset={reset} />
                </Grid>

            </Grid>
        </BoxNavbar>

    );
}

export default Navbar;