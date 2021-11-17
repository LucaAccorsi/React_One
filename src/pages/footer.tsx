import ButtonFooter from '../components/buttonfooter';
import styled from 'styled-components';

const BoxFooter = styled.div`
padding: 15px 0px 0px 0px;
background-color: rgb(189, 189, 189);
text-align: right;
position: absolute;
bottom: 0;
width: 100%;
height: 6%;
`

export default function Footer() {
    return (
        <BoxFooter>
            <ButtonFooter></ButtonFooter>       
        </BoxFooter>
    );
}