import { products } from '../data';
import BasicCard from '../pages/main';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
width: 25%;
`

const Detail: React.FC = () => {

    const x = useParams<{ id: string }>();
    const y = products.find((prody => prody.UPC === x.id))
    return (
        <Div>
            {y ? <BasicCard produ={y} /> : null}
        </Div>
    );

}

export default Detail;