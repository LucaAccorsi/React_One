import { Product } from '../data';
import styled from 'styled-components';
import AddToCartButton from '../components/addToCartButton';
import { useState } from 'react';

const ContainerDaddy = styled.div`
text-decoration: none;
display: flex;
color: black;
width: 100vw;
@media (max-width: 768px) {
display: block;
}
`

const Container1 = styled.div`
width: 60vw;
@media (max-width: 768px){
    width: 100%;
};
@media (min-width: 769px) {
    width: 100vw;
}
`

const Container2 = styled.div`
padding: 80px;
width: 40vw;
@media (max-width: 968px) {
    padding: 0px;
    display: flex;
    position: relative;
    width: 100vw;
}
`

const CardImage = styled.img`
width: 60vw;
@media (max-width: 768px){
    width: 100%;
}
`

const CardTitle = styled.div`
color: black;
text-align: start;
font-size: 20px;
@media (max-width: 968px) {
    font-size: 1rem;
}
`

const CardPrice = styled.div`
color: black;
text-align: start;
font-size: 22px;
font-weight: bold;
margin-bottom: 20px;
@media (max-width: 968px) {
    font-size: 1rem;
}
`


const ButtonCart = styled.div`
margin-top: 8.5rem;
padding-right: 1rem;
`

const ContainerMommy = styled.div`
width: 100vw;
display: flex;
@media (max-width: 968px) {
    flex-wrap: wrap;
}
`

const VariantsPDP = styled.div`
height: 100px;
width: 150px;
margin: 20px;
display: flex;
background-image: url('https://picsum.photos/150/100');
@media (max-width: 768px) {
    flex-wrap: wrap;
    width: 150px;
    height: 100px;
}
`

const DivPersol = styled.div`
font-size: 40px;
font-weight: bolder;
@media (max-width: 968px) {
    font-size: 2rem;
}
`

const DivProdotto = styled.div`
font-size: 20px;
@media (max-width: 968px) {
    font-size: 1rem;
}
`

const DivBlock1 = styled.div`
@media (max-width: 968px) {
    padding-left: 1rem;
    width: 500px;
}
`

const DivBlock2 = styled.div`
@media (max-width: 968px) {
}
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

                    <CardImage src='https://picsum.photos/700/350'></CardImage>

                </Container1 >

                <Container2>

                    <DivBlock1>

                        <DivPersol>Persol</DivPersol>

                        <CardPrice>
                            {produ.price.current.value} USD
                        </CardPrice>

                        <CardTitle>
                            Name: {produ.name}
                        </CardTitle>

                        <DivProdotto>Lens Color: Green</DivProdotto>
                        <DivProdotto>Size: Standard</DivProdotto>
                        <DivProdotto>UPC: {variantUPC}</DivProdotto>

                    </DivBlock1>

                    <DivBlock2>

                        <ButtonCart>
                            <AddToCartButton />
                        </ButtonCart>

                    </DivBlock2>

                </Container2>

            </ContainerDaddy>

            <div style={{ fontSize: '22px', fontWeight: 'bolder', paddingLeft: '20px', marginTop: '10px' }}>Available colors:</div>

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