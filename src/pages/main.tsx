import ButtonInStock from '../components/ButtonInStock';
import ButtonOutOfStock from '../components/ButtonOutOfStock';
import { Link } from 'react-router-dom';
import { Product } from '../data';
import styled from 'styled-components';

const Container = styled.div`
border-radius: 5px;
box-shadow: 0px 1px 2px silver;
margin: 5px;
padding-bottom: 20px;
`

const CardImage = styled.img`
height: auto;
width: 100%;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`

const CardTitle = styled.div`
color: black;
margin-left: 13px;
margin-top: 12px;
text-align: start;
text-transform: uppercase;
font-size: 25px;
`

const CardPrice = styled.div`
color: RGB(104, 104, 104);
margin-left: 13px;
text-align: start;
font-size: 16px;
`

const CardStock = styled.div`
margin-left: 13px;
text-align: left;
font-size: 13px;
margin-top: 10px;
`

type Props = {
    produ: Product,
}

const BasicCard: React.FC<Props> = ({ produ }) => {

    return (

        <Container>
            <Link to={`/dettaglio/${produ.UPC}`} style={{ textDecoration: 'none', color: 'black' }}>

                <CardImage src='https://via.placeholder.com/350'></CardImage>

                <CardTitle>
                    {produ.name}
                </CardTitle>

                <CardPrice>
                    $ {produ.price.current.value}
                </CardPrice>

                <CardStock>
                    {produ.availability.stock > 0 ? <ButtonInStock /> : <ButtonOutOfStock />}
                </CardStock>

            </Link>
        </Container >

    );
}

export default BasicCard;