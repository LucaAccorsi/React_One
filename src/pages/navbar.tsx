import * as React from 'react';
import VariantButtonGroup from '../components/button';
import BasicTextFields from '../components/search';
import BasicButtons from '../components/buttonreset';
import styled from 'styled-components';
import LogoNavbar from '../img/150x80.png';

const BoxNavbar = styled.div`
height: 11vh;
width: 100%;
margin-bottom: 10px;
border-bottom: 1px solid RGB(79, 79, 79);
display: grid;
grid-template-columns: auto 45% 25% 10%;
`

const DivNavbarImg = styled.div`
`

const DivNavbarButton = styled.div`
display: flex;
align-items: center;
margin-left: 30%;
`

const DivNavbarSearch = styled.div`
display: flex;
align-items: center;
`

const DivNavbarReset = styled.div`
display: flex;
align-items: center;
`

const ImgNavbar = styled.div`
background-image: url(${LogoNavbar});
height: 11vh;
width: 9.8vw;
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

            <DivNavbarImg>
                <ImgNavbar></ImgNavbar>
            </DivNavbarImg>

            <DivNavbarButton>
                <VariantButtonGroup filterToggle={filterToggle} setToggle={setToggle} />
            </DivNavbarButton>

            <DivNavbarSearch>
                <BasicTextFields searchTerm={searchTerm} cerca={cerca} />
            </DivNavbarSearch>

            <DivNavbarReset>
                <BasicButtons reset={reset} />
            </DivNavbarReset>


        </BoxNavbar>
    );
}

export default Navbar;