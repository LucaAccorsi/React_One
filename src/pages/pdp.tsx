import { Product } from '../data';
import styled from 'styled-components';
import AddToCartButton from '../components/addToCartButton';
import { useState } from 'react';

const ContainerDaddy = styled.div`
text-decoration: none;
display: flex;
color: black;
width: 100vw;
`

const Container1 = styled.div`
width: 60vw;
`

const Container2 = styled.div`
padding: 80px;
width: 40vw;
`

const CardImage = styled.img`
width: 60vw;
`

const CardTitle = styled.div`
color: black;
text-align: start;
font-size: 20px;
`

const CardPrice = styled.div`
color: black;
text-align: start;
font-size: 22px;
font-weight: bold;
margin-bottom: 20px;
`


const ButtonCart = styled.div`
margin-top: 20px;
`

const ContainerMommy = styled.div`
background-color: azure;
width: 100vw;
display: flex;
`

const VariantsPDP = styled.div`
border: 1px solid grey;
height: 150px;
width: 150px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
`

type Props = {
    produ: Product;
}

const PdpCard: React.FC<Props> = ({ produ }) => {


 const [variantUPC, setVariantUPC] = useState(produ.UPC);


    return (
        <>
            <ContainerDaddy>

                <Container1>

                    <CardImage src='https://picsum.photos/700/300'></CardImage>

                </Container1 >

                <Container2>

                    <div style={{ fontSize: '40px', fontWeight: 'bolder' }}>Persol</div>

                    <CardPrice>
                        {produ.price.current.value} USD
                    </CardPrice>

                    <CardTitle>
                        Name: {produ.name}
                    </CardTitle>

                    <div style={{ fontSize: '20px' }}>Lens Color: Green</div>
                    <div style={{ fontSize: '20px' }}>Size: Standard</div>
                    <div style={{ fontSize: '20px' }}>UPC: {variantUPC}</div>

                    <ButtonCart>
                        <AddToCartButton />
                    </ButtonCart>

                </Container2>

            </ContainerDaddy>

            <div style={{ fontSize: '22px', fontWeight: 'bolder', paddingLeft: '20px' }}>Available colors:</div>

            <ContainerMommy>

                {produ.variants.map((variant: any) =>
                    <VariantsPDP onClick={() => setVariantUPC(variant.UPC)}>
                        {variant.UPC}
                    </VariantsPDP>
                )}

            </ContainerMommy>
        </>
    );
}

export default PdpCard;