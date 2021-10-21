import './App.css';
import Navbar from './navbar';
import BasicCard from './main.js';
import Footer from './footer';
import Data from './data.json';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function App() {

  // const [searchTerm, setTerm] = useState(''); // stato dei dati iniziale

  // function cerca(text) {
  //   setTerm(text);
  //   console.log(searchTerm);
  // }
  return (
    <div className="App">

      <Navbar />

      <Grid container>
        {Data.map((el, index) => {
          return <BasicCard nome={el.name} prezzo={el.price.current.value} stock={el.availability.stock}/>
        })}
      </Grid>
      
      <Footer />

    </div>
  );
}

export default App;
