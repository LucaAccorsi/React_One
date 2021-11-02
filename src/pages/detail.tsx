import { products } from '../data';
import BasicCard from '../pages/main';
import { useParams } from 'react-router';


const Detail: React.FC = () => {

    const  x  = useParams<{id:string}>();
    const y = products.find((prody => prody.UPC === x.id))
    return (
        y ? 
        <BasicCard
            produ={y}
        /> : null
    );

}

export default Detail;