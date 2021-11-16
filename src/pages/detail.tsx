import { Product } from '../data';
import BasicCard from '../pages/main';
import { useParams } from 'react-router';
import styled from 'styled-components';
import PdpCard from './pdp';

const Div = styled.div`
width: 25%;
`

type Props = {
    data: Product[];
}


const Detail: React.FC<Props> = ({data}) => {

    const x = useParams<{ id: string }>();
    const y = data.find((prody => prody.UPC === x.id))
    return (
        <Div>
            {y ? <PdpCard produ={y} /> : null}
        </Div>
    );

}

export default Detail;