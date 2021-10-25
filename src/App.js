import './App.css';
import Navbar from './navbar';
import BasicCard from './main.js';
import Footer from './footer';
import Data from './data.json';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import products from './data.json';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dettaglio from './dettaglio';
import { Link } from 'react-router-dom';

function App() {
  
  const [searchTerm, setTerm] = useState(''); // stato dei dati iniziale
  const [arrProds, setArrProds] = useState(products);
  
  function cerca(text) {
    setTerm(text);
    console.log(searchTerm);
  }
  
  function reset(props) {
    setTerm('');
  }
  
  function detail() {
    return 
  }


  const toggle = (value) => {
    var newArr = [];
    products.map((prodx)=> {
      if (value == "in") {
        if (prodx.availability.stock > 0 ) {
          newArr.push(prodx);
        }
      }
      if (value == "out") {
        if (prodx.availability.stock <= 0) {
          newArr.push(prodx);
        }
      }
      setArrProds(newArr);
    });
    
  }
  
  
  
  return (
    
    <Router>
      <Switch>

        {/* ROUTE PER HOME */}

        <Route exact path="/">
          <div className="App">
            <Navbar content="text" searchText={searchTerm} toggle={(value) => toggle(value)} cerca={(text) => {cerca(text)}}      reset={() => {reset()}}/>
            <Grid container>
            {arrProds.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase())).map((produ) => ( 
              <BasicCard nome={produ.name} prezzo={produ.price.current.value} stock={produ.availability.stock}/>
              ))}
            </Grid> 
            <Footer />
          </div>
        </Route>


        {/* ROUTE PER DETTAGLIO */}

        <Route exact path="/dettaglio">
          <Link to="/dettaglio">
          <Dettaglio />
          </Link>
        </Route>

      </Switch>
    </Router>
      );
    }
    
    
    export default App;
    