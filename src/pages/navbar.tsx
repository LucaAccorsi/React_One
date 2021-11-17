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
@media (max-width: 600px) {
    flex-wrap: wrap;
    display: flex;
    height: auto;
}
`

const DivNavbarImg = styled.div`
`

const DivNavbarButton = styled.div`
display: flex;
align-items: center;
margin-left: 30%;
@media (max-width: 600px) {
    width: 60%;
    margin:  auto;
}
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
@media (max-width: 600px) {
    width: 9.5rem;
}
`



type Props = {
    cerca: (cerca: string) => void,
    reset: () => void,
    setToggle: (filterToggle: string) => void,
}

const Navbar: React.FC<Props> = ({ reset, cerca, setToggle }) => {
    return (
        <BoxNavbar>

            <DivNavbarImg>
                <ImgNavbar></ImgNavbar>
            </DivNavbarImg>

            <DivNavbarButton>
                <VariantButtonGroup  setToggle={setToggle} />
            </DivNavbarButton>

            <DivNavbarSearch>
                <BasicTextFields  cerca={cerca} />
            </DivNavbarSearch>

            <DivNavbarReset>
                <BasicButtons reset={reset} />
            </DivNavbarReset>


        </BoxNavbar>
    );
}

export default Navbar;